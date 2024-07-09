export interface GetAgentServiceStatusResponse {
    /**
     * 状态码描述。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 数据列表。
     */
    Data: {
        /**
         * 当前页数。
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页大小。
         * @example `2000`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `4`
         */
        TotalNum: number;
        /**
         * 信息为List<Map>类型的JSON字符串。
         * @example `{"online_40s_transfer_ready_cnt":81,"minute_id":"-1","online_unsatis_cnt":0,"online_simple_cnt":0,"average_queue_time":-1,"service_pickup":"2086","total_waiting_time":"981","online_service_time_len":58208,"online_direct_give_up_len":0,"break_ratio":"2%"}`
         */
        Rows: string;
    };
    /**
     * 状态码。返回200表示请求成功。
     * @example `200`
     */
    Code: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
}
