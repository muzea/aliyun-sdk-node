export interface DescribeCloudGtmMonitorTemplateRequest {
    /**
     * 设置返回后可用区名称的语言，取值：
     * * **zh-CN**：中文。
     * * **en-US**：英文。
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 要查询的健康探测模板ID，唯一标识健康探测模板。
     * @example `mtp-89518052425100**80`
     */
    "TemplateId": string;
}
