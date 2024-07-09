export interface QueryTouchListResponse {
    /**
     * 状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `865658FD-80DE-5D49-ABEB-F3CC9863F4F1`
     */
    RequestId: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据结果。
     */
    ResultData: {
        /**
         * 查询总量。
         * @example `100`
         */
        TotalResults: number;
        /**
         * 下一页页码。
         * @example `2`
         */
        NextPage: number;
        /**
         * 当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 总页数。
         * @example `4`
         */
        TotalPage: number;
        /**
         * 上一页页码。
         * @example `2`
         */
        PreviousPage: number;
        /**
         * 页大小。
         * @example `2`
         */
        OnePageSize: number;
        /**
         * 是否为空。
         * @example `false`
         */
        Empty: boolean;
        /**
         * 数据。
         */
        Data: {
            /**
             * 接触状态。取值：
             * - **1**：已进线。
             * - **2**：小二已接入。
             * - **3**：通话中。
             * - **4**：已结束。
             * @example `1`
             */
            Status: number;
            /**
             * 会话接受者。
             * @example `67****`
             */
            ToId: number;
            /**
             * 父接触ID。
             * @example `0`
             */
            ParentTouchId: number;
            /**
             * 客服名称。
             * @example `1390000****`
             */
            ServicerName: string;
            /**
             * 接触渠道。
             * @example `1`
             */
            ChannelType: number;
            /**
             * 会话结束时间。时间戳格式（单位：毫秒）。
             * @example `1611207976000`
             */
            CloseTime: number;
            /**
             * 更新时间。时间戳格式（单位：毫秒）。
             * @example `1611207979000`
             */
            GmtModified: number;
            /**
             * 客服ID。
             * @example `67****`
             */
            ServicerId: number;
            /**
             * 转交列表。
             * @example `null`
             */
            SwitchUser: string;
            /**
             * 租户ID。
             * @example `905`
             */
            BuId: number;
            /**
             * 会话发起者。
             * @example `6400665****`
             */
            FromId: number;
            /**
             * 用户接触ID。
             * @example `1386****`
             */
            UserTouchId: number;
            /**
             * 会话时长（单位：秒）。
             * @example `111`
             */
            TouchTime: string;
            /**
             * 会话结束原因。取值：
             * - **0**：未知。
             * - **1**：接触未成功。
             * - **2**：客户终止。
             * - **3**：坐席终止。
             * - **4**：通话异常中断。
             * - **5**：转交终止。
             * - **6**：系统终止。
             * @example `1`
             */
            TouchContent: string;
            /**
             * 反馈。
             * @example `xxxx`
             */
            Feedback: string;
            /**
             * 接触ID。
             * @example `1386****`
             */
            TouchId: string;
            /**
             * 技能组ID。
             * @example `111`
             */
            QueueId: number;
            /**
             * 部门ID。
             * @example `100`
             */
            DepId: number;
            /**
             * 结束原因。
             * @example `2`
             */
            TouchEndReason: number;
            /**
             * 会员名称。
             * @example `访客`
             */
            MemberName: string;
            /**
             * 技能组名称。
             * @example `测试1`
             */
            CommonQueueName: string;
            /**
             * 会话接起时间。时间戳格式（单位：毫秒）。
             * @example `1611209971000`
             */
            FirstTime: number;
            /**
             * 接触类型。取值：
             * - **1**：主动接触。
             * - **2**：被动接触。
             * @example `2`
             */
            TouchType: number;
            /**
             * 创建时间。时间戳格式（单位：毫秒）。
             * @example `1611209971000`
             */
            GmtCreate: number;
            /**
             * 会话ID。
             * @example `4f8807a9de024507a3090b5b66a8****`
             */
            ChannelId: string;
            /**
             * 会员ID。
             * @example `6400665****`
             */
            MemberId: number;
            /**
             * 大字段。
             */
            ExtAttrsString: any;
            /**
             * 扩展字段。
             */
            ExtAttrs: {
                /**
                 * 满意度评分。取值：
                 * - **1**：很不满。
                 * - **2**：不满。
                 * - **3**：一般。
                 * - **4**：满意。
                 * - **5**：很满意。
                 * @example `1`
                 */
                EvaluationScore: number;
                /**
                 * 满意度等级。取值：
                 * - **2**：二级满意度。
                 * - **3**：三级满意度。
                 * - **4**：四级满意度。
                 * - **5**：五级满意度。
                 * @example `2`
                 */
                EvaluationLevel: number;
                /**
                 * 评估解决方案。
                 * @example `0`
                 */
                EvaluationSolution: number;
                /**
                 * 入呼为主叫号码。
                 * @example `187****0000`
                 */
                Ani: string;
                /**
                 * 首次响应时长（单位：秒）。
                 * @example `1`
                 */
                OnlineJoinRespInterval: number;
                /**
                 * 线上会话源。
                 * @example `0`
                 */
                OnlineSessionSource: number;
                /**
                 * 评价状态。取值：
                 * - **-1**：未发起评价。
                 * - **0**：未评价。
                 * - **1**：已评价。
                 * @example `1`
                 */
                EvaluationStatus: number;
                /**
                 * 外呼为被叫号码，入呼为被叫号码。
                 * @example `05712688****`
                 */
                Dnis: string;
                /**
                 * 外呼为主叫号码。
                 * @example `05712688****`
                 */
                OutCallRouteNumber: string;
            };
        }[];
    };
}
