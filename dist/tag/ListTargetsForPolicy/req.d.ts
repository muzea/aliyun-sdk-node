export interface ListTargetsForPolicyRequest {
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
     * 标签策略ID。
     * @example `p-de62a0bf400e4b69****`
     */
    "PolicyId": string;
}
