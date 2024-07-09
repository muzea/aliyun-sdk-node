export interface ListApplicationsResponse {
    /**
     * 应用列表。
     */
    Applications: {
        /**
         * 应用名称。
         * @example `HDFS`
         */
        ApplicationName: string;
        /**
         * 应用版本。
         * @example `2.8.5-20230620`
         */
        ApplicationVersion: string;
        /**
         * 社区版本。
         * @example `2.8.5`
         */
        CommunityVersion: string;
        /**
         * 应用操作状态。
         * @example `RUNNING`
         */
        ApplicationState: string;
    }[];
    /**
     * 请求ID。
     * @example `9E3A7161-EB7B-172B-8D18-FFB06BA3****`
     */
    RequestId: string;
    /**
     * 下页页码。
     * @example `2`
     */
    NextToken: string;
    /**
     * 分页大小。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 分页总数。
     * @example `20`
     */
    TotalCount: number;
}
