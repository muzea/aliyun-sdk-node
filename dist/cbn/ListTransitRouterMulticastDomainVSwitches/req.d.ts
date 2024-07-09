export interface ListTransitRouterMulticastDomainVSwitchesRequest {
    /**
     * 云企业网实例ID。
     * @example `cen-44m0p68spvlrqq****`
     */
    "CenId": string;
    /**
     * VPC实例ID。
     * @example `vpc-p0wr1cd4fcuxy3ui0****`
     */
    "VpcId": string;
    /**
     * 交换机ID列表。
     */
    "VSwitchIds"?: string[];
    /**
     * 分批次查询时每次显示的条目数。最小值：**0**。默认值：**20**。
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
