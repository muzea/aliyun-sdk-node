export interface DescribeAutoSnapshotPolicyExRequest {
    /**
     * 要查询的自动快照策略所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 自动快照策略ID。
     * @example `sp-bp67acfmxazb4ph****`
     */
    "AutoSnapshotPolicyId"?: string;
    /**
     * 自动快照策略的名称。
     * @example `TestName`
     */
    "AutoSnapshotPolicyName"?: string;
    /**
     * 自动快照策略返回结果分多页展示。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页展示返回的自动快照策略时的每页行数。
     * 最大值：100。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 自动快照策略的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 自动快照策略的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以acs:开头，不能包含http://或者https://。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。使用该参数过滤资源时，资源数量不能超过1000个。
     * >不支持默认资源组过滤。
     * @example `rg-aek2kkmhmhs****`
     */
    "ResourceGroupId"?: string;
}
