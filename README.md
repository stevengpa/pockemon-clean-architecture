# Pokemon Clean Architecture

### Temporal Data Mapping
https://pokeapi.co/api/v2/pokemon?limit=10&offset=0
- calculate id base on url
    - "url": "https://pokeapi.co/api/v2/pokemon/1/"
name
    - "name": "bulbasaur"


https://pokeapi.co/api/v2/pokemon/1/
weight
sprites
    - front_default
        - "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    - back_default
        - "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
abilities
    - ability
        - calculate id base on url
            - "url": "https://pokeapi.co/api/v2/ability/65/"
        - name
            - "name": "overgrow"