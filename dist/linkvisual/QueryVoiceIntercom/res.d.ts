export interface QueryVoiceIntercomResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `tenant auth error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `06DC77A0-4622-42DB-9EE0-25FIOHS82JK1`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 语音对讲地址信息。
     */
    Data: {
        /**
         * 语音对讲地址。
         * @example `rtmp://***.***.***.***:8000/talk?token=********`
         */
        Url: string;
        /**
         * 解密参数。
         */
        CryptoKey: {
            /**
             * 解密密钥。
             * @example `bPvz6tnfonP1E+********v2Q==`
             */
            Key: string;
            /**
             * 解密向量。
             * @example `MDEyMzQ1Njc4********0+Pw==`
             */
            Iv: string;
        };
    };
}
