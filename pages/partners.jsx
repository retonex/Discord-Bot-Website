
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Partners
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://dc.gg/lexuder">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://i.imgur.com/lpPnQHl.gif" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Lexuder</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
Lexuder Arkadaşlarınızla Sohbet edip oyun oynayıp eğlenebileceğiniz mükemmel bir ortam sunuyor hadi tıkla ve sunucuya gel sen de yerini al!                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>


                            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://discord.gg/8Sn2eZapP9">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://i.imgur.com/09kxsMD.png" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white"></h1>        
                                <div className="flex items-center mt-1">LexuderNW
                                    <p className="font-normal font-sm">
                                   Minecraft mı oynnuyorsun o zaman seni Minecraft Sunucusuna bekleriz! Eğlenmek için En iyi yerin!
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};
