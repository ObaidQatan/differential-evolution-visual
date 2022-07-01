import { Button } from "@mui/material"
import Head from "next/head";
import { useEffect, useState } from "react";
import { diff_evo, diff_params } from "../../src/assets/diff-rev";
import { setPair } from "../../src/Storage";
import { Container } from "../../src/styled-components";
import { PopulationArgs } from "../../src/types";
import { range } from "../../src/utils";

function Page1() {

    const [args, setArgs] = useState<PopulationArgs>({
        bounds: [[-5,5],[-5,5]],
        popsize: 20,
        mutate: 0.5,
        recombination: 0.7,
        maxiter: 40,
    });

    setPair('args',args,setArgs);

    const [ratio, setRatio] = useState<number>(20);
    setPair('ratio',ratio,setRatio);
    
    
    const [population, setPopulation] = useState<Array<Array<number>>|null>(null);
    const [genAvg, setGenAvg] = useState<number|null>(null);
    const [genBest, setGenBest] = useState<number|null>(null);
    const [genSol, setGenSol] = useState<number|null>(null);
    const [solIndex, setSolIndex] = useState<number|null>(null);

    const [allowSolve, setAllowSolve] = useState<boolean>(false);

    setPair('population',population,setPopulation);


    useEffect(() => {
    
      return () => {
        setGenAvg(null);
        setGenBest(null);
        setGenSol(null);
        setSolIndex(null);

      }
    }, [population]);



    function getPopulation(){
        
        const population_temp = [];
        
        for (let i in range(args.popsize)) {
            let indv = []
            
            for (let j in range(args.bounds.length)) {
                
                indv.push(args.bounds[j][0] + Math.random()*(args.bounds[j][1] - args.bounds[j][0]))
            }
            population_temp.push(indv);
        }
        
        setAllowSolve(true);
        return population_temp;
    }



    function solve(){
        const sol = diff_evo(...diff_params,population);

        setAllowSolve(false);
        setGenAvg(sol.gen_avg);
        setGenBest(sol.gen_best);
        setGenSol(sol.gen_sol);
        setSolIndex(sol.sol_index);
    }

console.log(solIndex)    

  return (
    <Container className="flex flex-col items-center relative w-screen md:flex-row">
        <Head>
            <title>DAA| Start</title>
            <meta name="description" content="visiual implementaion of Differential Eevolution Optimization" />
            <link rel="icon" href="/favicon.ico" />
      </Head>


        <div className="w-fit">
            <ul className="bg-black bg-opacity-5 p-5 rounded-md m-5">
                <li>population: <span className={"text-red-500"}>{population?.length||0}</span></li>
                <hr/>
                <br/>
                <li>Generation Average: <span className={genSol?"text-blue-600":"text-gray-500"}>{genAvg||'not set'}</span></li>
                <hr/>
                <br/>
                <li>Best Generation: <span className={genSol?"text-blue-600":"text-gray-500"}>{genBest||'not set'}</span></li>
                <hr/>
                <br/>
                <li>Solution: <span className={genSol?"text-blue-600":"text-gray-500"}>{genSol||'not set'}</span></li>
                <hr/>
                <br/>
                <li>Position of solution in the generated population: <span className={genSol?"text-blue-600":"text-gray-500"}>{(solIndex || solIndex === 0)? solIndex : 'not set'}</span></li>
            </ul>

            <Button className="m-5" variant="outlined" onClick={()=>setPopulation(getPopulation())}>
                generate
            </Button>
            <br/>

            {
            allowSolve &&

            <Button className="m-5 bg-blue-500" variant="contained" onClick={solve}>
                solve
            </Button>
            }
        </div>


        <div className={"relative bg-black bg-opacity-10 h-60 w-60 border-l-2 border-b-2 border-black mt-20 md:ml-auto md:h-80 md:w-80"}>
        {
            population?.map((pop:Array<number>,i:number)=>(
                <div key={i} style={{
                    position: "absolute",
                    left: pop[0]*ratio,
                    top: pop[1]*ratio,
                    margin: '20px',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: solIndex===i ? 'green' : 'red',
                    border: '2px black solid',
                    zIndex: solIndex===i ? 10 : 1
                }}></div>
            ))
        }
        </div>
    </Container>
  )
}

export default Page1