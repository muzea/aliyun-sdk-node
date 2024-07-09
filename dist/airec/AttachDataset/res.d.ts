export interface AttachDatasetResponse {
    /**
     * 返回参数。
     */
    result: {
        /**
         * 版本号ID。
         * @example `2018102321****`
         */
        versionId: string;
        /**
         * State状态类型。
         * 取值：
         * - **Importing**：数据导入中。
         * - **DataSuccess**：数据导入成功。
         * - **DataFailed**：数据导入失败，终态。
         * - **Training**：训练中。
         * - **Success**：成功，终态。
         * - **Failed**：失败，终态。
         * - **Stopped**：终止，终态。
         * @example `Importing`
         */
        state: string;
        /**
         * 最后修改时间。
         * @example `2018-12-07T02:24:26.000Z`
         */
        gmtModified: number;
        /**
         * 创建时间。
         * @example `2018-12-06T06:14:01.000Z`
         */
        gmtCreate: number;
        /**
         * 实例ID。
         * @example `airec-cn-****`
         */
        instanceId: string;
    };
    /**
     * 错误码。
     * @example `InternalServerError`
     */
    code: string;
    /**
     * 请求ID。
     * @example `F60021C4-57AF-5F46-9B3E-FCEF1C7A1459`
     */
    requestId: string;
    /**
     * 错误信息。
     * @example `An internal server error occurred`
     */
    message: string;
}
