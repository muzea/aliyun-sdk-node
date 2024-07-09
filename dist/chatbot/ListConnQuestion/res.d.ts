export interface ListConnQuestionResponse {
    /**
     * 请求ID
     * @example `92B81548-42B9-4B34-924B-4E778AEB412B`
     */
    RequestId: string;
    /**
     * 关联问题列表
     */
    Outlines: {
        /**
         * 关联关系ID
         * @example `797`
         */
        OutlineId: number;
        /**
         * 关联知识ID
         * @example `30001979424`
         */
        ConnQuestionId: number;
        /**
         * 关联知识标题
         * @example `关联问`
         */
        Title: string;
        /**
         * 修改时间（UTC 时间）
         * @example `2022-05-26T10:18:15Z`
         */
        ModifyTime: string;
        /**
         * 创建时间（UTC 时间）
         * @example `2022-02-25T02:47:18Z`
         */
        CreateTime: string;
    }[];
}
