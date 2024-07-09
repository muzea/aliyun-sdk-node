export interface ListInstancePatchStatesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 分页大小。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 翻页标记Token。
     * @example `-`
     */
    "NextToken"?: string;
    /**
     * ECS实例ID。取值可以由多个实例ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
     * @example `["i-bp1jaxa2bs4bps7*****", "i-bp67acfmxazb4p****", … "i-bp67acfmxazb4p****"]`
     */
    "InstanceIds"?: string;
}
