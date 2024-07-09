export interface GetProduceInfoResponse {
    /**
     * 请求id
     * @example `55534AD0-F8E2-5114-BB52-72150A499DEB`
     */
    RequestId: string;
    /**
     * 业务ID
     * @example `P20220531100052000001`
     */
    BizId: string;
    /**
     * 商品id
     * @example `6c1ccb5f26794d16bb13330fa84c86c7`
     */
    GoodsId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `True`
     */
    Success: boolean;
}
