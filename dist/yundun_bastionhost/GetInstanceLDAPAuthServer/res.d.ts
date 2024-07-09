export interface GetInstanceLDAPAuthServerResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `1C60E741-102D-5E8F-9710-B06D3F0183FE`
     */
    RequestId: string;
    /**
     * LDAP认证的配置信息。
     */
    LDAP: {
        /**
         * 服务器的账号。
         * @example `cn=Manager,dc=test,dc=com`
         */
        Account: string;
        /**
         * 基准域名（Base DN）。
         * @example `dc=test,dc=com`
         */
        BaseDN: string;
        /**
         * 用户邮箱对应的服务器的属性名。
         * @example `emailAttr`
         */
        EmailMapping: string;
        /**
         * 用户的筛选条件。
         * @example `(&(objectClass=top))`
         */
        Filter: string;
        /**
         * 是否支持SSL。取值：
         * - **true**：支持
         * - **false**：不支持
         * @example `true`
         */
        IsSSL: boolean;
        /**
         * 用户登录名对应服务器属性名。
         * @example `userNameAttr`
         */
        LoginNameMapping: string;
        /**
         * 用户手机号对应的服务器的属性名。
         * @example `mobileAttr`
         */
        MobileMapping: string;
        /**
         * 用户名称对应的服务器的属性名。
         * @example `nameAttr`
         */
        NameMapping: string;
        /**
         * 是否设置密码。取值：
         * - **true**：设置密码
         * - **false**：未设置密码
         * @example `true`
         */
        HasPassword: string;
        /**
         * 访问服务器的端口。
         * @example `389`
         */
        Port: number;
        /**
         * 服务器的地址。
         * @example `192.168.XX.XX`
         */
        Server: string;
        /**
         * 备用服务器的地址。
         * @example `192.168.XX.XX`
         */
        StandbyServer: string;
    };
}
