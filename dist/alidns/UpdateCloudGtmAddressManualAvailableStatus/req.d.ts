export interface UpdateCloudGtmAddressManualAvailableStatusRequest {
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
     * 地址探测异常切换方式：
     * - auto：自动模式（根据健康检查探测结果确定，探测异常停止解析，探测正常恢复解析）
     * - manual：手动模式（异常状态下停止解析，健康检查正常也不会恢复解析；正常状态下恢复解析，健康检查异常也只是告警，但不会停止解析。）
     * @example `manual`
     */
    "AvailableMode"?: string;
    /**
     * 当地址探测异常切换模式为manual时，地址设置的可用状态：
     * - available：正常，此状态下该地址正常解析，健康检查异常也只是告警，但不会停止解析；
     * - unavailable：异常，此状态下停止解析，健康检查正常也不会恢复解析；
     * @example `available`
     */
    "ManualAvailableStatus"?: string;
}
