interface Order {
    id: string;
    distance: number;
}
interface Transporter {
    isSuitable: (order: Order) => boolean;
    transport: () => void;
}
const makeTransporter = (
    name: string,
    isSuitable: (order: Order) => boolean,
) => {
    return {
        isSuitable,
        transport: () => console.log(`Transporting order ${order.id} by ${name}`),
    };
};
const transporters = [
    makeTransporter('sea', order => order.distance > 1000),
    makeTransporter('air', order => order.distance < 1000),
];
const getTransporter = (order: Order, methods: Transporter[]) =>
    methods.find(method => method.isSuitable(order));
const order = { id: '123', distance: 1000 };
getTransporter(order, transporters)?.transport();