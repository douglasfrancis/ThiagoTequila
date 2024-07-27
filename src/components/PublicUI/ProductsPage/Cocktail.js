import React from 'react'
import './Cocktail.css'
import vanillaImg from '../../../Assets/cocktails/vanilla-cocktail.webp'
import tamarindoImg from '../../../Assets/cocktails/tamarindo-cocktail.webp'
import cherryImg from '../../../Assets/cocktails/cherry-cocktail.webp'
import coffeeImg from '../../../Assets/cocktails/coffee-cocktail.webp'

const cocktails = {
  vanilla: {
    firstName: 'Vanilla', 
    secondName: 'Paloma', 
    img: vanillaImg,
    ingredients: [
      "50 ml Thiago Tequila Vanilla",
      "100 ml fresh squeezed pink grapefruit juice",
      "1 tablespoon fresh lime juice",
      "1 teaspoon sugar",
      "soda water",
      "cubed iced"
    ],
    directions: "Stir Thiago Tequila Vanilla, grapefruit juice, lime juice and sugar in an old-fashioned glass.Top with ice, club soda and enjoy!" 
  },
  tamarindo: {
    firstName: 'Sour', 
    secondName: 'Sunset', 
    img: tamarindoImg,
    ingredients: [
      "50ml Thiago Tequila Tamarindo",
      "10ml grenadine",
      "25ml triple sec",
      "10ml fresh orange juice",
    ],
    directions: "Pour Thiago Tequila Tamarindo Sour, grenadine, triple sec and fresh orange over ice. Garnish with an orange slice for a refreshingly zesty cocktail." 
  },
  cherry: {
    firstName: 'Black Cherry', 
    secondName: 'Margarita', 
    img: cherryImg,
    ingredients: [
      "50ml Thiago Tequila Black Cherry",
      "25ml fresh lime juice",
      "25ml triple sec",
      "crushed ice",
      "sea salt",
      "lime wedges"
    ],
    directions: "Blitz Thiago Tequila Black Cherry with lime juice, triple sec and ice. Serve in salt rimmed glasses and garnish with lime wedges." 
  },
  coffee: {
    firstName: 'Mocha', 
    secondName: 'Martini', 
    img: coffeeImg,
    ingredients: [
      "35ml Thiago Tequila Coffee",
      "25 ml chocolate liqueur",
      "12ml caramel syrup",
      "50ml chilled espresso",
      "coffee beans for garnish",
      "1 tsp chocolate powder",
      "cubed ice"
    ],
    directions: "Shake Thiago Tequila Coffee with chocolate liqueur, caramel syrup, espresso and ice and pour. Garnish with espresso beans and a dusting of chocolate." 
  }
}

export default function Cocktail({ flavour }) {
  const cocktail = cocktails[flavour];

  if (!cocktail) {
    return <div>Invalid flavour</div>;
  }

  return (
    <div className='cocktail'>
      <div style={{margin: '0 auto'}} className='cocktail-info'>
        <p className='why-not' id={`${flavour}-why-not`}>Why not try...</p>

        <p className='first-name' id={`${flavour}-first-name`}>{cocktail.firstName}</p>
        <p className='second-name' id={`${flavour}-second-name`}>{cocktail.secondName}</p>

        <p className='info-header'>Ingredients</p>
        {cocktail.ingredients.map((ingredient, i) => {
          return (
            <p className="ingredient" key={i}>{ingredient}</p>
          )
        })}

        <p className='info-header'>Directions</p>
        <p className='directions'>{cocktail.directions}</p>
      </div>

      <img className='cocktail-img' src={cocktail.img} alt={`Thiago Flavoured Tequila ${cocktail.firstName} ${cocktail.secondName} cocktail`} />
    </div>
  )
}