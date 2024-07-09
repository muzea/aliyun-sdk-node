export interface DescribeInstanceTypeRequest {
    /**
     * 实例规格名称，请参见[实例节点规格](~~194870~~)。
     * > InstanceType为空时，返回全部的实例规格列表。
     * @example `hbase.n2.4xlarge`
     */
    "InstanceType"?: string;
}
