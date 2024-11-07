{
    //
    type Circle ={
        shape: string;
        radius: number;
    };

    type Rectangle ={
        shape: string;
        width: number;
        height:  number;
    };

    //Union type
    type Shapes = Circle | Rectangle;
    
    //Type Guard
    function CircleShape(shape: Shapes): shape is Circle{
        return shape.shape === 'circle';
    };

    function RectangleShape(shape: Shapes): shape is Rectangle{
        return shape.shape === 'rectangle'
    };


    //Function
    function calculateShapeArea(shape: Shapes) : number {
        if (CircleShape(shape)){
            return Math.PI * shape.radius * shape.radius;
        } else if(RectangleShape(shape)) {
                return shape.width * shape.height;
            }
        throw new Error('Shape not matched');
    };

    //Result
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(`Circle Area is:`, circleArea.toFixed(2));

    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(`Rectangle Area is:`, rectangleArea);

    //
}