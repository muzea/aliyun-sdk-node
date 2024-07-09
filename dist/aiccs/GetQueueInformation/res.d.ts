export interface GetQueueInformationResponse {
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 状态码的描述。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求状态码。返回200代表请求成功。
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
         * @example `{"tenant_id":"905","tenant_name":"非单元测试化BU","group_id":"-1","group_name":"-1","department_id":"-1","department_name":"-1","current_session_wait_cnt":0,"current_session_service_cnt":0,"date_id":"20210327","maximum_queuing_time":-1}`
         */
        Rows: string;
    };
}
