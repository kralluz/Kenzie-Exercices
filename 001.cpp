#include <iostream>

using namespace std;

int main () {
    string nome;
    int ano_nasc, idade;

    const int ano_atual = 2023;

    cout << "Nome: ";
    getline(cin, nome)
    cin >> nome;
    cout << "Ano de nascimento: ";
    cin >> ano_nasc;

    idade = 2023 - ano_nasc;

    cout << "Olá " << nome << "! Seja bem vindo"<< endl;
    cout << "Em " << ano_atual <<" você terá "<< idade << endl;
}