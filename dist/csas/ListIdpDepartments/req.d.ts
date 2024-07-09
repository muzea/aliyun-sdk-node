export interface ListIdpDepartmentsRequest {
    /**
     * 自定义身份源配置ID。
     * @example `1440`
     */
    "IdpConfigId": string;
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
}
