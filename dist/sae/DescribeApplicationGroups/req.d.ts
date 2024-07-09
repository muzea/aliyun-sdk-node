export interface DescribeApplicationGroupsRequest {
    /**
     * 应用ID。
     * @example `d700e680-aa4d-4ec1-afc2-6566b5ff****`
     */
    "AppId": string;
    /**
     * 页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 页面大小。
     * @example `10`
     */
    "PageSize"?: number;
}
