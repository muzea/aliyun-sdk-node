export interface AllocateIpv6AddressRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IPv6地址所在的交换机的ID。
     * @example `vsw-asdfjlnaue4g****`
     */
    "VSwitchId": string;
    /**
     * 指定要申请的IPv6地址。指定的IPv6地址必须是在所属交换机的地址段内的空闲地址。
     * @example `2408:XXXX:153:3921:851c:c435:7b12:1c5f`
     */
    "Ipv6Address"?: string;
    /**
     * IPv6地址的实例名称。
     * @example `ipv6-name`
     */
    "Ipv6AddressName"?: string;
    /**
     * IPv6地址的实例描述。
     * @example `ipv6-description`
     */
    "Ipv6AddressDescription"?: string;
    "AddressType"?: string;
    /**
     * 资源组ID。关于资源组的更多信息，请参见[什么是资源组](~~121367~~)。
     * @example `rg-bp67acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 资源的标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，请勿输入空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 客户端Token，用于保证请求的幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-0016e04****`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - true：发送检查请求，不会查询资源状况。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码DryRunOperation。
     * - false（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
}
