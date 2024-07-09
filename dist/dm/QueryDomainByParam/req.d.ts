export interface QueryDomainByParamRequest {
    /**
     * 当前页码。默认：1
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页数量，默认：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 域名，长度1-50，可以包含数字、大写字母、小写字母、.、-。
     * @example `abc.com`
     */
    "KeyWord"?: string;
    /**
     * - 0表示正常
     * - 1表示不正常
     * @example `0`
     */
    "Status"?: number;
}
