export interface CreateClusterRequest {
    /**
     * VPC id
     * @example `vpc-xxx`
     */
    "VpcId": string;
    /**
     * 集群类型：
     * * gws.s1.standard
     * @example `gws.s1.standard`
     */
    "ClusterType": string;
    /**
     * VSWitch id，用于集群服务器的创建。当不指定时，后台会根据当前集群规格，找到有库存的最新可用区（例如华北 2 可用区 H ），如果此可用区
     * * 已有交换机，则直接选用
     * * 没有交换机，则会尝试自动创建
     * @example `vsw-xxx`
     */
    "VSwitchId"?: string;
}
