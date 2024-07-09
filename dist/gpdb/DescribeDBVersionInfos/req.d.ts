export interface DescribeDBVersionInfosRequest {
    /**
     * 实例当前所属的资源组ID。如何获取资源组ID，请参见[查看资源组基本信息](~~151181~~)。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~86912~~)接口查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例资源类型，取值说明：
     * - **StorageElastic**：存储弹性模式。
     * - **Serverless**：Serverless模式。
     * @example `StorageElastic`
     */
    "DBInstanceMode"?: string;
    /**
     * 不带前缀的内核版本号。
     * @example `6.3.10.20。`
     */
    "DBVersion"?: string;
}
