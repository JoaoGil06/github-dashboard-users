export interface ChartData {
    label: string;
    value: string | number;
}
export default interface Doughnut2DProps {
    data: ChartData[]
}