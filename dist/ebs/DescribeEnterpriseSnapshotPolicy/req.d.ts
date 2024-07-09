export interface DescribeEnterpriseSnapshotPolicyRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 指定快照策略ID列表。
     */
    "PolicyIds"?: string[];
    /**
     * 磁盘ID列表
     */
    "DiskIds"?: string[];
    /**
     * 资源组ID。
     * @example `xxx`
     */
    "ResourceGroupId"?: string;
    /**
     * 查询凭证（Token）。取值为上一次调用该接口返回的NextToken参数值，初次调用接口时无需设置该参数。如果设置了NextToken，则请求参数PageSize和PageNumber将失效，且返回数据中的TotalCount无效。
     * @example `xxx`
     */
    "NextToken"?: string;
    /**
     * 本次调用期望查询的最大条目数。可配合NextToken参数一起使用。
     * 取值范围：1~500。
     * 默认值：10。
     * @example `100`
     */
    "MaxResults"?: number;
    /**
     * 分页查询时设置的每页行数。 取值范围1-100。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时的页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe63****`
     */
    "ClientToken"?: string;
    /**
     * 标签键值对。n的取值范围为 [1, 20]。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * @example `tag-key`
         */
        Key: string;
        /**
         * 资源的标签值。
         * @example `tag-value`
         */
        Value: string;
    }[];
}
