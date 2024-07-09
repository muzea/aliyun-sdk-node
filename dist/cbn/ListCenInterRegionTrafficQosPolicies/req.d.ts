export interface ListCenInterRegionTrafficQosPoliciesRequest {
    /**
     * 转发路由器实例ID。
     * @example `tr-bp1rmwxnk221e3fas****`
     */
    "TransitRouterId"?: string;
    /**
     * 跨地域连接ID。
     * @example `tr-attach-r6g0m3epjehw57****`
     */
    "TransitRouterAttachmentId"?: string;
    /**
     * 流量调度策略ID。
     * @example `qos-rnghap5gc8155x****`
     */
    "TrafficQosPolicyId"?: string;
    /**
     * 流量调度策略的名称。
     * 名称可以为空或长度为1～128个字符，不能以http://或https://开头。
     * @example `nametest`
     */
    "TrafficQosPolicyName"?: string;
    /**
     * 流量调度策略的描述信息。
     * 描述可以为空或长度为1～256个字符，不能以http://或https://开头。
     * @example `desctest`
     */
    "TrafficQosPolicyDescription"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**。默认值：**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
}
