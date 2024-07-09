export interface CreateIpv6GatewayRequest {
    /**
     * IPv6网关的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-huhehaote`
     */
    "RegionId": string;
    /**
     * 要开通IPv6网关的VPC ID。
     * @example `vpc-123sedrfswd23****`
     */
    "VpcId": string;
    /**
     * IPv6网关的名称。
     * 长度为2~128个字符，必须以字母或中文开头，可包含数字、下划线（_）和短划线（-），但不能以`http://`或`https://`开头。
     * @example `ipv6GW`
     */
    "Name"?: string;
    /**
     * IPv6网关的描述信息。
     * 长度为2~256个字符，不能以`http://`或`https://`开头。
     * @example `ipv6gatewayforVPC1`
     */
    "Description"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
    /**
     * IPv6网关所属的资源组ID。
     * 关于资源组的更多信息，请参见[什么是资源组](~~94475~~)。
     * @example `rg-acfmxazb4ph6aiy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 资源的标签。
     */
    "Tag"?: {
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
