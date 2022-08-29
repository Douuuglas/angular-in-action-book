export interface NodeMetric {
    used: number,
    available: number
};

export interface NodeInfo {
    name: string,
    cpu: NodeMetric,
    mem: NodeMetric
};
