export interface GetSnapshotUrlsRequest {
    /**
     * 任务ID
     * @example `****20b48fb04483915d4f2cd8ac****`
     */
    "JobId"?: string;
    /**
     * 分页数目
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，每页显示条数。默认值为10，最大值为30。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 排列顺序。取值：Asc，Desc
     * @example `Asc`
     */
    "OrderBy"?: string;
    /**
     * 鉴权超时时间。单位：秒。默认值：3600。最大值：129600（36小时）。
     * @example `3600`
     */
    "Timeout"?: number;
}
