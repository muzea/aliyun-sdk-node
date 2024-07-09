export interface GetSkillGroupStatusTotalResponse {
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
         * @example `{"minute_id":"-1","call_out_intervene_servicer_cnt":26,"call_out_servicer_cnt":35,"call_out_intervene_60s_cnt":155,"servicer_real_name":"--","call_in_sep_normal_cnt":0,"call_out_intervene_30s_cnt":235,"servicer_id":"-1","tenant_name":"非单元测试化BU","call_out_sep_sat_cnt":1}`
         */
        Rows: string;
    };
}
