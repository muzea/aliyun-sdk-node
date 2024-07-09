export interface RenewInstanceResponse {
    /**
     * 请求id
     * @example `67F33190-946B-1105-B6A1-E2DF0426DD51`
     */
    RequestId: string;
    /**
     * orderId
     * @example `210406354690749`
     */
    OrderId: number;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
}
