export interface CreateDeliveryHistoryJobRequest {
    /**
     * 跟踪名称。
     * @example `trail-name`
     */
    "TrailName": string;
    /**
     * 保证请求的幂等性。该值由客户端生成，并且必须全局唯一。
     * ClientToken只支持ASCII字符，且不能超过64个字符。
     * 更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
