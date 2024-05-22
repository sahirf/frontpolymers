// import imagen from '../src/assets/Bg.png'

export default function Mainbg (){
    return (
        <>
            {/* <div
                    style={{
                        backgroundImage: `url(${imagen})`
                    }}
                    
                /> */}
            <div
                style={{
                backgroundColor: '#112D4E',
                position: "absolute",
                zIndex: -3,
                height: '100vh',
                width: '100vw',
                clipPath: 'polygon(100% 0%, 0% 0%, 0% 70%, 100% 45%)',
                }}
                
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="100vw" height="100vh" viewBox="0 0 1440 604" fill="none"  style={{
                zIndex:-2,
                position: "absolute",
                marginTop:"1rem",
            }}>
            <path d="M1437.15 361.632C1437.15 361.632 1619.76 -278.535 1424.88 146.982C1230 572.5 -22.0005 -6.65004 -22.0005 533.5C-22.0005 558.103 -0.657909 602.547 -0.657909 602.547L1437.15 361.632Z" fill="#3F72AF" stroke="#3F72AF"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="100vw" height="100vh" viewBox="0 0 1440 540" fill="none" style={{
                zIndex:-1,
                position: "absolute",
                marginTop:"3rem",
                
            }}>
            <path d="M1442.63 317.874C1442.63 317.874 1628.62 -244.484 1431.89 129.811C1235.15 504.107 98.5179 17.5279 -9.94457 478.405C-25.4994 544.5 10.8171 538.781 10.8171 538.781L1442.63 317.874Z" fill="#DBE2EF" stroke="#DBE2EF"/>
            </svg>
        </>
    );
  }
  