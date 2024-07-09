export interface SendCustomMessageToAllResponse {
    /**
     * 请求ID。
     * @example `FE22D613-D3C6-4A58-87CA-F21FC85AA08E`
     */
    RequestId: string;
    /**
     * 调用发送自定义消息的返回结果。
     * @example `0io**Fs6Q384`
     */
    Result: {
        /**
         * 自定义消息的唯一ID标识。由数字、大小写字母组成，最大长度20个字符。
         * @example `0io**Fs6Q384`
         */
        MessageId: string;
    };
}
