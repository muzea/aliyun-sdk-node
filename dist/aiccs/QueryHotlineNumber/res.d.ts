export interface QueryHotlineNumberResponse {
    /**
     * 请求ID。
     * @example `EE339D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 接口调用是否成功。
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。返回Success表示请求成功。
     * @example `Success`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 热线号码配置信息。
     */
    Data: {
        /**
         * 数据总量。
         * @example `123`
         */
        TotalCount: number;
        /**
         * 当前页面。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 每页大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 号码列表。
         */
        HotlineNumList: {
            /**
             * 热线号码。
             * @example `0571****2211`
             */
            HotlineNumber: string;
            /**
             * 号码描述。
             * @example `测试`
             */
            Description: string;
            /**
             * 号码归属地。
             * @example `浙江杭州`
             */
            Location: string;
            /**
             * 运营商。
             * @example `电信`
             */
            Sp: string;
            /**
             * 是否用于入呼。
             * @example `true`
             */
            InBoundEnabled: boolean;
            /**
             * 入呼流程ID。
             * @example `12`
             */
            FlowId: number;
            /**
             * 入呼流程名称。
             * @example `测试流程`
             */
            FlowName: string;
            /**
             * 是否用于外呼。
             * @example `true`
             */
            OutboundEnabled: boolean;
            /**
             * 外呼针对所有部门生效。
             * @example `true`
             */
            CalloutAllDepartment: boolean;
            /**
             * 外呼生效列表。
             */
            CalloutRangeList: {
                /**
                 * 部门ID。
                 * @example `2256****`
                 */
                DepartmentId: number;
                /**
                 * 部门名称。
                 * @example `部门A`
                 */
                DepartmentName: string;
                /**
                 * 技能组列表。
                 */
                GroupDOList: {
                    /**
                     * 技能组ID。
                     * @example `6083****`
                     */
                    GroupId: number;
                    /**
                     * 技能组名称。
                     * @example `技能组A`
                     */
                    GroupName: string;
                }[];
            }[];
            /**
             * 满意度状态。取值：
             * - **0**：入呼外呼均不开启。
             * - **1**：入呼开启。
             * - **2**：外呼开启。
             * - **3**：入呼外呼均开启。
             * @example `0`
             */
            EvaluationStatus: number;
        }[];
    };
}
