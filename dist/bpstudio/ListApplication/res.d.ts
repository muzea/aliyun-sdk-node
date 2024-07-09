export interface ListApplicationResponse {
    /**
     * 返回的条目总数。
     * @example `123`
     */
    TotalCount: number;
    /**
     * 接口返回信息。
     * @example `Success`
     */
    Message: string;
    /**
     * 返回的当前页码。
     * @example `2`
     */
    NextToken: number;
    /**
     * 应用的 ID。
     * @example `BFB7F5C8-FE7A-06CA-9F87-ABBF6B848F0C`
     */
    RequestId: string;
    /**
     * 应用列表信息
     */
    Data: {
        /**
         * 应用Topo图的 URL。
         * @example `https://bp-studio-daily.oss-cn-beijing.aliyuncs.com/1411182597819805/sr-Y3KR7ZSQZR2F0YX3.png`
         */
        ImageURL: string;
        /**
         * 应用状态
         * @example `Deployed_Success`
         */
        Status: string;
        /**
         * 应用的名称。
         * @example `JIX9NEZUALGS46UI`
         */
        ApplicationId: string;
        /**
         * The name of the application.
         * @example `cadt-appName`
         */
        Name: string;
        /**
         * 创建应用的时间。
         * @example `2021-09-15  08:30:00`
         */
        CreateTime: string;
        /**
         * 应用所属的资源组的 ID。
         * @example `default`
         */
        ResourceGroupId: string;
    }[];
    /**
     * HTTP 状态代码。
     * @example `200`
     */
    Code: number;
}
