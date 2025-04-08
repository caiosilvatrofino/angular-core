#!/bin/bash

API_URL="http://localhost:8080/api/carro/save"

curl -X POST $API_URL -H "Content-Type: application/json" -d '{
  "nome": "Jeep Compass",
  "ano": 2017,
  "cambio": "Automático",
  "placa": "ABC0002",
  "km": "35000",
  "combustivel": "Etanol",
  "financiamento": "Quitado",
  "marca": {
    "nome": "Ford",
    "cnpj": "59.104.136/0001-38"
  },
  "proprietarios": [
    {
      "nome": "João Pedro",
      "idade": 27
    }
  ]
}'

curl -X POST $API_URL -H "Content-Type: application/json" -d '{
  "nome": "Fiat Argo",
  "ano": 2018,
  "cambio": "Automático",
  "placa": "ABC0003",
  "km": "42000",
  "combustivel": "Flex",
  "financiamento": "Em andamento",
  "marca": {
    "nome": "Fiat",
    "cnpj": "44.456.789/0001-22"
  },
  "proprietarios": [
    {
      "nome": "Mariana Castro",
      "idade": 28
    }
  ]
}'

curl -X POST $API_URL -H "Content-Type: application/json" -d '{
  "nome": "Chevrolet Onix",
  "ano": 2019,
  "cambio": "Manual",
  "placa": "ABC0004",
  "km": "30000",
  "combustivel": "Gasolina",
  "financiamento": "Quitado",
  "marca": {
    "nome": "Chevrolet",
    "cnpj": "59.275.792/0001-20"
  },
  "proprietarios": [
    {
      "nome": "Carlos Eduardo",
      "idade": 29
    }
  ]
}'

curl -X POST $API_URL -H "Content-Type: application/json" -d '{
  "nome": "Hyundai HB20",
  "ano": 2020,
  "cambio": "Automático",
  "placa": "ABC0005",
  "km": "28000",
  "combustivel": "Flex",
  "financiamento": "Em andamento",
  "marca": {
    "nome": "Hyundai",
    "cnpj": "02.797.058/0001-77"
  },
  "proprietarios": [
    {
      "nome": "Bruna Souza",
      "idade": 30
    }
  ]
}'

curl -X POST $API_URL -H "Content-Type: application/json" -d '{
  "nome": "Honda Civic",
  "ano": 2021,
  "cambio": "Automático",
  "placa": "ABC0006",
  "km": "22000",
  "combustivel": "Etanol",
  "financiamento": "Quitado",
  "marca": {
    "nome": "Honda",
    "cnpj": "05.211.546/0001-70"
  },
  "proprietarios": [
    {
      "nome": "Diego Fernandes",
      "idade": 31
    }
  ]
}'

curl -X POST $API_URL -H "Content-Type: application/json" -d '{
  "nome": "Renault Duster",
  "ano": 2022,
  "cambio": "Automático",
  "placa": "ABC0007",
  "km": "15000",
  "combustivel": "Diesel",
  "financiamento": "Em andamento",
  "marca": {
    "nome": "Renault",
    "cnpj": "33.379.675/0001-96"
  },
  "proprietarios": [
    {
      "nome": "Fernanda Lopes",
      "idade": 32
    }
  ]
}'

curl -X POST $API_URL -H "Content-Type: application/json" -d '{
  "nome": "Toyota Corolla",
  "ano": 2023,
  "cambio": "Automático",
  "placa": "ABC0008",
  "km": "11000",
  "combustivel": "Gasolina",
  "financiamento": "Quitado",
  "marca": {
    "nome": "Toyota",
    "cnpj": "46.243.915/0001-07"
  },
  "proprietarios": [
    {
      "nome": "Lucas Lima",
      "idade": 33
    }
  ]
}'
