"use client"

import { Icon } from "@iconify/react"
import Link from "next/link"
import { useReducer } from "react"


interface State {
  planType: string;
  duration: string;
  basicPrice: string;
  standardPrice: string;
  premiumPrice: string;
}

interface Action {
  type: "Monthly" | "Yearly";
  payload: {
    duration: string;
    basicPrice: string;
    standardPrice: string;
    premiumPrice: string;
  }
}



const Pricing = () => {
  
  const initialTabConfig: State = { // Estructura de datos con un tipo de plan por defecto
    planType: "Monthly",
    duration: "per month",
    basicPrice: "99",
    standardPrice: "249",
    premiumPrice: "499"
  }

  function reducer(state: State, action: Action):State {
    switch (action.type){
      case "Monthly":
      case "Yearly":
        return {
          ...state,
          ...action.payload,
          planType: action.type
        }
        default:
          return state
    }
  }

  const [tabConfig, dispatch] = useReducer(reducer, initialTabConfig)
  
  return (
    <>
      <section className="overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
        <div className="container mx-auto lg:max-w-[--breakpoint-xl] md:max-w-[--breakpoint-md] px-4 space-y-14">
          <div className="text-center">
            <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
              FLEXIBLE PRICING
            </span>

            <h2 className="mt-4 font-chakrapetch lg:text-35 font-semibold mb-5">
              Our Pricing Plan
            </h2>

            <div className="text-center pb-6">
              <div className="inline-flex items-center rounded-xl p-2 shadow-lg">
                <button 
                  className={`
                    py-3 px-7 rounded-xl 
                    ${tabConfig.planType === "Monthly" ? "bg-dark text-white" : "bg-transparent text-black"}
                  `}
                  onClick={() => dispatch({
                    type: "Monthly",
                    payload: {
                      duration: "per month",
                      basicPrice: "99",
                      standardPrice: "249",
                      premiumPrice: "499"
                    }
                  })}  
                >
                  Monthly
                </button>

                <button
                  className={`
                    py-3 px-7 rounded-xl 
                    ${tabConfig.planType === "Yearly" ? "bg-dark text-white" : "bg-transparent text-black"}
                  `}
                  onClick={() => dispatch({
                    type: "Yearly",
                    payload: {
                      duration: "per year",
                      basicPrice: "299",
                      standardPrice: "599",
                      premiumPrice: "899"
                    }
                  })}
                >
                  Yearly
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing 