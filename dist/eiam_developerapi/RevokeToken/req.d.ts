export interface RevokeTokenRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "instanceId": string;
    /**
     * 应用ID。
     * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
     */
    "applicationId": string;
    /**
     * 客户端ID。
     * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
     */
    "client_id"?: string;
    /**
     * 客户端密钥。
     * @example `CSEHDcHcrUKHw1CuxkJEHPveWRXBGqVqRsxxxx`
     */
    "client_secret"?: string;
    /**
     * 待撤销的token。
     * @example `ATxxxx`
     */
    "token": string;
    /**
     * token类型，取值可选范围：
     * access_token
     * refresh\_token
     * @example `access_token`
     */
    "token_type_hint"?: string;
}
