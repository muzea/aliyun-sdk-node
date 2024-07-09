export interface ListIdpConfigsRequest {
    /**
     * 当前页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 指定的身份源配置类型。多个类型以","分隔。
     * @example `CSAS,DingTalk,LDAP`
     */
    "Include"?: string;
}
