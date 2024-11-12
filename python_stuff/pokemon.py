import aiohttp
import asyncio
import json
import time
import requests as rq

requests = [
    "https://pokeapi.co/api/v2/pokemon/ditto",
    "https://pokeapi.co/api/v2/pokemon/charmander",
    "https://pokeapi.co/api/v2/pokemon/charizard",
    "https://pokeapi.co/api/v2/pokemon/pikachu",
    "https://pokeapi.co/api/v2/pokemon/lugia",
    "https://pokeapi.co/api/v2/pokemon/ho-oh",
]


async def fetch(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()


async def fetch_async(requests):
    for request in requests:
        content = await fetch(request)
        pokemon = json.loads(content)["species"]["name"]
        print(pokemon)


async def fetch_async_gpt(requests):
    # Crear una lista de tareas para todas las solicitudes
    tasks = [fetch(request) for request in requests]

    # Ejecutar todas las tareas concurrentemente
    responses = await asyncio.gather(*tasks)

    # Procesar las respuestas en el orden en que se completan
    for content in responses:
        pokemon = json.loads(content)["species"]["name"]
        print(pokemon)


def fetch_sync(requests):
    for request in requests:
        response = rq.get(request)
        json_data = response.json()
        pokemon = json_data["species"]["name"]
        print(pokemon)


x1 = time.time()
print("Async fetch")
asyncio.run(fetch_async(requests))
x2 = time.time()
delta = x2 - x1
print(delta)

print()
print()

x3 = time.time()
print("Sync fetch")
fetch_sync(requests)
x4 = time.time()
delta_2 = x4 - x3
print(delta_2)

print()
print()

x5 = time.time()
print("Async fetch")
asyncio.run(fetch_async_gpt(requests))
x6 = time.time()
delta_3 = x6 - x5
print(delta_3)
