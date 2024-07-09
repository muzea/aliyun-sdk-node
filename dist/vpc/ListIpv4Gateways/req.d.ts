export interface ListIpv4GatewaysRequest {
    /**
     * 要查询的IPv4网关列表信息的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `ap-southeast-6`
     */
    "RegionId": string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**10**。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 要查询的IPv4网关实例关联的VPC的ID。
     * @example `vpc-5tsrxlw7dv074gci4****`
     */
    "VpcId"?: string;
    /**
     * 要查询的IPv4网关实例的ID。
     * @example `ipv4gw-5tsnc6s4ogsedtp3k****`
     */
    "Ipv4GatewayId"?: string;
    /**
     * 要查询的IPv4网关实例的名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `name`
     */
    "Ipv4GatewayName"?: string;
    /**
     * IPv4网关所属的资源组ID。
     * @example `rg-bp67acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表信息。
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
