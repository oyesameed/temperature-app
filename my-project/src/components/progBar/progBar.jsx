// Progress bar component
// This componet will use daisy ui 
// as a plugin and render a circuler
// progress bar

// Component defination
export default function ProgBar() {

    // Render
    return (

        // Body
        <div className="radial-progress text-accent-1" style={{ "--value": "90", "--size": "12rem", "--thickness": "1rem" }}>
            {/* svg */}
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" fill="white" > 
                    OK 
                </circle>
            </svg>
        </div>
    )
}


