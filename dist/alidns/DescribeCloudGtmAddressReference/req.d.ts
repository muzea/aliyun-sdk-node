export interface DescribeCloudGtmAddressReferenceRequest {
    /**
     * 返回信息的语言类型：
     * - zh-CN：中文
     * - en-US：英文
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。注意  由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22`
     */
    "ClientToken"?: string;
    /**
     * 地址id，唯一标识地址。
     * @example `addr-89518218114368**92`
     */
    "AddressId"?: string;
}
