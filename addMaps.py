import requests
import json
import os

# URL da API
url = "http://localhost:3000/api/veeam"
# File with json
file = "veeam.json"

# JSON de entrada
def fileVerify(file):
    if os.path.exists(file):
        return True
    else:
        return f'Arquivo "{file}" não existe.'
    
def readFile(file):
    va = fileVerify(file)
    if va != True:
        print(va)
        exit(0)
    with open(file,'r') as arq:
        data = json.load(arq)
    if data == None:
        print(f'Sem dados no arquivo "{file}".')
        exit(0)
    return data

data = readFile(file)
# Iterando sobre cada entrada no JSON
for entry in data:
    # Convertendo a entrada para o formato esperado pela API
    payload = json.dumps({
        "veeamRepoFilesystem": entry["repoFilesystem"],
        "veeamTenant": entry["tenant"],
        "veeamAcronym": entry["veeamAcronym"],
        "ligeroCustomerId": entry["ligeroOrg"],
        "ligeroEmail": entry["email"],
        "ligeroService": entry["service"]
    })

    # Enviando a requisição POST para a API
    response = requests.post(url, headers={'Content-Type': 'application/json'}, data=payload)

    # Verificando o código de status da resposta
    if response.status_code == 200:
        print("Entrada adicionada com sucesso via API")
    else:
        print(f"Falha ao adicionar entrada via API: {response.text}")
