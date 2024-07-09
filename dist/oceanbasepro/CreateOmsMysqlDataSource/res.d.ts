export interface CreateOmsMysqlDataSourceResponse {
    /**
     * 请求 ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 请求的返回结果。
     */
    Data: {
        /**
         * 数据源记录 ID。
         * @example `e_1234abcd*****`
         */
        EndpointId: string;
    };
}
