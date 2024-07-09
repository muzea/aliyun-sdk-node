export interface GetAgentBasisStatusResponse {
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 状态码描述。
     * @example `OK`
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
         * @example `{"tenant_id":"905","servicer_id":"73****","tenant_name":"测试","recordgmtmodified":"2021-04-01 11:36:50","pk_id":"7320372021****","statusstarttime":"2021-04-01 11:36:50","recordgmtcreate":"2021-04-01 10:06:24","department_id":"94****","department_name":"测试技能组","lstlogintime":"2021-04-01 10:06:24","date_id":"20210401","triggerreason":"3","servicer_status":"D","assignstatus":"1","servicerreal_name":"xx","servicerstatusname":"签出","fstlogintime":"2021-04-01 10:06:24","servicer_name":"xx"}`
         */
        Rows: string;
    };
}
