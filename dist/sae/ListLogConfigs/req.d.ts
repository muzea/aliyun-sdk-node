export interface ListLogConfigsRequest {
    /**
     * 应用ID。
     * @example `56f77b65-788d-442a-9885-7f20d91f****`
     */
    "AppId": string;
    /**
     * 分页查询时设置的每页数量。取值范围\[1,10000]。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 当前页码。
     * @example `1`
     */
    "CurrentPage": number;
}
