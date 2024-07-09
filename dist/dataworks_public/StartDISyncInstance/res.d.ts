export interface StartDISyncInstanceResponse {
    /**
     * 请求是否成功。取值如下：
     * - true：成功。
     * -  false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `0bc1411515937635973****`
     */
    RequestId: string;
    /**
     * 启动同步任务的结果。
     */
    Data: {
        /**
         * 启动同步任务的结果状态。取值如下：
         * - success：同步任务启动成功。
         * - fail：同步任务启动失败。您可以查看具体原因，处理相关问题。
         * @example `success`
         */
        Status: string;
        /**
         * 启动数据集成同步任务失败后的原因描述。
         * 如果启动数据集成同步任务成功，则该参数的返回值为空。
         * @example `fileId:[100] is invalid.`
         */
        Message: string;
    };
}
