export interface SubmitDomainSpecialBizCredentialsRequest {
    /**
     * 业务ID
     * @example `219`
     */
    "BizId"?: number;
    /**
     * 证件信息
     * @example `[{"credentialType":"SHSQB",""credentialUrl":"11212121/1212d**​/sqb.jpg"},{"credentialType":"SFZZM",""credentialUrl":"11212121/1212d**​/sfzzm.jpg"}]`
     */
    "Credentials"?: string;
    /**
     * 扩展信息
     * @example `{\"addTransferLock\":true}`
     */
    "Extend"?: string;
    /**
     * 用户客户端IP
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
}
