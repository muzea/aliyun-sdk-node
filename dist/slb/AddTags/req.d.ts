export interface AddTagsRequest {
    /**
     * 负载均衡实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 负载均衡实例ID。
     * @example `lb-bp1kuzyb******`
     */
    "LoadBalancerId": string;
    /**
     * 需要添加的Tag列表。
     * @example `[{"TagKey":"Key1","TagValue":"Value1"},{"TagKey":"Key2","TagValue":"Value2"}]`
     */
    "Tags": string;
}
