<?php

namespace App\Http\Controllers;

use App\Http\Resources\BeritaCollection;
use App\Models\Berita;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Termwind\render;

class BeritaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $berita = new  BeritaCollection(Berita::OrderByDesc('id')->paginate(8));
        

        return Inertia::render('Homepage', [
            'title'=>"Berita",
            'description' => 'Selamat Datang',
            'berita'=>$berita,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $berita = new Berita();
        $berita->judul = $request->judul;
        $berita->deskripsi = $request->deskripsi;
        $berita->kategori = $request->kategori;
        $berita->penulis = auth()->user()->name;
        $berita->save();

        return redirect()->back()->with('message','Berhasil Tersimpan');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Berita  $berita
     * @return \Illuminate\Http\Response
     */
    public function show(Berita $berita)
    {
        $dataBeritaSaya = $berita::where('penulis', auth()->user()->name)->get();

       return Inertia::render('Dashboard', [
            'dataBeritaSaya'=>$dataBeritaSaya,
        ]);
        

       
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Berita  $berita
     * @return \Illuminate\Http\Response
     */
    public function edit(Berita $berita, Request $request)
    {
        return Inertia::render('EditBerita',[
             'dataBeritaSaya' => $berita->find($request->id)
        ]);
       
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Berita  $berita
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Berita $berita)
    {
        Berita::where('id',$request->id)->update([
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'kategori' => $request->kategori,
        ]);

        return to_route('dashboard')->with('message','Berhasil Diubah !');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Berita  $berita
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $berita = Berita::find($request->id);
        $berita->delete();

        return to_route('dashboard')->with('message','Berhasil Dihapus !');
    }
}
