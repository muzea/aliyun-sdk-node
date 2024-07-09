export interface ListDomainProxyTokensResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 域名的代理Token信息列表。
     */
    DomainProxyTokens: {
        /**
         * 实例ID。
         * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
         */
        InstanceId: string;
        /**
         * 域名代理Token ID。
         * @example `pt_examplexxxx`
         */
        DomainProxyTokenId: string;
        /**
         * 域名代理Token。
         * @example `PTxxxxxxxx`
         */
        DomainProxyToken: string;
        /**
         * 域名ID。
         * @example `dm_examplexxxx`
         */
        DomainId: string;
        /**
         * token状态，取值可选范围：
         * - enabled：启用中。
         * - disabled：禁用中。
         * @example `enabled`
         */
        Status: string;
        /**
         * 域名代理Token创建时间，Unix时间戳格式，单位为毫秒。
         * @example `1649830226000`
         */
        CreateTime: number;
        /**
         * 域名代理Token最近更新时间，Unix时间戳格式，单位为毫秒。
         * @example `1649830226000`
         */
        UpdateTime: number;
        /**
         * 域名代理Token最近使用时间，Unix时间戳格式，单位为毫秒。
         * @example `1649830226000`
         */
        LastUsedTime: number;
    }[];
}
