export interface ListAppVersionRequest {
    /**
     * 应用ID。
     * @example `4384****`
     */
    "AppId": string;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页时每页显示的数据行数。
     * 取值范围：1~9999。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
}
