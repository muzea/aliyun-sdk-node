export interface CancelBanAllCommentResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 获取取消全员禁言的调用结果。true表示取消全员禁言成功，false表示取消全员禁言失败。
     * @example `true`
     */
    Result: boolean;
}
