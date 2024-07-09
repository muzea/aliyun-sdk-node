export interface GetDigitalWatermarkExtractResultResponse {
    /**
     * 请求ID。
     * @example `42E0554B-80F4-4921-****-ACFB22CAAAD0`
     */
    RequestId: string;
    /**
     * 水印提取作业详情。
     */
    AiExtractResultList: {
        /**
         * 水印提取作业ID。
         * @example `3af004763bcf459698860f4ede20****`
         */
        JobId: string;
        /**
         * 水印提取作业的创建时间。
         * @example `2023-09-16T02:49:04Z`
         */
        CreateTime: string;
        /**
         * 水印提取作业的最后更新时间。
         * @example `2023-09-17T06:20:45Z`
         */
        ModifyTime: string;
        /**
         * 水印提取作业的状态。取值：
         * - **Success**：成功
         * - **Failed**：失败
         * - **Processing**：处理中
         * @example `Failed`
         */
        Status: string;
        /**
         * 报错提示信息。当水印提取作业处理失败（即`Status`为`Failed`）时，才会返回本参数。
         * @example `query copyright info err`
         */
        ErrorMessage: string;
        /**
         * 提取出的水印文字。
         * @example `test mark`
         */
        WaterMarkText: string;
    }[];
}
