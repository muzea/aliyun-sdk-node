export interface ModifyMultiZoneClusterNodeTypeRequest {
    /**
     * 多可用区实例Id。
     * @example `ld-dj45g7d6rbrd****`
     */
    "ClusterId": string;
    /**
     * master节点规格，可填种类参考 DescribeInstanceType。
     * @example `hbase.sn1.8xlarge`
     */
    "MasterInstanceType"?: string;
    /**
     * core节点规格，可填种类参考 DescribeInstanceType。
     * @example `hbase.sn1.large`
     */
    "CoreInstanceType"?: string;
    /**
     * log节点规格，可填种类参考 DescribeInstanceType。
     * @example `hbase.sn1.2xlarge`
     */
    "LogInstanceType"?: string;
}
