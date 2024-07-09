export interface ModifyIpv6AddressAttributeRequest {
    /**
     * IPv6地址所在的地域。您可以通过调用[DescribeRegions](~~36063~~)获取地域ID。
     * @example `cn-huhehaote`
     */
    "RegionId": string;
    /**
     * IPv6地址的实例ID。
     * @example `ipv6-hp32vv2klzw4yerdf****`
     */
    "Ipv6AddressId": string;
    /**
     * IPv6地址的名称。
     * 长度为2~128个字符，必须以英文大小写字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。但不能以`http://`或`https://`开头。
     * @example `test`
     */
    "Name"?: string;
    /**
     * IPv6地址的描述信息。
     * 长度为2~256个字符，必须以英文大小写字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。但不能以`http://`或`https://`开头。
     * @example `test`
     */
    "Description"?: string;
}
