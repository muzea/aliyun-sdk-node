export interface BanAllCommentResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 获取全员禁言的调用结果。
     * @example `true`
     */
    Result: boolean;
}
