import React from "react"
import Cocktail from "./Cocktail"
import Loading from "./Loading"
import { useGlobalContext } from "../context"

export default function CocktailList() {
  const { cocktails, loading } = useGlobalContext()

  if (loading) return <Loading />

  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    )
  }

  const cocktailsList = cocktails.map((item) => (
    <Cocktail key={item.id} {...item} />
  ))

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">{cocktailsList}</div>
    </section>
  )
}
