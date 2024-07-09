export interface GetSkillGroupLatitudeStateResponse {
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
     * 状态编码。返回200表示请求成功。
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
         * @example `{"tenant_id":"905","n_resttype_now":0,"tenant_name":"非单元测试化BU","n_resttype1_now":0,"group_name":"-1","department_id":"-1","department_name":"-1","n_resttype98_now":0,"n_online_now":0,"date_id":"20210329","n_resttype3_now":0,"n_resttype5_now":0,"n_busy_now":0,"n_resttype2_now":0,"group_id":"-1","n_idle_now":0,"n_resttype4_now":0,"n_ack_now":0,"n_resttype99_now":0,"maximumqueuingtime":-1}`
         */
        Rows: string;
    };
}
