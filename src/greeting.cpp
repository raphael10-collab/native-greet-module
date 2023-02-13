#include <iostream>
#include <string>
#include "greeting.h"

std::string helloUser( std::string name) {
    //std::cout << "Hello " + name + " ! " << std::endl;
    return "Hello " + name + " !";
}

int main() {

    std::string HelloUserString = helloUser("marco");

    std::cout << HelloUserString << std::endl;

    return 0;
}
