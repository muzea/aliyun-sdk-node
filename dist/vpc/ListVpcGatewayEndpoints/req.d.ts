export interface ListVpcGatewayEndpointsRequest {
    /**
     * 网关终端节点实例ID。
     * @example `vpce-bp1i1212ss2whuwyw****`
     */
    "EndpointId"?: string;
    /**
     * 网关终端节点的名称。
     * 名称的长度在1~128个字符之间。
     * @example `test`
     */
    "EndpointName"?: string;
    /**
     * 终端节点服务名称。
     * @example `com.aliyun.cn-hangzhou.oss`
     */
    "ServiceName"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 要查询的网关终端节点所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 网关终端节点所属的资源组ID。
     * @example `rg-acfmxvfvazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tags"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
