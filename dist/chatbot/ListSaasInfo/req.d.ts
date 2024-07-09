export interface ListSaasInfoRequest {
    /**
     * 业务空间key，不传时访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
    /**
     * 业务方用户名
     * @example `userTest`
     */
    "SaasName": string;
    /**
     * 用户所拥有的saas权限组code，多个用英文逗号分隔
     * @example `DS,FAQ`
     */
    "SaasGroupCodes"?: string;
}
