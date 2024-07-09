export interface GetDomainResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 域名信息对象。
     */
    Domain: {
        /**
         * 实例ID。
         * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
         */
        InstanceId: string;
        /**
         * 域名ID。
         * @example `dm_examplexxxxx`
         */
        DomainId: string;
        /**
         * 域名。
         * @example `login.example.com`
         */
        Domain: string;
        /**
         * 域名类型，取值可选范围：
         * - system\_init：初始化域名。
         * - user\_custom：用户自定义域名。
         * @example `system_init`
         */
        DomainType: string;
        /**
         * 域名锁定状态，取值可选范围：
         * - unlock：正常。
         * - lockByLicense：因License限制不可用。
         * @example `unlock`
         */
        LockMode: string;
        /**
         * 是否默认域名。
         * @example `false`
         */
        DefaultDomain: boolean;
        /**
         * 域名创建时间，Unix时间戳格式，单位为毫秒。
         * @example `1649830226000`
         */
        CreateTime: number;
        /**
         * 域名最近更新时间，Unix时间戳格式，单位为毫秒。
         * @example `1649830226000`
         */
        UpdateTime: number;
        /**
         * 域名备案信息。
         */
        Filing: {
            /**
             * 域名关联的备案号，支持主体备案号和网站备案号。
             * @example `浙xx-xxxxxx`
             */
            IcpNumber: string;
        };
    };
}
