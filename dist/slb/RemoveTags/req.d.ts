export interface RemoveTagsRequest {
    /**
     * 负载均衡实例所属地域的ID。
     * 您可以通过调用[DescribeRegions](~~27584~~)获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 负载均衡实例ID。
     * @example `lb-bp1l5j******`
     */
    "LoadBalancerId": string;
    /**
     * 需要解绑的Tag列表。
     * @example `[{"TagKey":"Key1","TagValue":"Value1"},{"TagKey":"Key2","TagValue":"Value2"}]`
     */
    "Tags": string;
}
