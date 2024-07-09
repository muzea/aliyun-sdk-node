export interface QueryResourcePackageInstancesRequest {
    /**
     * 产品代码。
     * @example `rds`
     */
    "ProductCode"?: string;
    /**
     * 失效起始时间。日期格式按照ISO8601标准表示，并需要使用UTC时间。格式为：yyyy-MM-ddTHH:mm:ssZ。
     * @example `2020-02-02T12:00:00Z`
     */
    "ExpiryTimeStart"?: string;
    /**
     * 失效结束时间。日期格式按照ISO8601标准表示，并需要使用UTC时间。格式为：yyyy-MM-ddTHH:mm:ssZ。
     * @example `2020-02-02T13:00:00Z`
     */
    "ExpiryTimeEnd"?: string;
    /**
     * 页码，默认为1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页条数，默认值20，最大300。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 是否包含合作伙伴。
     * @example `true`
     */
    "IncludePartner"?: boolean;
}
