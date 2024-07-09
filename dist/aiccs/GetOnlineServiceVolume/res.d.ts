export interface GetOnlineServiceVolumeResponse {
    /**
     * 状态码描述。
     * @example `successful`
     */
    Message: string;
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
    Success: string;
    /**
     * 数据列表。
     */
    Data: {
        /**
         * 当前页数
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
         * @example `{"tenant_id":"905","online_40s_transfer_ready_cnt":109,"minute_id":"-1","wait_time_len":1215,"pickup_rate":"63.09%","thirty_seconds_to_pickUp":"2560","date_id":"-1","online_over_out_cnt":0,"online_20s_transfer_ready_cnt":109,"thirty_seconds_response_rate":"63.09%","abandonment_rate":"63.09%","service_time_len":68378,"service_pickup":"2560","hour_id":"-1","online_10s_transfer_ready_cnt":109}`
         */
        Rows: string;
    };
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
}
