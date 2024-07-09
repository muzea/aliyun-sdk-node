export interface DeleteControlPolicyTemplateRequest {
    /**
     * 访问者源IP地址。
     * @example `61.178.12.52`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 访问控制策略模板ID。
     * @example `719ce620-ae23-4e42-9f93-9191b4400b55`
     */
    "TemplateId": string;
}
