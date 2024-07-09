export interface GetFeeHistoryRequest {
    /**
     * 版本号。
     * @example `2017-04-11`
     */
    "Version": string;
    /**
     * 当前页码。
     * @example `1`
     */
    "Page": string;
    /**
     * 每页的记录条数。
     * @example `10`
     */
    "PageSize": string;
}
