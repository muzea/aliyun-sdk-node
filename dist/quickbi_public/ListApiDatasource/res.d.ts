export interface ListApiDatasourceResponse {
    /**
     * 请求ID。
     * @example `D787E1A3-A93C-424A-B626-C2B05DF8D885`
     */
    RequestId: string;
    /**
     * 返回查询结果。
     */
    Result: {
        /**
         * 请求获取的数据页码数，用于翻页。
         * @example `1`
         */
        PageNum: number;
        /**
         * 请求接口时设置的每页行数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 查询到的API数据源列表。
         */
        Data: {
            /**
             * API数据源的ID。
             * @example `0f2c3c6409be4dc0810f2a5785e816a8`
             */
            ApiId: string;
            /**
             * 任务ID。
             * @example `REST_API_SYNC_0f2c3c6409be4dc0810f2a5785e816a8`
             */
            JobId: string;
            /**
             * API数据源的名称。
             * @example `测试数据源`
             */
            ShowName: string;
            /**
             * API数据源的数据量。
             * - 单位：KB
             * @example `0.39746094`
             */
            DataSize: number;
            /**
             * API数据源同步任务状态。
             * @example `2`
             */
            StatusType: number;
            /**
             * JSONArray格式的参数配置。
             * - name：参数名称
             * - value：参数值
             * @example `[{"name":"token","value":"xxxxxxxxxxxx"},{"name":"pageSize","value":100}]`
             */
            Parameters: string;
            /**
             * JSON格式的查询语句参数配置，用户可以自行定义。
             * @example `{"key1":"value1"}`
             */
            Body: string;
            /**
             * API数据源最后同步时间。
             * @example `2022-05-25 16:19:43`
             */
            DateUpdateTime: string;
            /**
             * 创建时间。
             * @example `2022-05-25 16:19:43`
             */
            GmtCreate: string;
            /**
             * 修改时间。
             * @example `2022-05-25 16:19:43`
             */
            GmtModified: string;
        }[];
        /**
         * 总行数。
         * @example `1`
         */
        TotalNum: number;
    };
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
