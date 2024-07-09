export interface CancelBanCommentResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 调用CancelBanComment的返回结果。true代表取消禁言成功，false代表取消禁言失败。
     * @example `true`
     */
    Result: boolean;
}
