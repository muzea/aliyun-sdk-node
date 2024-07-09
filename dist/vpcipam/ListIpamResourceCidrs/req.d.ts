export interface ListIpamResourceCidrsRequest {
    /**
     * IPAM托管地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IPAM作用范围的实例ID。
     * > 参数**IpamScopeId**和参数**IpamPoolId**至少输入一个。
     * @example `ipam-scope-glfmcyldpm8lsy****`
     */
    "IpamScopeId"?: string;
    /**
     * IPAM地址池的实例ID。
     * > 参数**IpamScopeId**和参数**IpamPoolId**至少输入一个。
     * @example `ipam-pool-6rcq3tobayc20t****`
     */
    "IpamPoolId"?: string;
    /**
     * 资源ID。
     * @example `vpc-bp16qjewdsunr41m1****`
     */
    "ResourceId"?: string;
    /**
     * 资源类型。取值：
     * - **VPC**：表示资源类型为VPC。
     * @example `VPC`
     */
    "ResourceType"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**10**。
     * @example `10`
     */
    "MaxResults"?: number;
}
