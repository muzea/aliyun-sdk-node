export interface GetDomainRequest {
    /**
     * 行业类型
     * @example `ecommerce`
     */
    "domainName": string;
    /**
     * 应用的名称或者是应用id
     * @example `my_app_group_name`
     */
    "appGroupIdentity": string;
}
