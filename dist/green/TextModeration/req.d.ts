export interface TextModerationRequest {
    /**
     * 审核服务类型，包括：
     * nickname_detection：用户昵称
     * chat_detection：聊天互动
     * comment_detection：动态评论
     * pgc_detection：教学物料PGC
     * @example `nickname_detection`
     */
    "Service": string;
    /**
     * 审核服务需要的参数集。JSON字符串格式，关于每个字符串的描述
     * @example `{"content":"地图还是黑的"}`
     */
    "ServiceParameters"?: string;
}
