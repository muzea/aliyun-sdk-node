export interface CreateHoneypotPresetRequest {
    /**
     * 蜜罐镜像名称。
     * @example `webmin`
     */
    "HoneypotImageName": string;
    /**
     * 蜜罐模板自定义名称。
     * @example `WebMin-online`
     */
    "PresetName": string;
    /**
     * 蜜罐模板自定义参数，格式为JSON格式的字符串。包含以下字段：
     * - **portrait_option**：社交溯源
     * - **burp**：Burp反制
     * - **trojan_git**：Git反制
     * @example `{"burp":"close","trojan_git":"close","portrait_option":"true"}`
     */
    "Meta": string;
    /**
     * 蜜罐管理节点唯一ID。
     * >调用[ListHoneypotNode](~~ListHoneypotNode~~)接口可以获取该参数。
     * @example `9373fe59-74d5-4505-bb24-c85352fb****`
     */
    "NodeId": string;
    /**
     * 请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
