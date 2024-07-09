export interface ListDataServiceApiTestRequest {
    /**
     * 测试API Id
     * @example `12345`
     */
    "ApiId": number;
    /**
     * 分页大小，最大100
     * @example `10`
     */
    "PageSize"?: number;
}
