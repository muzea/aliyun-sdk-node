export interface DescribeAutoRenewAttributeRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * 如果有多个集群ID，以英文逗号（,）分隔。
     * @example `am-bp11q28kvl688****`
     */
    "DBClusterIds": string;
    /**
     * 每页记录数，取值：
     * - 30
     * - 50
     * - 100
     * 默认值：30。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 资源组ID。
     * @example `rg-4690g37929****`
     */
    "ResourceGroupId"?: string;
}
