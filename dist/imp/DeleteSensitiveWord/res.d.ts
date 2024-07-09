export interface DeleteSensitiveWordResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 调用删除敏感词的返回结果。
     * @example `0io**Fs6Q384`
     */
    Result: {
        /**
         * 调用是否成功。
         * @example `true`
         */
        Success: boolean;
    };
}
