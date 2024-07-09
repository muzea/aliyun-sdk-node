export interface CreateOrderForRdsResponse {
    /**
     * 购买成功的RDS实例ID
     * @example `[rm-***********]`
     */
    Data: string;
    /**
     * 请求ID
     * @example `9819BC51-D33D-4EB1-B80F-A89A20******`
     */
    RequestId: string;
    /**
     * 成功标识
     * @example `true`
     */
    Success: boolean;
}
