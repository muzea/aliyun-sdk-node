export interface ModifyIpv6GatewayAttributeRequest {
    /**
     * IPv6网关的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-huhehaote`
     */
    "RegionId": string;
    /**
     * 要修改的IPv6网关的ID。
     * @example `ipv6gw-hp39kh1ya51yzp2lu****`
     */
    "Ipv6GatewayId": string;
    /**
     * IPv6网关的名称。
     * 长度为2~256个字符，必须以英文大小写字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。但不能以`http://`或`https://`开头。
     * @example `ipv6name`
     */
    "Name"?: string;
    /**
     * IPv6网关的描述信息。
     * @example `ipv6description`
     */
    "Description"?: string;
}
