export interface FancyNumber {
  id: string
  number: string
  price: number
  tags: string[]
  status: "available" | "sold"
  pattern_type: string
}

export interface FilterOptions {
  priceRange: string
  patternType: string
  search: string
}
