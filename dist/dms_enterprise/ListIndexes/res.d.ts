export interface ListIndexesResponse {
    /**
     * 请求ID。
     * @example `1F4DE2F1-5B47-462A-A973-E02EB7AF386B`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    IndexList: {
        /**
         * 索引详情列表。
         */
        Index: {
            /**
             * 索引名称
             * @example `idx_test`
             */
            IndexName: string;
            /**
             * 索引类型，取值如下：
             * - Primary
             * - Unique
             * - Normal
             * - FullText
             * - Spatial
             * @example `Primary`
             */
            IndexType: string;
            /**
             * 表ID
             * @example `1`
             */
            TableId: string;
            /**
             * 索引ID
             * @example `1`
             */
            IndexId: string;
            /**
             * 索引描述
             * @example `test`
             */
            IndexComment: string;
        }[];
    };
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
