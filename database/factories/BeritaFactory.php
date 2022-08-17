<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Berita>
 */
class BeritaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'judul' => fake()->sentence(),
            'deskripsi' => fake()->paragraph(2, true),
            'kategori' => fake()->sentence(),
            'penulis' => fake()->name(),
        ];
    }
}
