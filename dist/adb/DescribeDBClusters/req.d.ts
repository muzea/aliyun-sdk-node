export interface DescribeDBClustersRequest {
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~143074~~)接口查看可用地域的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * > 您可以输入上述地域中任意的集群ID。
     * @example `am-bp1r053byu48p****`
     */
    "DBClusterIds"?: string;
    /**
     * 集群描述。
     * - 不能以`http://`或者`https://`开头。
     * - 长度为2~256个字符。
     * @example `test`
     */
    "DBClusterDescription"?: string;
    /**
     * 集群状态，取值说明：
     * - **Preparing**：准备中
     * - **Creating**：创建中
     * - **Restoring**：备份恢复中
     * - **Running**：运行中
     * - **Deleting**：删除中
     * - **ClassChanging**：变配中
     * - **NetAddressCreating**：创建网络中
     * - **NetAddressDeleting**：删除网络中
     * @example `Running`
     */
    "DBClusterStatus"?: string;
    /**
     * 每页记录数，取值：
     * - **30**（默认值）
     * - **50**
     * - **100**
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 资源组ID。
     * @example `rg-4690g37929XXXX`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签信息列表。
     */
    "Tag"?: {
        /**
         * 标签键，可以根据标签过滤集群列表。最多20对标签，各个标签对的数字n必须不同，且必须是从1开始的连续整数。`Tag.N.Key`对应的值为`Tag.N.Value`。
         * > 最多支持64个字符，不能以`aliyun`、`acs:`、`http://`或者`https://`开头。
         * @example `tag1`
         */
        Key: string;
        /**
         * 标签值，可以根据标签过滤集群列表。最多20对标签，各个标签对的数字n必须不同，且必须是从1开始的连续整数。`Tag.N.Key`对应的值为`Tag.N.Value`。
         * > 最多支持64个字符，不能以`aliyun`、`acs:`、`http://`或者`https://`开头。
         * @example `test1`
         */
        Value: string;
    }[];
    /**
     * 集群版本，固定取值为**3.0**。
     * @example `3.0`
     */
    "DBVersion"?: string;
}
