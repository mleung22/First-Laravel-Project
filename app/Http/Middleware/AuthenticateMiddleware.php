<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class AuthenticateMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        echo $request->route('id');
        // return redirect('addUser');
        // return $next($request);
    }
}
