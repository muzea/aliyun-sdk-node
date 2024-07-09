export interface DescribeLiveStreamStateResponse {
    /**
     * 推流接入的类型。取值：
     * - push：直播推流。
     * - pull：触发拉流。
     * @example `push`
     */
    Type: string;
    /**
     * 请求ID。
     * @example `CE6CD79D-0A98-1F22-A15F-FADA74DF2729`
     */
    RequestId: string;
    /**
     * 流状态。取值：
     * - online：推流中，表示正常推流中。
     * - offline：不在线（推流失败或者推流结束，具体状态根据推流回调返回，此API不细分）。
     * - forbidden：已禁推。
     * @example `online`
     */
    StreamState: string;
}
