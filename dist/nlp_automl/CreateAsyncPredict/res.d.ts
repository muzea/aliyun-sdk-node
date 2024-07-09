export interface CreateAsyncPredictResponse {
    /**
     * 异步预测唯一ID，用于查询异步预测结果。
     * @example `1`
     */
    AsyncPredictId: number;
    /**
     * 请求ID
     * @example `E5C4531B-8331-5CD5-BEB3-2F8B58A4D680`
     */
    RequestId: string;
}
