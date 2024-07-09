export interface DeleteDataSetResponse {
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
         * 最后修改数据源的时间。
         * @example `2018-12-06T11:17:49.000Z`
         */
        gmtModified: number;
        /**
         * 创建数据源的时间。
         * @example `2018-12-07T02:24:26.000Z`
         */
        gmtCreate: number;
        /**
         * 实例ID。
         * @example `airec-cn-o400whm78004`
         */
        instanceId: string;
    };
    /**
     * 错误码。
     * @example `200`
     */
    code: string;
    /**
     * 请求ID。
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 错误信息。
     * @example `success`
     */
    message: string;
}
