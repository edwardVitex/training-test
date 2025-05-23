/* eslint-disable no-use-before-define */
export declare namespace PokemonType {
    export interface PokemonListItemModel {
        name: string
        url: string
    }

    export interface PokemonDetailModel {
        base_happiness: number
        capture_rate: number
        color: Color
        egg_groups: EggGroup[]
        evolution_chain: EvolutionChain
        evolves_from_species: EvolvesFromSpecies
        flavor_text_entries: FlavorTextEntry[]
        form_descriptions: FormDescription[]
        forms_switchable: boolean
        gender_rate: number
        genera: Genera[]
        generation: Generation
        growth_rate: GrowthRate
        habitat: any
        has_gender_differences: boolean
        hatch_counter: number
        id: number
        is_baby: boolean
        is_legendary: boolean
        is_mythical: boolean
        name: string
        names: Name[]
        order: number
        pal_park_encounters: any[]
        pokedex_numbers: PokedexNumber[]
        shape: Shape
        varieties: Variety[]
    }

    export interface Color {
        name: string
        url: string
    }

    export interface EggGroup {
        name: string
        url: string
    }

    export interface EvolutionChain {
        url: string
    }

    export interface EvolvesFromSpecies {
        name: string
        url: string
    }

    export interface FlavorTextEntry {
        flavor_text: string
        language: Language
        version: Version
    }

    export interface Language {
        name: string
        url: string
    }

    export interface Version {
        name: string
        url: string
    }

    export interface FormDescription {
        description: string
        language: Language2
    }

    export interface Language2 {
        name: string
        url: string
    }

    export interface Genera {
        genus: string
        language: Language3
    }

    export interface Language3 {
        name: string
        url: string
    }

    export interface Generation {
        name: string
        url: string
    }

    export interface GrowthRate {
        name: string
        url: string
    }

    export interface Name {
        language: Language4
        name: string
    }

    export interface Language4 {
        name: string
        url: string
    }

    export interface PokedexNumber {
        entry_number: number
        pokedex: Pokedex
    }

    export interface Pokedex {
        name: string
        url: string
    }

    export interface Shape {
        name: string
        url: string
    }

    export interface Variety {
        is_default: boolean
        pokemon: Pokemon
    }

    export interface Pokemon {
        name: string
        url: string
    }

}
