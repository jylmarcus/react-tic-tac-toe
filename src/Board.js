import Square from "./Square"

export default function Board() {
    return (
        <>
            <div className="board-row">
                <Square value="1" />
                <Square value="2" />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    )
}