export interface ListVpcEndpointSecurityGroupsRequest {
    /**
     * 要查询的终端节点所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~120468~~)接口获取地域ID。
     * @example `cn-huhehaote`
     */
    "RegionId": string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 分页大小，取值范围：**1**~**50**，默认值：**50**。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 要查询的终端节点的ID。
     * @example `ep-hp33b2e43fays7s8****`
     */
    "EndpointId": string;
}
