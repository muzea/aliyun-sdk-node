export interface ModifyIPv6TranslatorAttributeRequest {
    /**
     *  IPv6转换服务实例的地域。 您可以通过调用**DescribeRegions**接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * @example `sha1111`
     */
    "ClientToken"?: string;
    /**
     *  IPv6转换服务实例的ID。
     * @example `ipv6trans-bp1858ys****`
     */
    "Ipv6TranslatorId": string;
    /**
     *  IPv6转换服务实例的名称，默认为实例ID。长度为 2~100个字符，必须以字母或中文开头，可包含数字，英文句点（.），下划线（_）和短划线（-）。但不能以http:// 或https://开头。
     * @example `instancename`
     */
    "Name"?: string;
    /**
     *  IPv6转换服务的描述信息。默认值为空。长度为2~100个字符，必须以字母或中文开头，可包含数字，英文句点（.），下划线（_）和短划线（-）。但不能以http:// 或https://开头。
     * @example `instancedescription`
     */
    "Description"?: string;
}
