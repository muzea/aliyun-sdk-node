export interface BanCommentResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 获取禁言操作调用结果，true代表禁言成功，false代表禁言失败。
     * @example `true`
     */
    Result: boolean;
}
