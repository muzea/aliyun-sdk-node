export interface EventCenterQueryEventsResponse {
    /**
     * 错误信息。
     * @example `Specified parameter Limit is not valid.`
     */
    Message: string;
    /**
     * 本次请求的ID。
     * @example `5DAF96FB-A4B6-548C-B999-XXXXXXXX`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 表示当前调用返回读取到的位置。空代表数据已经读取完毕。
         * @example `100`
         */
        NextToken: string;
        /**
         * 本次请求所返回的最大记录条数
         * @example `100`
         */
        MaxResults: number;
        /**
         * TotalCount本次请求条件下的数据总量，此参数为可选参数，默认可不返回
         * @example `76`
         */
        TotalCount: number;
        /**
         * 对应查询类型为timeseries的查询结果。
         */
        TimeSeries: {
            /**
             * 查询结果的条目，以k-v对表示。
             * @example `{
              "id":"xxx",
              "source":"acs.ecs"
            }`
             */
            RowData: any;
            /**
             * 用于显示时间戳。
             * @example `1683561600000`
             */
            Time: string;
        }[];
        /**
         * 对应查询类型为table的查询结果。
         */
        Table: {
            /**
             * 查询结果的条目，以k-v对表示。
             * @example `{
              "id":"xxx",
              "source":"acs.ecs"
            }`
             */
            RowData: any;
        }[];
    };
    /**
     * 接口状态或POP错误码。取值说明如下：Success：成功。
     * @example `Success`
     */
    Code: string;
    /**
     * 操作是否成功。true表示成功，false表示失败。
     * @example `true`
     */
    Success: boolean;
}
