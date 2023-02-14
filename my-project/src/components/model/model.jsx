import ProgBar from "../progBar/progBar";

// Component defination
export default function Model() {

    return (
       
        // Model
        <div className="absolute bg-gray-2 w-full md:w-6/12 min-w-min h-full md:h-2/4 rounded-md shadow px-8 py-2">

            {/* Header */}
            <div>
                {/* Time */}
                <p className="text-white-1 pb-8 pt-3">
                    3:20 24 May 2013
                </p>

                {/* Seperator */}
                <div className="w-24 h-1 bg-accent-1"></div>
                
                {/* Subtitle */}
                <p className="text-white-1 py-2 text-sm">
                    ADJUST THE TEMPERATURE
                </p>
            </div>

            {/* Body */}
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start py-8 px-8">
                
                {/* Left */}
                <div className="hidden md:block pb-10">

                    {/* Title */}
                    <div className="text-accent-1 text-2xl">
                        CURRENT
                    </div> 

                    {/* Subtitle */}
                    <p className ="text-white-1 text-8xl pt-3">
                        21 
                    </p>
                </div>

                {/* Center */}
                <div className ="text-white-1 pt-20 md:pt-0 pb-10 px-10">
                    
                    {/* Progress bar */}
                    <ProgBar/>
                </div>
               

                {/* Right */}
                <div className="flex flex-row w-full md:w-fit justify-around pt-10 md:pt-0">
                    
                    <div className="block md:hidden pb-10">

                        {/* Title */}
                        <div className="text-accent-1 text-2xl">
                            CURRENT
                        </div> 

                        {/* Subtitle */}
                        <p className ="text-white-1 text-8xl pt-3">
                            21 
                        </p>
                    </div>

                    {/* Body */}
                    <div>
                        <div>
                            {/* Title */}
                            <div className="text-accent-2 text-2xl text-center">
                                DESIRED
                            </div> 
                            {/* Subtile */}
                            <p className ="text-white-1 text-8xl pt-3 text-center">
                                +3
                            </p>
                        </div>
                        
                        {/* Line */}
                        <div className=" w-32 md:w-48 h-0.5 bg-white my-5"></div>
                        
                        {/* Inner body */}
                        <div className ="text-white-2 text-sm">
                            <p>IN <span className="text-white-1">15MIN</span> </p>
                            <div className="p-1"/>
                            <p>POTENTIALLY <span className="text-white-1">4%</span></p>
                            <p>MORE EXPENSIVE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}



