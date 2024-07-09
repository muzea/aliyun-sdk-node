export interface DescribeFabricOrdererLogsResponse {
    /**
     * 请求ID
     * @example `508EA949-6349-4C86-B8E7-1D90669382B1`
     */
    RequestId: string;
    /**
     * 结果
     * @example `Kafka.Retry.Producer.RetryMax=3`
     */
    Result: string;
    /**
     * 结果状态
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误代码
     * @example `200`
     */
    ErrorCode: number;
}
