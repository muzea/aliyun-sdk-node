export interface DeleteDataReflowDataResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `DBEADF14-1B61-5BB2-B65B-4314F339B62A`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 回流数据ID。
         * @example `1663653105292000`
         */
        Id: number;
        /**
         * 服务ID。
         * @example `432`
         */
        ServiceId: number;
        /**
         * 数据状态。
         * - **SAVED**：正常
         * - **DELETED**：删除
         * @example `DELETED`
         */
        Status: string;
        /**
         * 回流数据删除时间。
         * @example `1663657637368`
         */
        GmtModified: number;
    };
}
