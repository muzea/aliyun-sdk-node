export interface DeleteAliasRequest {
    /**
     * 要操作的别名。
     * 长度为1~255个字符，必须包含前缀alias/。
     * @example `alias/example`
     */
    "AliasName": string;
}
