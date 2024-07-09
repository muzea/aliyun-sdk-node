export interface CreateGeneratedContentRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `xxx_efm`
     */
    "AgentKey": string;
    /**
     * 最后一次生成的提示词
     * @example `创作xxx文章`
     */
    "Prompt"?: string;
    /**
     * 会话任务唯一标识
     * @example `xxx`
     */
    "TaskId": string;
    /**
     * 标题
     * @example `杭州亚运会`
     */
    "Title": string;
    /**
     * 正文：富文本
     * @example `杭州亚运会`
     */
    "Content": string;
    /**
     * 内容生成的领域
     * @example `government`
     */
    "ContentDomain"?: string;
    /**
     * 正文：纯文本
     * @example `杭州亚运会`
     */
    "ContentText"?: string;
    /**
     * 溯源UUID
     * @example `xxxx`
     */
    "Uuid"?: string;
    /**
     * 关键词
     */
    "Keywords"?: string[];
}
