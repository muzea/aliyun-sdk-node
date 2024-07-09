export interface DeleteCommentResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 调用删除房间弹幕消息的返回结果。
     * @example `0io**Fs6Q384`
     */
    Result: {
        /**
         * 删除的结果。其中true表示删除成功，false表示删除失败。
         * @example `true`
         */
        DeleteResult: boolean;
    };
}
