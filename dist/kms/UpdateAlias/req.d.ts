export interface UpdateAliasRequest {
    /**
     * 新的密钥ID。主密钥的全局唯一标识符。
     * @example `1234abcd-12ab-34cd-56ef-12345678****`
     */
    "KeyId": string;
    /**
     * 要操作的别名。
     * 长度为1~255个字符，必须包含前缀alias/。
     * @example `alias/example`
     */
    "AliasName": string;
}
