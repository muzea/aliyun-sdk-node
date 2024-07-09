export interface ListVpcEndpointZonesRequest {
    /**
     * 要查询的地域ID。
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
     * 分批次查询时每次显示的条目数。取值范围：**1**~**50**，默认值：**50**。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 要查询可用区的终端节点ID。
     * 指定终端节点ID后，系统会查询该终端节点的可用区。
     * @example `ep-hp33b2e43fays7s8****`
     */
    "EndpointId": string;
}
