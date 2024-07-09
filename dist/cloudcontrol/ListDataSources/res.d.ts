export interface ListDataSourcesResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    requestId: string;
    /**
     * 数据列表。
     */
    dataSources: {
        /**
         * 数据ID。
         * @example `cn-beijing`
         */
        id: string;
    }[];
}
