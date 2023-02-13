#include "./greeting.h"
#include <napi.h>
#include <string>

// https://github.com/nodejs/node-addon-examples/blob/main/1_hello_world/node-addon-api/hello.cc

// native C++ function that is assigned to "greetHello" property on "exports" object

Napi::String greetHello(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    // call "helloUser" function from "greeting.cpp" file
    // WARNING: We are passing hardcoded "MIKE" value for now
    std::string result = helloUser( "MIKE" );

    // return new "Nap::String" value
    return Napi::String::New(env, result);
}

// callback method when module is registered with Node.js
Napi::Object Init(Napi::Env env, Napi::Object exports) {

    // set a key on "exports" object
    exports.Set(
        Napi::String::New(env, "greetHello"), // property name => "greetHello"
        Napi::Function::New(env, greetHello) // property value => "greetHello" function
    );

    // return "exports" object (always)
    return exports;
}

// register "greet" module which calls "Init" method
NODE_API_MODULE(greet, Init)


