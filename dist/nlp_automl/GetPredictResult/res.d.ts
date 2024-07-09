export interface GetPredictResultResponse {
    /**
     * 预测结果，格式为JSON字符串。
     * @example `["人民解放军","中华人民共和国"]`
     */
    Content: string;
    /**
     * 请求id。
     * @example `32CE4E89-218B-4DAE-A103-E6BFA66EE63B`
     */
    RequestId: string;
}
