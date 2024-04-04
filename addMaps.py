import requests
import json

# URL da API
url = "http://localhost:3000/api/veeam"

# JSON de entrada
data = [
  {
    "repoFilesystem": "REPO_3MENERGETICA",
    "tenant": "?",
    "veeamAcronym": "",
    "ligeroOrg": "3M ENERGETICA LTDA",
    "email": "3menergetica.backup@silastech.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_ADUFERTIL",
    "tenant": "ADUFERTIL",
    "veeamAcronym": "",
    "ligeroOrg": "ADUFERTIL",
    "email": "gabriel.guimaraes@adufertil.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_ALL4LABELS",
    "tenant": "ALL4LABELS",
    "veeamAcronym": "",
    "ligeroOrg": "ALL4LABELS",
    "email": "DL_BR_Monitoring_Infra@all4labels.com",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_ALL4LABELS_FLEXOPRINT",
    "tenant": "ALL4LABELS FLEXOPRINT",
    "veeamAcronym": "",
    "ligeroOrg": "ALL4LABELS",
    "email": "DL_BR_Monitoring_Infra@all4labels.com",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_ALL4LABELS_LABELPRESS",
    "tenant": "ALL4LABELS LABEL PRESS",
    "veeamAcronym": "",
    "ligeroOrg": "ALL4LABELS",
    "email": "DL_BR_Monitoring_Infra@all4labels.com",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_ALL4LABELS_S2",
    "tenant": "ALL4LABELS ARG-MEX S2",
    "veeamAcronym": "",
    "ligeroOrg": "ALL4LABELS",
    "email": "DL_BR_Monitoring_Infra@all4labels.com",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_ALL4LABELSBRASIL",
    "tenant": "ALL4LABELSBRA",
    "veeamAcronym": "",
    "ligeroOrg": "ALL4LABELS",
    "email": "DL_BR_Monitoring_Infra@all4labels.com",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_ALL4LABELSFLEXOPRINTS2",
    "tenant": "ALL4LABELS FLEXOPRINT S2",
    "veeamAcronym": "",
    "ligeroOrg": "ALL4LABELS",
    "email": "DL_BR_Monitoring_Infra@all4labels.com",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_ALL4LABELSLABELPRESSS2",
    "tenant": "ALL4LABELS LABEL PRESS S2",
    "veeamAcronym": "",
    "ligeroOrg": "ALL4LABELS",
    "email": "DL_BR_Monitoring_Infra@all4labels.com",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_ALTENBURG",
    "tenant": "ALTENBURG",
    "veeamAcronym": "",
    "ligeroOrg": "ALTENBURG",
    "email": "renato.uessler@altenburg.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_CS3K_ANAGE",
    "tenant": "ANAGE",
    "veeamAcronym": "",
    "ligeroOrg": "ANAG�",
    "email": "ti@anageimoveis.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_ARCOIRIS",
    "tenant": "ARCO IRIS",
    "veeamAcronym": "",
    "ligeroOrg": "ARCOIRIS",
    "email": "leonardo@arcoirislavanderia.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_ATB",
    "tenant": "ARTABAS",
    "veeamAcronym": "",
    "ligeroOrg": "ARTABAS",
    "email": "luan.crevelin@artabas.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_BLUMENAU_ILUMINACAO",
    "tenant": "BLUMENAU ILUMINACAO",
    "veeamAcronym": "",
    "ligeroOrg": "BLUMENAU ILUMINA��O",
    "email": "gabriel.d@blumenau.ind.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_CAMINHOVEICULOS",
    "tenant": "CAMINHO VEICULOS",
    "veeamAcronym": "",
    "ligeroOrg": "CAMINHO AUTOMOVEIS",
    "email": "ti@caminhoveiculos.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_CAPERE",
    "tenant": "?",
    "veeamAcronym": "",
    "ligeroOrg": "CAPERE",
    "email": "christian.debovi@capere.inf.br",
    "service": "Servidor"
  },
  {
    "repoFilesystem": "REPO_CARTORIOCAR",
    "tenant": "CARTORIO CARMOPOLIS",
    "veeamAcronym": "",
    "ligeroOrg": "CART�RIO CARMOPOLIS DE MINAS",
    "email": "cartoriocarlos.backup@silastech.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_CARTORIONEREU",
    "tenant": "OLIVEIRA CARTORIO",
    "veeamAcronym": "",
    "ligeroOrg": "CARTORIO NEREU",
    "email": "cartoriocida.backup@silastech.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_CATIVA",
    "tenant": "CATIVA",
    "veeamAcronym": "",
    "ligeroOrg": "CATIVA TEXTIL",
    "email": "luan.raitz@cativa.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_CELCOIN",
    "tenant": "CELCOIN",
    "veeamAcronym": "",
    "ligeroOrg": "CELCOIN",
    "email": "servicedesk@celcoin.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_CMJS",
    "tenant": "CMJS",
    "veeamAcronym": "",
    "ligeroOrg": "CMJS",
    "email": "regis@jaraguadosul.sc.leg.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_CONSISTEM",
    "tenant": "CONSISTEM",
    "veeamAcronym": "",
    "ligeroOrg": "CONSISTEM SISTEMAS LTDA",
    "email": "infraestrutura@consistem.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_COPAGRIL",
    "tenant": "COPAGRIL",
    "veeamAcronym": "",
    "ligeroOrg": "COPAGRIL",
    "email": "suporte@copagril.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_CORERS",
    "tenant": "CORE RS",
    "veeamAcronym": "",
    "ligeroOrg": "CORE-RS",
    "email": "informatica@core-rs.org.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_DOCOL",
    "tenant": "DOCOL",
    "veeamAcronym": "",
    "ligeroOrg": "DOCOL",
    "email": "monitoramentodocol@docol.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_EKONOVA",
    "tenant": "EKONOVA",
    "veeamAcronym": "",
    "ligeroOrg": "EKONOVA",
    "email": "ti@ekonova.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_FACTA",
    "tenant": "FACTA",
    "veeamAcronym": "",
    "ligeroOrg": "FACTA",
    "email": "coordenacao@factagestao.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_GBOEX",
    "tenant": "GBOEX",
    "veeamAcronym": "",
    "ligeroOrg": "GBOEX",
    "email": "martins@gboex.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_GOTAQUIMICA",
    "tenant": "GOTAQUIMICA",
    "veeamAcronym": "",
    "ligeroOrg": "GOTAQUIMICA",
    "email": "ti@gotaquimica.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_HOSPITALJARAGUA",
    "tenant": "HOSPITALJARAGUA",
    "veeamAcronym": "",
    "ligeroOrg": "Hospital Jaragu�",
    "email": "carine@hospitaljaragua.org.br",
    "service": "?"
  },
  {
    "repoFilesystem": "REPO_FISCHER",
    "tenant": "IRMAOS FISCHER",
    "veeamAcronym": "",
    "ligeroOrg": "IRMAOS FISCHER",
    "email": "veeamfischer@fischer.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_KFG",
    "tenant": "KFG",
    "veeamAcronym": "",
    "ligeroOrg": "KFG",
    "email": "antonio.pontes@kfgdistribuidora.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_LBD",
    "tenant": "LATICINIOS",
    "veeamAcronym": "",
    "ligeroOrg": "LATICINIOS BOM DESTINO",
    "email": "bomdestino.backup@silastech.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_LOBODERIZZO",
    "tenant": "LOBO DE RIZZO",
    "veeamAcronym": "",
    "ligeroOrg": "Lobo & De Rizzo",
    "email": "juliano.silva@ldr.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_LLV",
    "tenant": "LUCIMAR LUCENA VIANA",
    "veeamAcronym": "",
    "ligeroOrg": "LUCIMAR LUCENA VIANA",
    "email": "sitiodaserra.backup@silastech.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_MALWEE",
    "tenant": "MALWEE",
    "veeamAcronym": "",
    "ligeroOrg": "MALWEE",
    "email": "alessandro.lindemann@malwee.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_CS3K_MARVI",
    "tenant": "MARVI",
    "veeamAcronym": "",
    "ligeroOrg": "MARVI",
    "email": "coordenacao.ti1@marvi.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_MEC",
    "tenant": "?",
    "veeamAcronym": "",
    "ligeroOrg": "MEC",
    "email": "arthur.cavalcante@trescal.com",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_MEGALABSFARMACEUTICA",
    "tenant": "MEGALABS FARMACEUTICA S.A",
    "veeamAcronym": "",
    "ligeroOrg": "MEGALABS",
    "email": "bruno.alves@megalabsbrasil.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_RIOSULENSE",
    "tenant": "METALURGICA RIO SULENSE",
    "veeamAcronym": "",
    "ligeroOrg": "METALURGICA RIOSULENSE S/A",
    "email": "gleison@riosulense.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_FRS",
    "tenant": "FLORENSE",
    "veeamAcronym": "",
    "ligeroOrg": "M�VEIS FLORENSE",
    "email": "cleo@florense.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_OMNICOTTON",
    "tenant": "OMNICOTTON",
    "veeamAcronym": "",
    "ligeroOrg": "OMNICOTTON",
    "email": "crezende@omnicotton.com",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_PAMPLONA",
    "tenant": "PAMPLONA",
    "veeamAcronym": "",
    "ligeroOrg": "PAMPLONA",
    "email": "eventos@pamplona.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_PRIMATO",
    "tenant": "?",
    "veeamAcronym": "",
    "ligeroOrg": "PRIMATO",
    "email": "suporte@primato.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_ITAAS01",
    "tenant": "ITAAS01",
    "veeamAcronym": "",
    "ligeroOrg": "SERCOMPE IT SERVICES",
    "email": "internalmanage@sercompe.com.br",
    "service": "Veeam"
  },
  {
    "repoFilesystem": "REPO_SERCOMPE",
    "tenant": "SERCOMPE",
    "veeamAcronym": "",
    "ligeroOrg": "SERCOMPE IT SERVICES",
    "email": "internalmanage@sercompe.com.br",
    "service": "Veeam"
  },
  {
    "repoFilesystem": "REPO_SLALIMENTOS",
    "tenant": "SL Alimentos",
    "veeamAcronym": "",
    "ligeroOrg": "SL ALIMENTOS",
    "email": "ti@slpart.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_SOMA",
    "tenant": "SOMA URBANISMO",
    "veeamAcronym": "",
    "ligeroOrg": "SOMA URBANISMO S/A",
    "email": "suporte@somaurbanismo.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_TECADI",
    "tenant": "TECADI",
    "veeamAcronym": "",
    "ligeroOrg": "TECADI",
    "email": "luiz.poleza@tecadi.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_TSC",
    "tenant": "ACTVS",
    "veeamAcronym": "",
    "ligeroOrg": "TSC",
    "email": "johann.moraes@totvs.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_UNIMEDANAPOLIS",
    "tenant": "UNIMED ANAPOLIS",
    "veeamAcronym": "",
    "ligeroOrg": "UNIMED ANAPOLIS",
    "email": "ti@unimedanapolis.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_UNIMEDARAGUAINA",
    "tenant": "UNIMED ARAGUAINA",
    "veeamAcronym": "",
    "ligeroOrg": "UNIMED ARAGUAINA",
    "email": "ti@unimedaraguaina.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_UNIMEDFED",
    "tenant": "UNIMED FEDERACAO CENTRO",
    "veeamAcronym": "",
    "ligeroOrg": "UNIMED FEDERA��O",
    "email": "andre.barretos@unimedcb.coop.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_UNIMEDFEDERACAO",
    "tenant": "UNIMED FEDERACAO CENTRO",
    "veeamAcronym": "",
    "ligeroOrg": "UNIMED FEDERA��O",
    "email": "andre.barretos@unimedcb.coop.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_UNIMEDMIN",
    "tenant": "UNIMED MINEIROS",
    "veeamAcronym": "",
    "ligeroOrg": "UNIMED MINEIROS",
    "email": "ti@unimedmineiros.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_UNIMEDMINEIROS",
    "tenant": "UNIMED MINEIROS",
    "veeamAcronym": "",
    "ligeroOrg": "UNIMED MINEIROS",
    "email": "ti@unimedmineiros.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_UNIMEDMORRINHOS",
    "tenant": "UNIMED MORRINHOS",
    "veeamAcronym": "",
    "ligeroOrg": "UNIMED MORRINHOS",
    "email": "ti@unimedmorrinhos.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_UNIMEDPALMAS",
    "tenant": "UNIMED PALMAS",
    "veeamAcronym": "",
    "ligeroOrg": "UNIMED PALMAS",
    "email": "alziro@unimedpalmas.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_UNIVALI",
    "tenant": "UNIVALI",
    "veeamAcronym": "",
    "ligeroOrg": "UNIVALI",
    "email": "gomes@univali.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_LVA",
    "tenant": "LATICINIOSVAIDOSA",
    "veeamAcronym": "",
    "ligeroOrg": "VAIDOSA",
    "email": "vaidosa.backup@silastech.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_VEDAMOTORS",
    "tenant": "VEDAMOTORS",
    "veeamAcronym": "",
    "ligeroOrg": "VEDAMOTORS",
    "email": "Jeferson.marchi@vedamotors.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_VULCABRAS",
    "tenant": "VULCABRAS",
    "veeamAcronym": "",
    "ligeroOrg": "VULCABRAS",
    "email": "infraestrutura@vulcabras.com",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_SEMAE_WELT",
    "tenant": "SEMAE-WELT",
    "veeamAcronym": "",
    "ligeroOrg": "WELTSOLUTIONS",
    "email": "bergson.rodrigues@weltsolutions.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_ZAGONEL",
    "tenant": "ZAGONEL",
    "veeamAcronym": "",
    "ligeroOrg": "ZAGONEL",
    "email": "juliano@zagonel.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_COOPENSINOOURINHOS",
    "tenant": "COOPERATIVA ENSINO OURINHOS",
    "veeamAcronym": "",
    "ligeroOrg": "Cooperativa de Ensino de Ourinhos",
    "email": "fjcomputadores@hotmail.com",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_SOMALOGISTICA",
    "tenant": "SOMA LOGISTICA",
    "veeamAcronym": "",
    "ligeroOrg": "SOMA LOGISTICA",
    "email": "Informatica@somalogistica.com.br",
    "service": "Backup"
  },
  {
    "repoFilesystem": "REPO_AGRONORTE",
    "tenant": "Agro Norte Pesquisa e Sementes",
    "veeamAcronym": "",
    "ligeroOrg": "AGRO NORTE",
    "email": "juridico@agronorte.com.br",
    "service": "Backup"
  }
]

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
