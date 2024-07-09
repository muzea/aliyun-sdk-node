export interface DescribeIpv6GatewaysRequest {
    /**
     * IPv6网关所属的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-huhehaote`
     */
    "RegionId": string;
    /**
     * IPv6网关的ID。
     * @example `ipv6gw-hp3rwmtmfhgis****`
     */
    "Ipv6GatewayId"?: string;
    /**
     * IPv6网关关联的VPC ID。
     * @example `vpc-123sedrfswd23****`
     */
    "VpcId"?: string;
    /**
     * IPv6网关的名称。
     * 长度为2~128个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。但不能以`http://`或`https://`开头。
     * @example `ipv6GW`
     */
    "Name"?: string;
    /**
     * 当前页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页包含的条目数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * IPv6网关所属的资源组ID。
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
