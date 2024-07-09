export interface ListAppsRequest {
    /**
     * 工作空间ID。
     * @example `123456`
     */
    "ProductId": string;
    /**
     *  页码，默认值：1。
     * @example `1`
     */
    "Page"?: string;
    /**
     * - 每页的应用数量，默认值：20。
     * - 取值范围为：1-100。
     * @example `20`
     */
    "PageSize"?: string;
    /**
     * 应用类型，取值如下：
     *
     *     1 ：iOS
     *     2 ：Android
     *     8 ：魔笔网页端
     *     9 ：魔笔移动端
     * @example `1`
     */
    "OsType"?: number;
}
