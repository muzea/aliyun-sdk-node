export interface QueryPictureSearchJobResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `Specified access key is not found.`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `8FAF4001-2A53-46DF-B83E-306B8070E131`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应结果。
     */
    Data: {
        /**
         * 当前页面号。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 每页显示的条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总条数。
         * @example `2`
         */
        Total: number;
        /**
         * 总页数。
         * @example `1`
         */
        PageCount: number;
        /**
         * 应用列表。
         */
        PageData: {
            /**
             * 检索范围结束时间，格式为13位时间戳，单位为毫秒。
             * @example `1614850763692`
             */
            EndTime: number;
            /**
             * 检索范围起始时间，格式为13位时间戳，单位为毫秒。
             * @example `1614814763692`
             */
            StartTime: number;
            /**
             * 任务状态：
             * - 0：初始化
             * - 1：无数据
             * - 2：运行中
             * - 3：运行成功
             * - 4：运行失败
             * @example `3`
             */
            JobStatus: number;
            /**
             * 检索的图片地址。
             * @example `http://xxx.xxx.com/1.jpg`
             */
            SearchPicUrl: string;
            /**
             * 创建以图搜图任务的时间，格式为13位时间戳，单位为毫秒。
             * @example `1614850763000`
             */
            CreateTime: number;
            /**
             * 以图搜图任务ID。
             * @example `b3786935a71442efae014c7b2212****`
             */
            JobId: string;
            /**
             * 检索相似度。
             * @example `0.5`
             */
            Threshold: number;
        }[];
    };
}
