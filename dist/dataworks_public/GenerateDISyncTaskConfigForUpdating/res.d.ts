export interface GenerateDISyncTaskConfigForUpdatingResponse {
    /**
     * 请求是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `0bc1411515937635973****`
     */
    RequestId: string;
    /**
     * 异步线程ID的生成结果。
     */
    Data: {
        /**
         * 生成异步线程ID的结果状态。取值如下：
         * - success：表示成功生成异步线程ID。
         * - fail：表示异步线程ID生成失败。您可以查看失败原因，处理相关问题。
         * @example `true`
         */
        Status: string;
        /**
         * 异步线程ID。您需要通过该ID，调用[QueryDISyncTaskConfigProcessResult](~~383465~~)接口获取异步生成更新数据集成同步任务需要的参数，后续使用该参数更新数据集成同步任务。
         * @example `10`
         */
        ProcessId: number;
        /**
         * 异步线程ID生成失败的原因描述。 如果成功生成异步线程ID，则该参数的返回值为空。
         * @example `XXX is invalid.`
         */
        Message: string;
    };
}
