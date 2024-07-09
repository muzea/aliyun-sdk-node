export interface ListPoliciesRequest {
    /**
     * 地域ID。取值：cn-shanghai。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 分页时每页显示的数据条数。
     * 默认值：50。最大值：1000。
     * @example `50`
     */
    "MaxResult"?: number;
    /**
     * 下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 标签策略ID列表。用于查询的过滤条件。
     */
    "PolicyIds"?: string[];
    /**
     * 标签策略名称列表。用于查询的过滤条件。
     */
    "PolicyNames"?: string[];
    /**
     * 标签策略模式。用于查询的过滤条件。取值：
     * - USER：单账号模式。
     * - RD：多账号模式。
     * 关于标签策略模式的更多信息，请参见[标签策略模式](~~417434~~)。
     * > 参数取值不区分大小写。
     * @example `USER`
     */
    "UserType"?: string;
}
