export interface DeleteCommentByCreatorIdResponse {
    /**
     * 请求ID。
     * @example `ER52****O9CA`
     */
    RequestId: string;
    /**
     * 调用删除直播间弹幕的返回结果。
     * @example `0io**Fs6Q384`
     */
    Result: {
        /**
         * 删除的结果。
         * @example `true`
         */
        DeleteResult: boolean;
    };
}
