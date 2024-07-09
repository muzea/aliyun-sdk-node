export interface TextModerationPlusRequest {
    /**
     * 审核服务类型
     * @example `llm_query_moderation`
     */
    "Service"?: string;
    /**
     * 审核服务需要的参数集。JSON字符串格式
     * @example `{
            "content": "测试内容"
        }`
     */
    "ServiceParameters"?: string;
}
