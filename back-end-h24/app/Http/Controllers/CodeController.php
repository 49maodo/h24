<?php

namespace App\Http\Controllers;

use App\Http\Requests\CodeRequest;
use App\Http\Resources\CodeResource;
use App\Models\Code;
use GuzzleHttp\Psr7\Request;
use Illuminate\Http\JsonResponse;

class CodeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Code::query();

        if (request()->has('titre')) {
            $query->where('titre', 'like', '%' . request()->input('titre') . '%');
        }

        if (request()->has('categorie')) {
            $query->where('categorie', request()->input('categorie'));
        }

        return CodeResource::collection($query->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CodeRequest $request)
    {
        return new CodeResource(Code::create($request->validated()));
    }

    /**
     * Display the specified resource.
     */
    public function show(Code $code)
    {
        return new CodeResource($code);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CodeRequest $request, Code $code)
    {
        $code->update($request->validated());

        return new CodeResource($code);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Code  $code
     * @return JsonResponse
     */
    public function destroy(Code $code)
    {
        $code->delete();

        return response()->json();
    }
}
