export interface CreateEnsRouteEntryRequest {
    /**
     * 要创建自定义路由条目的路由表ID。
     * @example `vtb-bp1cifr72dioje82lse2j`
     */
    "RouteTableId": string;
    /**
     * 自定义路由条目的目标网段。需满足以下要求：
     * - 目标网段不能指向100.64.0.0/10或被100.64.0.0/10包含。
     * - 同一张路由表内的不同路由条目的目标网段不能相同。
     * - 0.0.0.0/0表示默认
     * @example `0.0.0.0/0`
     */
    "DestinationCidrBlock": string;
    /**
     * 自定义路由条目的下一跳的类型，取值：
     * - Instance（默认值）：ENS实例。
     * @example `Instance`
     */
    "NextHopType"?: string;
    /**
     * 自定义路由条目的下一跳实例的ID。
     * @example `i-5vb7leks9z4mxy1ay258`
     */
    "NextHopId": string;
    /**
     * 要创建的自定义路由条目的名称。长度为1~128个字符，但不能以http://或https://开头。
     * @example `test`
     */
    "RouteEntryName"?: string;
    /**
     * 自定义路由条目的描述信息。
     * @example `example`
     */
    "Description"?: string;
}
