export interface DeleteCloudGtmMonitorTemplateRequest {
    /**
     * 返回值语言，取值：
     * - zh-CN：中文。
     * - en-US：英文。
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 用户生成的请求token。用于保证请求的幂等性。注意  由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `1ae05db4-10e7-11ef-b126-00163e24**22`
     */
    "ClientToken"?: string;
    /**
     * 健康探测模板ID，唯一标识健康探测模板。
     * @example `mtp-89518052425100**80`
     */
    "TemplateId": string;
}
