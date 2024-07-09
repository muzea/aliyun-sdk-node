export interface DescribeInstanceRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 分页查询的页码。
     * - 起始值：1。
     * - 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 地址最大连接数的调整上限
     */
    "MaxConnectionLimit"?: string;
}
