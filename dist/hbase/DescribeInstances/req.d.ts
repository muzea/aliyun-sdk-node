export interface DescribeInstancesRequest {
    /**
     * 实例所属的地域ID，可调用[DescribeRegions](~~144489~~)接口获取。
     * > 调用本接口时，如果传入了**Tag.N.Key**和**Tag.N.Value**参数，则本参数必须传入。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例列表的页码，起始值为**1**，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页最多可显示的行数，最大值为**100**，默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 服务类型，取值：
     * - **hbase**：HBase标准版或HBase单机版。
     * - **hbaseue**：HBase增强版。
     * - **bds**：表示BDS数据同步服务。
     * @example `hbase`
     */
    "DbType"?: string;
    /**
     * HBase实例名称。
     * @example `test`
     */
    "ClusterName"?: string;
    /**
     * 目标实例ID，可调用[DescribeInstances](~~144595~~)接口获取。
     * @example `hb-bp1u0639js2h7****`
     */
    "ClusterId"?: string;
    /**
     * 资源组ID，可通过资源组控制台查询。
     * @example `rg-4f51d54g5****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签的键，与Tag Value组成标签的键值对，格式为{"key1":"value1","key2":"value2"}。
         * @example `key`
         */
        Key: string;
        /**
         * 标签键的值，与Tag Key组成标签的键值对。
         * @example `value`
         */
        Value: string;
    }[];
}
