export interface AddImageVulWhiteListRequest {
    /**
     * 操作目标。该参数为JSON格式，包含以下字段：
     * - **type**：目标类型，固定为repo
     * - **target**：目标内容，格式：命名空间/镜像仓
     * @example `{\"type\":\"repo\",\"target\":[\"sas_test/script_0209\",\"sas_test/script\"]}`
     */
    "Target"?: string;
    /**
     * 白名单。该参数为JSON格式，包含以下字段：
     * - **Type**：漏洞类型：cve/sca
     * - **Name**：漏洞公告中的名称
     * - **AliasName**：漏洞公告中的别名
     * @example `[{\"Type\":\"sca\",\"Name\":\"imgsca:java:spring-core:AVD-2022-1124599\",\"AliasName\":\"Spring Framework JDK >= 9 (CVE-2022-22965)\"}]`
     */
    "Whitelist"?: string;
    /**
     * 漏洞类型。取值包括：
     * - **cve**：系统漏洞
     * - **sca**：应用漏洞
     * @example `cve`
     */
    "Type"?: string;
    /**
     * 添加白名单原因说明。
     * @example `already config in another way`
     */
    "Reason"?: string;
    /**
     * 请求和接收消息的语言类型，默认值为zh。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 白名单来源。取值：
     * - **image**：镜像
     * - **agentless**：agentless
     * @example `image`
     */
    "Source"?: string;
}
