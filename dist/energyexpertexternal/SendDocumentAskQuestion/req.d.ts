export interface SendDocumentAskQuestionRequest {
    /**
     * 请求参数
     */
    "body"?: {
        /**
         * 用户查询的问题
         * @example `2023年总碳排量`
         */
        prompt: string;
        /**
         * 文件夹ID，用于指定查询的文档范围。为空时表示查询租户下的所有文档。
         * @example `1a851c4a-1d65-11ef-99a7-ssfsfdd`
         */
        folderId: string;
        /**
         * 问答会话ID，用于记录同一个用户的多次问答。为空时表示不区分会话。
         * @example `bfce2248-1546-4298-8bcf-70ac26e69646`
         */
        sessionId: string;
    };
}
