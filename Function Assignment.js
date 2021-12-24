function cutFruitPieces()
{
    return 2;
}
function fruitProcessor(apples, oranges)
{
    
    //let orangePieces=cutFruitPieces(oranges);

    let juice=`juice with ${apples} piece of apples and ${oranges} piece of oranges`;
    return juice;
}
    console.log(fruitProcessor(cutFruitPieces() ,3));