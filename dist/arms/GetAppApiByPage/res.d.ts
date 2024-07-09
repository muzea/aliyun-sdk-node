export interface GetAppApiByPageResponse {
    /**
     * 接口状态。
     * - 2XX：成功。
     * - 3XX：重定向。
     * - 4XX：请求错误。
     * - 5XX：服务器错误。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B6A00968-82A8-4F14-9D1B-B53827DB****`
     */
    RequestId: string;
    /**
     * 查询是否成功。
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
         * 返回结果的每页项目数量。
         * @example `10`
         */
        PageSize: number;
        /**
         * 返回结果的总项目数量。
         * > 此参数的返回值为估算值，仅用于分页结束判断，不代表实际的数据总量
         * @example `2`
         */
        Total: string;
        /**
         * 返回结果的页码。
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
         * 返回应用接口的黄金三指标数据
         */
        Items: any[];
    };
}
