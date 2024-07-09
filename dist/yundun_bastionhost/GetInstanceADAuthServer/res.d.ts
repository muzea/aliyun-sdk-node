export interface GetInstanceADAuthServerResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `89398CFB-4EB6-4C7E-BB3C-EF213AC8FA50`
     */
    RequestId: string;
    /**
     * AD认证的配置信息。
     */
    AD: {
        /**
         * 服务器账号的DN。
         * @example `cn=Manager,dc=test,dc=com`
         */
        Account: string;
        /**
         * 连接AD服务器的BASE DN。
         * @example `dc=test,dc=com`
         */
        BaseDN: string;
        /**
         * AD服务器上的域。
         * @example `domain`
         */
        Domain: string;
        /**
         * AD服务器上对应的用户邮箱的字段名称。
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
         * - **true**：是
         * - **false**：否
         * @example `true`
         */
        IsSSL: boolean;
        /**
         * AD服务器上对应的用户手机号的字段名称。
         * @example `mobileAttr`
         */
        MobileMapping: string;
        /**
         * AD服务器上对应的用户名称的字段名称。
         * @example `nameAttr`
         */
        NameMapping: string;
        /**
         * 是否设置密码。取值：
         * - **true**：设置密码
         * - **false**：未设置密码
         * @example `true`
         */
        HasPassword: boolean;
        /**
         * 服务器的端口。
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
