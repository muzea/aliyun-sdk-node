export interface GetPictureSearchJobStatusResponse {
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
     * @example `2c7def10-7cce-11eb-8e79-959f4f722f76`
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
         * 检索范围结束时间。
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
         * 检索图片的地址。
         * @example `http://XXX.XXX.com/1.jpg`
         */
        SearchPicUrl: string;
        /**
         * 创建以图搜图任务的时间。
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
    };
}
