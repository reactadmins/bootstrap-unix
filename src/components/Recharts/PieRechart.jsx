import { PieChart, Pie, ResponsiveContainer } from "recharts";
import Card from "@/components/Card/Card";
import { CardBody } from "react-bootstrap";

const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
];
const data02 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 300 },
    { name: "B1", value: 100 },
    { name: "B2", value: 80 },
    { name: "B3", value: 40 },
    { name: "B4", value: 30 },
    { name: "B5", value: 50 },
    { name: "C1", value: 100 },
    { name: "C2", value: 200 },
    { name: "D1", value: 150 },
    { name: "D2", value: 50 },
];

const PieRechart = () => {
    return (
        <Card title="Pie Chart">
            <CardBody>
                <ResponsiveContainer width="100%" height={300}>
                    <div className="d-flex justify-content-center align-items-center">
                        <PieChart width={400} height={300}>
                            <Pie
                                data={data01}
                                dataKey="value"
                                cx={200}
                                cy={200}
                                outerRadius={60}
                                fill="#8884d8"
                            />
                            <Pie
                                data={data02}
                                dataKey="value"
                                cx={200}
                                cy={200}
                                innerRadius={70}
                                outerRadius={90}
                                fill="#82ca9d"
                                label
                            />
                        </PieChart>
                    </div>
                </ResponsiveContainer>
            </CardBody>
        </Card>
    );
};

export default PieRechart;
