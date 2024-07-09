export interface QueryHotlineDashboardResponse {
    /**
     * 请求ID。
     * @example `ccc_xp_pre-cn-***`
     */
    RequestId: string;
    /**
     * 接口调用状态。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回状态码，200为返回成功
     * @example `200`
     */
    Code: string;
    /**
     * 返回状态描述。
     * @example `successful`
     */
    Message: string;
    /**
     * Page数据。
     */
    Data: {
        /**
         * 查询结果条数。
         * @example `100`
         */
        Total: number;
        /**
         * 热线看板数据。
         */
        Results: {
            /**
             * 日期。
             * @example `20211101`
             */
            DateId: string;
            /**
             * 坐席ID。
             * @example `727272`
             */
            ServicerId: number;
            /**
             * 坐席对外展示名称。
             * @example `加油-小高`
             */
            ServicerShowName: string;
            /**
             * 坐席真实姓名。
             * @example `加油-小高`
             */
            ServicerRealName: string;
            /**
             * 部门ID。
             * @example `11212121`
             */
            DepartmentId: number;
            /**
             * 部门名称。
             * @example `加油组`
             */
            DepartmentName: string;
            /**
             * 有效呼入量。
             * @example `10`
             */
            EffectiveInCalls: number;
            /**
             * 有效呼入小计量。
             * @example `9`
             */
            EffectiveInServiceNotes: number;
            /**
             * 有效外呼量。
             * @example `20`
             */
            EffectiveOutCalls: number;
            /**
             * 有效外呼小计量。
             * @example `12`
             */
            EffectiveOutServiceNotes: number;
        }[];
    };
    /**
     * http状态编码。
     * @example `200`
     */
    HttpStatusCode: number;
}
