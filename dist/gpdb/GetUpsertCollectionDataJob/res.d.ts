export interface GetUpsertCollectionDataJobResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 此接口状态，取值说明：
     * - **success**：成功。
     * - **fail**：失败。
     * @example `success`
     */
    Status: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 上传向量数据的任务的详细信息。
     */
    Job: {
        /**
         * Job ID。
         * @example `231460f8-75dc-405e-a669-0c5204887e91`
         */
        Id: string;
        /**
         * 操作是否完成。
         * @example `false`
         */
        Completed: boolean;
        /**
         * 任务创建时间。
         * @example `2024-01-08 16:52:04.864664`
         */
        CreateTime: string;
        /**
         * 任务更新时间。
         * @example `2024-01-08 16:53:04.864664`
         */
        UpdateTime: string;
        /**
         * 任务状态。
         * > 取值说明：
         * > - Success：成功；
         * > - Failed：失败，失败原因可查看Error字段；
         * > - Cancelling：正在取消中；
         * > - Cancelled：已取消；
         * > - Start：开始；
         * > - Running：执行中；
         * @example `Success`
         */
        Status: string;
        /**
         * 当前操作异常或者失败时的错误信息。
         * @example `Failed to connect database.`
         */
        Error: string;
        /**
         * 上传进度，此数值为已经上传的数据的条数。
         * @example `1600`
         */
        Progress: number;
    };
}
