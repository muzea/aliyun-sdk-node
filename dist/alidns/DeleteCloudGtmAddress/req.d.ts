export interface DeleteCloudGtmAddressRequest {
    /**
     * 返回值语言，取值：
     * - zh-CN：中文。
     * - en-US：英文。
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。该参数值可自定义，但是要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22
    `
     */
    "ClientToken"?: string;
    /**
     * 地址的ID，地址的唯一识别码。
     * @example `addr-895182181143688192`
     */
    "AddressId": string;
}
