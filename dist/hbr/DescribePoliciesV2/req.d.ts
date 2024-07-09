export interface DescribePoliciesV2Request {
    /**
     * 获取下一页策略所需的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a`
     */
    "NextToken"?: string;
    /**
     * 每次查询结果的个数。
     * 取值范围：10~100。默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 策略ID。
     * @example `po-000************2l6`
     */
    "PolicyId"?: string;
}
