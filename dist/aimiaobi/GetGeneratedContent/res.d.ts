export interface GetGeneratedContentResponse {
    /**
     * 请求唯一标识
     * @example `1813ceee-7fe5-41b4-87e5-982a4d18cca5`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `NoData`
     */
    Code: string;
    /**
     * 错误说明
     * @example `success`
     */
    Message: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 业务数据
     */
    Data: {
        /**
         * 文档唯一标识
         * @example `86`
         */
        Id: number;
        /**
         * 会话任务唯一标识
         * @example `3f7045e099474ba28ceca1b4eb6d6e21`
         */
        TaskId: string;
        /**
         * 最后一次生成的提示词
         * @example `创作xxx文章`
         */
        Prompt: string;
        /**
         * 标题
         * @example `杭州亚运会`
         */
        Title: string;
        /**
         * 正文：富文本
         * @example `杭州亚运会`
         */
        Content: string;
        /**
         * 正文：纯文本
         * @example `杭州亚运会`
         */
        ContentText: string;
        /**
         * 创建日期
         * @example `2024-01-04 11:46:07`
         */
        CreateTime: string;
        /**
         * 创建者
         * @example `1`
         */
        CreateUser: string;
        /**
         * 更新日期
         * @example `2024-01-04 11:46:07`
         */
        UpdateTime: string;
        /**
         * 更新者
         * @example `1`
         */
        UpdateUser: string;
        /**
         * 内容生成的领域-media:新闻、government:政务
         * @example `media`
         */
        ContentDomain: string;
        /**
         * UUID  溯源唯一标识
         * @example `0961a514-2e26-4aa6-b22b-f592d145fe47`
         */
        Uuid: string;
        /**
         * 设备ID
         * @example `xxx`
         */
        DeviceId: string;
        /**
         * 关键词（string）
         * @example `评论`
         */
        Keywords: string;
        /**
         * 关键词
         */
        KeywordList: string[];
    };
}
