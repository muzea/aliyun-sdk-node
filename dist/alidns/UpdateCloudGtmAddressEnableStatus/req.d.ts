export interface UpdateCloudGtmAddressEnableStatusRequest {
    /**
     * 返回结果显示的语言。取值：
     * - zh-CN：中文
     * - en-US：英文
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。该参数值可自定义，但是要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22`
     */
    "ClientToken"?: string;
    /**
     * 地址的ID，地址唯一标识码。
     * @example `addr-89518218114368**92`
     */
    "AddressId": string;
    /**
     * 地址池的启用状态：
     * - enable：启用，当前地址池在健康检查正常的情况下可参与解析。
     * - disable： 禁用，当前地址池不管健康检查是否正常，均不可参与解析
     * @example `enable`
     */
    "EnableStatus": string;
}
