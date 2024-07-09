export interface GetSparkSessionStateResponse {
    /**
     * Spark作业的各种内部状态，如running、success、starting、killing、failed，等等
     * @example `killed`
     */
    State: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `9AD49396-8F80-5511-9268-A6360B205136`
     */
    RequestId: string;
}
