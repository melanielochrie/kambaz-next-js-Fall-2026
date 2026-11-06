const STARSHIP =
    "https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg";
const LOREM =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic reprehenderit doloremque adipisci iste deserunt. Inventore, hic. Esse nihil unde aut, dignissimos eos consequatur veniam distinctio?";

export default function Float() {
    return (
        <div id="wd-float-divs">
            <h2>Float</h2>
            <div>
                <img className="wd-float-right" src={STARSHIP} alt="Starship" />
                {LOREM} {LOREM}
                <img className="wd-float-left" src={STARSHIP} alt="Starship" />
                {LOREM} {LOREM}
                <img className="wd-float-right" src={STARSHIP} alt="Starship" />
                {LOREM} {LOREM}
                <img className="wd-float-left" src={STARSHIP} alt="Starship" />
                {LOREM} {LOREM}
                <div className="wd-float-done" />
            </div>
            <div>
                <div id="wd-ai-float" className="wd-float-right wd-bg-color-gray">
                    Floating Box
                </div>
                <p>{LOREM}</p>
                <div className="wd-float-done" />
            </div>
            <div>
                <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
                    Yellow
                </div>
                <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
                    Blue
                </div>
                <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
                    Red
                </div>
                <img className="wd-float-right" src={STARSHIP} alt="Starship" />
                <div className="wd-float-done" />
            </div>
            <div>
                <div className="wd-my-float-box">
                    My Float
                </div>

                <p>
                    I'm practicing CSS floats. This paragraph wraps around
                    my green box because the box is floating to the left.
                    The text continues beside the box until there is no
                    more room.
                </p>

                <div className="wd-clear-both"></div>

                <p>
                    This paragraph starts below the floating box because
                    I used clear: both.
                </p>
            </div>

        </div>
    );
}