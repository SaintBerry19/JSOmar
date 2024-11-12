import asyncio

async def say_hello():
    print("Hello!")
    await asyncio.sleep(2)
    print("Goodbye!")

async def greet_world():
    print("World!")
    await asyncio.sleep(1)
    print("See you later!")

async def main():
    await asyncio.gather(say_hello(), greet_world())

asyncio.run(main())

print("Hello! SYNC!")