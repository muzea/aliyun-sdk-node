export interface GetSkillGroupAgentStatusDetailsResponse {
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
         * 每页的数量。
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
         * @example `{"tenant_id": "905", "tenant_name": "非单元测试化BU", "department_id": "-1", "svc_avai_capacity": 7,      "svc_current_capacity": 0, "department_name": "-1",  "svc_online_cnt": 3, "svc_ask_offline_servicer_num": 0,  "date_id": "20210401",  "svc_max_capacity": 7, "svc_rest_cnt": 0, "current_speci_ability_num": 0, "servicer_rest_cnt": 122, "max_speci_ability_num": 3,      "svc_offline_cnt": 0,  "svc_no_client_cnt": 3, "svc_ask_rest_servicer_num": 0}`
         */
        Rows: string;
    };
}
