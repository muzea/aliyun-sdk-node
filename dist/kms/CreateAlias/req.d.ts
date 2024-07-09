export interface CreateAliasRequest {
    /**
     * CMK的全局唯一标识符。
     * @example `7906979c-8e06-46a2-be2d-68e3ccbc****`
     */
    "KeyId": string;
    /**
     * CMK的别名名称。
     * 长度为1~255个字符，必须包含前缀`alias/`，但不能以`alias/acs`保留字为前缀。
     * @example `alias/example`
     */
    "AliasName": string;
}
