export interface UpdateImageVulWhitelistTargetRequest {
    /**
     * 漏洞白名单ID。
     * @example `2000083`
     */
    "Id"?: number;
    /**
     * 操作目标。该参数为JSON格式，包含以下字段：
     * - **type**：目标类型，固定为repo
     * - **target**：目标内容，格式：命名空间/镜像仓
     * @example `{\"type\":\"repo\",\"target\":[\"sas_test/script_0209\",\"sas_test/script\"]}`
     */
    "Target"?: string;
    /**
     * 添加白名单原因说明。
     * @example `ignore`
     */
    "Reason"?: string;
    /**
     * 请求和接收消息的语言类型，默认值**zh**。取值：
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
