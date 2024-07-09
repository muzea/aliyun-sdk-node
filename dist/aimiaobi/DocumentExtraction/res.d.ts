export interface DocumentExtractionResponse {
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
         * 发布时间
         * @example `2024-05-14 08:54:33`
         */
        PubTime: string;
        /**
         * 来源
         * @example `央视网`
         */
        Source: string;
        /**
         * 标签
         * @example `文章标签`
         */
        Tag: string;
        /**
         * 标题
         * @example `文章标题`
         */
        Title: string;
        /**
         * 内容
         * @example `文章内容`
         */
        Content: string;
        /**
         * 作者
         * @example `作者`
         */
        Author: string;
        /**
         * 文章URL
         * @example `https://www.example.com/aaa.docx`
         */
        Url: string;
        /**
         * 文章摘要
         * @example `文章摘要`
         */
        Summary: string;
        /**
         * 内部文档唯一标识
         * @example `8df2d69d63a247b6b52ff455b2d426b6`
         */
        DocUuid: string;
        /**
         * 文档-自定义的唯一ID
         * @example `文档-自定义的唯一ID`
         */
        DocId: string;
    }[];
}
