export interface AddUserRequest {
    /**
     * 阿里云子账号UID。
     * @example `134****`
     */
    "UserId": string;
    /**
     * 客户端token
     * @example `1*`
     */
    "ClientToken"?: string;
    /**
     * 系统扩展字段，请忽略；
     * @example `{}`
     */
    "ExtraParams"?: string;
}
