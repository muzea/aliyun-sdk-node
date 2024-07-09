export interface GetAsyncPredictResponse {
    /**
     * 异步预测ID，通过调用CreateAsyncPredict接口获取。
     * @example `1629`
     */
    AsyncPredictId: number;
    /**
     * 异步预测状态，状态类型说明：
     * - 1：处理中。
     * - 2：处理完成。
     * - 3：处理失败。
     * @example `2`
     */
    Status: number;
    /**
     * 请求ID。
     * @example `EBF1AAD7-A3FB-4A78-B5E9-8356324B12B2`
     */
    RequestId: string;
    /**
     * 异步预测结果，JSON字符串格式文本。
     * @example `json string`
     */
    Content: string;
}
