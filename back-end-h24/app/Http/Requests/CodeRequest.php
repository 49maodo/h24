<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CodeRequest extends FormRequest
{
    public function rules()
    {
        return [
            'titre' => ['required'],
            'categorie' => ['required', 'in:php,html,css'],
            'description' => ['required'],
            'code' => ['required'],
        ];
    }

    public function authorize()
    {
        return true;
    }
}
