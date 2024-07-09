export interface QueryMetricByPageResponse {
    /**
     * 接口状态，取值说明如下：
     * - 2XX：成功。
     * - 3XX：重定向。
     * - 4XX：请求错误。
     * - 5XX：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时返回的信息。
     * @example `StartTime is mandatory for this action.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `687F9CB7-4798-57BF-A6EE-E6CC76******`
     */
    RequestId: string;
    /**
     * 查询是否成功：
     * - `true`：成功。
     * - `false`：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 查询结果的每页项目数量。
         * @example `1`
         */
        PageSize: number;
        /**
         * 查询结果的总项目数量。
         * > 此参数的返回值为估算值，仅用于分页结束判断，不代表实际的数据总量。
         * @example `2`
         */
        Total: number;
        /**
         * 查询结果的页码。
         * @example `1`
         */
        Page: number;
        /**
         * 分页查询是否结束。
         * - true：结束。
         * - false：需要继续分页（CurrentPage+1后继续查询）。
         * @example `false`
         */
        Completed: boolean;
        /**
         * 返回数据。
         */
        Items: any[];
    };
}
