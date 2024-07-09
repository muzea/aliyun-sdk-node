export interface UpdateGeneratedContentRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `xxxxx_p_efm`
     */
    "AgentKey": string;
    /**
     * 文档唯一标识
     * @example `36`
     */
    "Id": number;
    /**
     * 最后一次生成的提示词
     * @example `创作xx文章`
     */
    "Prompt"?: string;
    /**
     * 标题
     * @example `评论类文章`
     */
    "Title"?: string;
    /**
     * 正文：富文本
     * @example `正文`
     */
    "Content"?: string;
    /**
     * 正文：纯文本
     * @example `正文`
     */
    "ContentText"?: string;
    /**
     * 关键词
     */
    "Keywords"?: string[];
}
