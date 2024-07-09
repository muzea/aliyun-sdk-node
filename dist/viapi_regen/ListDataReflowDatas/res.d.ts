export interface ListDataReflowDatasResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `2BB7D6DC-4F64-5D2F-824A-F7F5AD3233CE`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 每页展示的数据条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总共页码数。
         * @example `20`
         */
        TotalPage: number;
        /**
         * 总共数据条数。
         * @example `193`
         */
        TotalCount: number;
        /**
         * 回流数据。
         */
        Elements: any[];
    };
}
