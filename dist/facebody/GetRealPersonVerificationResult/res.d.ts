export interface GetRealPersonVerificationResultResponse {
    /**
     * 请求ID。
     * @example `10FC953D-7C0C-4915-8949-34E3246E5B79`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 认证是否通过。
         * - true：通过。
         * - false：不通过。
         * @example `true`
         */
        Passed: boolean;
    };
}
