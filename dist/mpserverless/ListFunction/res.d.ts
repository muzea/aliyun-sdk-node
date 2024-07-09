export interface ListFunctionResponse {
    /**
     * 请求ID。
     * @example `D388FE2B-61D5-4A76-A8F0-xxxx`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    Paginator: {
        /**
         * 列表的页码。
         * @example `1`
         */
        PageNum: number;
        /**
         * 分页查询时设置的每页行数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 查询的云函数总数。
         * @example `1`
         */
        Total: number;
        /**
         * 查询的页数。
         * @example `1`
         */
        PageCount: number;
    };
    /**
     * 云函数详情。
     */
    DataList: {
        /**
         * 定时触发配置。
         * @example `cron:0 0 * * * *`
         */
        TimingTriggerConfig: string;
        /**
         * HTTP触发的路径。
         * @example `/http/hello`
         */
        HttpTriggerPath: string;
        /**
         * 云函数创建时间。
         * @example `2019-06-21T02:22:55.996Z`
         */
        CreatedAt: string;
        /**
         * 云函数修改时间。
         * @example `2019-06-21T02:22:55.996Z`
         */
        ModifiedAt: string;
        /**
         * 云函数名称。
         * @example `demoFunction`
         */
        Name: string;
        /**
         * 云函数描述。
         * @example `test`
         */
        Desc: string;
        /**
         * 云函数运行参数。
         */
        Spec: {
            /**
             * 超时时间。
             * @example `5s`
             */
            Timeout: string;
            /**
             * 运行环境。
             * @example `Node.js 8`
             */
            Runtime: string;
            /**
             * 单实例允许的最大并发度
             * @example `1`
             */
            InstanceConcurrency: number;
            /**
             * 内存大小。
             * @example `128 MB`
             */
            Memory: string;
        };
    }[];
}
