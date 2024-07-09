export interface ListSessionGroupResponse {
    Data: {
        /**
         * 详细数据。
         */
        Data: {
            /**
             * 会话组ID。
             * @example `SessionGroupA`
             */
            SessionGroupId: string;
            /**
             * 质检任务ID。
             * @example `123`
             */
            SchemeTaskConfigId: number;
            /**
             * 质检任务名称。
             * @example `质检任务A`
             */
            SchemeTaskConfigName: string;
            CustomerServiceIdList: {
                /**
                 * 客户ID列表
                 */
                CustomerServiceIdList: string[];
            };
            CustomerServiceNameList: {
                /**
                 * 客户名称列表。
                 */
                CustomerServiceNameList: string[];
            };
            CustomerIdList: {
                /**
                 * 客服ID列表。
                 */
                CustomerIdList: string[];
            };
            CustomerNameList: {
                /**
                 * 客户名称列表。
                 */
                CustomerNameList: string[];
            };
            CallerList: {
                /**
                 * 呼叫号码列表。
                 */
                CallerList: string[];
            };
            SkillGroupNameList: {
                /**
                 * 技能组名称列表。
                 */
                SkillGroupNameList: string[];
            };
            /**
             * 质检得分，满分100。
             * @example `100`
             */
            Score: number;
            /**
             * 会话数。
             * @example `1`
             */
            SessionCount: number;
            /**
             * 复核筛选条件的会话数。
             * @example `1`
             */
            HitSessionCount: number;
            /**
             * 最早会话开始时间。
             * @example `2022-09-26 10:09:14`
             */
            CallStartTime: string;
            /**
             * 复核状态；可能值：0（未复核）；1（已复核）。
             * @example `1`
             */
            ReviewStatus: number;
            /**
             * 分配状态；可能值：0（未分配）；1（已分配）。
             * @example `1`
             */
            AssignStatus: number;
            ReviewerList: {
                /**
                 * 复核员列表。
                 */
                ReviewerList: string[];
            };
            /**
             * 是否为复核或申诉状态。
             * @example `true`
             */
            SessionGroupReviewedOrComplained: boolean;
            /**
             * 本条数据标志信息，当通过GetResult查询超过10000条以上的数据时，每次请求入参中需要携带上一次查询结果最后一条数据的lastDataId的值。
             * @example `4498420@a_z@93EAADF1-01D3-44BD-8AC9-F57F447EFCE8_1614*****`
             */
            LastDataId: string;
        }[];
    };
    /**
     * 总条数。
     * @example `2228`
     */
    Count: number;
    /**
     * 指定返回结果的当前页码。默认值为1。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 每页显示条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 预留字段，暂时没有用途，请忽略。
     * @example `忽略`
     */
    ResultCountId: string;
    /**
     * 本条数据标志信息，当通过GetResult查询超过10000条以上的数据时，每次请求入参中需要携带上一次查询结果最后一条数据的lastDataId的值。
     * @example `xxx`
     */
    LastDataId: string;
    /**
     * 请求ID。
     * @example `F190ADE9-619A-447D-84E3-7E241A5C428E`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：true表示成功；false/null表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，200表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为**successful**。
     * @example `successful`
     */
    Message: string;
    Messages: {
        /**
         * 出错时表示出错详情，当输出多条信息时使用。
         */
        Message: string[];
    };
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
