export interface SubmitCheckResponse {
    /**
     * 执行云产品配置检查的任务ID。
     * @example `5fe3f65d-4012-455d-8232-2a98a858****`
     */
    TaskId: string;
    /**
     * 接口调用成功时，返回的数据。
     */
    Data: {
        /**
         * 云产品配置检测任务操作码。
         * - **Throttling**：频率限制
         * @example `Throttling`
         */
        OperateCode: string;
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CE8369A6-A843-5E1B-A613-78E6920D****`
     */
    RequestId: string;
}
