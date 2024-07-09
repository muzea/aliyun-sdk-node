export interface GetAgentDetailReportResponse {
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
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
         * @example `{"t_wait":379322.0,"hotline_time_outcall_avg":"32.00","n_ringing":0,"t_outbound_40":0.0,"hotline_time_incall_avg":-1,"t_calldialing":0.0,"n_inbound":276,"servicer_id":"-1","call_in_sep_sat_cnt":13,"request_cnt":231,"n_not_ready_99":811,"t_work_outbound":49338.0,"hotline_rate_handle_in_60s":"96%","n_not_ready_login":811,"t_not_ready_login":0.0,"n_work_inbound":176,"}`
         */
        Rows: string;
    };
}
