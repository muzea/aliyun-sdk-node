export interface DescribeServerlessClusterRequest {
    /**
     * 实例所属可用区ID，可调用[DescribeInstances](~~144595~~)接口获取。
     * @example `sdh0b7f4k5f****`
     */
    "ZoneId": string;
    /**
     * 集群ID，系统生成的唯一标识码。可调用[DescribeInstances](~~144595~~)接口获取。
     * @example `hb-bp16f1441y6p2****`
     */
    "ClusterId": string;
}
