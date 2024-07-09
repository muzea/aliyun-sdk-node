export interface GetFileTransResponse {
    /**
     * 请求ID，仅用于联调。
     * @example `35124E1C-AE99-5D6C-A52E-BD689D8D****`
     */
    RequestId: string;
    /**
     * 状态码。
     * @example `0`
     */
    Code: string;
    /**
     * 状态说明。
     * @example `Success.`
     */
    Message: string;
    /**
     * 返回对象。
     */
    Data: {
        /**
         * 任务ID。
         * @example `f7de74778d94422283534102dfc0****`
         */
        TransId: string;
        /**
         * 任务状态。
         * ONGOING：任务进行中。
         * COMPLETED：任务完成。
         * FAILED：任务失败
         * INVALID：无效任务。
         * @example `ONGOING`
         */
        TransStatus: string;
        /**
         * 用户创建任务时设置的任务标识。
         * @example `trans_123`
         */
        TransKey: string;
    };
}
