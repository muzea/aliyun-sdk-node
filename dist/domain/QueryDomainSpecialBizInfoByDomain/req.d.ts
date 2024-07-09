export interface QueryDomainSpecialBizInfoByDomainRequest {
    /**
     * 域名
     * @example `test003.cn`
     */
    "DomainName": string;
    /**
     * 业务类型
     * @example `govRegister`
     */
    "BizType": string;
    /**
     * 用户客户端IP
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
}
