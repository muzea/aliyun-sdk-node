export interface UpdateHoneypotPresetRequest {
    /**
     * 蜜罐镜像名称。
     * @example `metabase`
     */
    "HoneypotImageName"?: string;
    /**
     * 蜜罐模板自定义名称。
     * @example `apc_web_python`
     */
    "PresetName"?: string;
    /**
     * 蜜罐模板唯一ID。
     * >调用[ListHoneypotPreset](~~ListHoneypotPreset~~)接口可以获取该参数。
     * @example `f75eddce-e9d3-4a88-af95-b10b6f65xxxx`
     */
    "HoneypotPresetId": string;
    /**
     * 蜜罐模板自定义参数，格式为JSON格式的字符串。包含以下字段：
     * - **portrait_option**：社交溯源
     * - **burp**：Burp反制
     * - **trojan_git**：Git反制
     * @example `{"portrait_option":true,"burp":"open"}`
     */
    "Meta"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
