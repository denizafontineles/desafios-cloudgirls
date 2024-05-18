# Python utiliza o snake case nas variáveis, funções e métodos como idade_do_amigo e não camel case
# Para classes iniciamos com a primeira letra maiúscula
# E tudo maísculo é para constantes IDADE_DO_AMIGO
# Dicionario em python = chave e valor {'Nome':'Praça'}

import os

#  Dicionarios = chave : valor

restaurantes = [{'nome': 'Praça', 'categoria': 'Japonesa', 'ativo': False},
                {'nome': 'Mania', 'categoria': 'Hamburgueria', 'ativo': True},
                {'nome': 'Harry Potter', 'categoria': 'Hamburgueria', 'ativo': False},
                {'nome': 'Clebão', 'categoria': 'Hot-dog', 'ativo': True}
                ]

def exibir_nome_programa():
    """ Exibe o nome estilizado do programa na tela """

    print('''
    █▀▀ █▀▀█ █▀▀▄ █▀▀█ █▀▀█ 　 █▀▀ █─█ █▀▀█ █▀▀█ █▀▀ █▀▀ █▀▀ 
    ▀▀█ █▄▄█ █▀▀▄ █──█ █▄▄▀ 　 █▀▀ ▄▀▄ █──█ █▄▄▀ █▀▀ ▀▀█ ▀▀█ 
    ▀▀▀ ▀──▀ ▀▀▀─ ▀▀▀▀ ▀─▀▀ 　 ▀▀▀ ▀─▀ █▀▀▀ ▀─▀▀ ▀▀▀ ▀▀▀ ▀▀▀
    ''')

def menu_opcoes():

    """ Exibe as opções disponíveis no menu principal """

    print('1. Cadastrar restaurante')
    print('2. Listar restaurante')
    print('3. Ativar ou desativar restaurante')
    print('4. Sair \n')


def voltar_menu_principal():
    """ Solicita uma tecla para voltar ao menu principal

    Outputs:
    - Retorna ao menu principal
    """

    input('\nDigite uma tecla para voltar ao menu: ')
    main()


def finalizar_app():
    """ Exibe mensagem de finalização do aplicativo """

    exibir_subtitulo('Finalizar App')


def opc_invalida():
    """ Exibe mensagem de opção inválida e retorna ao menu principal

    Outputs:
    - Retorna ao menu principal
    """

    print('Opção Invalida')
    voltar_menu_principal()

def exibir_subtitulo(texto):
    """ Exibe um subtítulo estilizado na tela

    Inputs:
    - texto: str - O texto do subtítulo
    """

    os.system('cls')
    linha = '*' * (len(texto))
    print(linha)
    print(texto)
    print(linha)
    print()


def cadastrar_restaurante():
    """ Essa função é responsável por cadastrar um novo restaurante
    Inputs:
    - Nome do restaurante
    - Categoria
    Output:
    - Adiciona um novo restaurante a lista de restaurantes
    """

    exibir_subtitulo('Cadastro de novos restaurantes')
    nome_restaurante = input('Digite o nome do Restaurante: ')
    categoria = input('Digite o nome da Categoria: ')
    dados_restaurante = {'nome': nome_restaurante, 'categoria': categoria, 'ativo': False}
    restaurantes.append(dados_restaurante)
    print(f'\nRestaurante "{nome_restaurante}" foi cadastrado com sucesso!\n')
    voltar_menu_principal()

def listar_restaurantes():
    """ Lista os restaurantes presentes na lista

    Outputs:
    - Exibe a lista de restaurantes na tela
    """

    exibir_subtitulo('Listando Restaurantes')

    print(f'Nome  restaurante'.ljust(25), 'Categoria'.ljust(20), 'Status')
    for restaurante in restaurantes:
        nome_res = restaurante['nome']
        categoria = restaurante['categoria']
        ativo = 'ativado' if restaurante['ativo'] else 'desativado'
        print(f'{nome_res.ljust(25)} {categoria.ljust(20)} {ativo}')
    voltar_menu_principal()


def alterna_estado():
    """ Altera o estado ativo/desativado de um restaurante

    Outputs:
    - Exibe mensagem indicando o sucesso da operação
    """

    exibir_subtitulo('Desativar ou Ativar o restaurante')
    nome_restaurante = input('digite o nome do restaurante que queira ativar ou desativar: ')
    restaurante_encontrado = False

    for restaurante in restaurantes:
        if nome_restaurante == restaurante['nome']:
            restaurante_encontrado = True
            restaurante['ativo'] = not restaurante['ativo']
            mensagem = f'O restaurante {nome_restaurante} foi ativado com sucesso' if restaurante['ativo'] else f'O restaurante {nome_restaurante} foi desativado com sucesso'
            print(mensagem)
    if not restaurante_encontrado:
        print('O restaurante não foi encontrado')
    voltar_menu_principal()

def escolher_opcao():
    """ Solicita e executa a opção escolhida pelo usuário

    Outputs:
    - Executa a opção escolhida pelo usuário
    """

    try:
        opc_escolha = int(input('Escolha uma opção: '))

        if opc_escolha == 1:
            cadastrar_restaurante()
        elif opc_escolha == 2:
            listar_restaurantes()
        elif opc_escolha == 3:
            alterna_estado()
        elif opc_escolha == 4:
            finalizar_app()
        else:
            opc_invalida()
    except:
        opc_invalida()

def main():
    os.system('cls')
    exibir_nome_programa()
    menu_opcoes()
    escolher_opcao()


if __name__ == '__main__':
    main()
