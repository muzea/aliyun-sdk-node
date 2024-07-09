export interface ListRealtimeSkillGroupStatesResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `26A34338-5CD9-4C95-A7A6-5BDCE76C6B94`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 分页序号，范围1-100。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小，范围1-100。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总数。
         * @example `2`
         */
        TotalCount: number;
        /**
         * 实时技能组状态数据列表。
         */
        List: {
            /**
             * 当前话后处理中的坐席数量。
             * @example `0`
             */
            WorkingAgents: number;
            /**
             * 当前最大排队等待时长，单位秒
             * @example `0`
             */
            LongestWaitingTime: number;
            /**
             * 当前在线坐席数量。
             * @example `2`
             */
            LoggedInAgents: number;
            /**
             * 当前排队电话个数。
             * @example `0`
             */
            WaitingCalls: number;
            /**
             * 当前小休坐席数。
             * @example `0`
             */
            BreakingAgents: number;
            /**
             * 当前正在通话坐席数。
             * @example `0`
             */
            TalkingAgents: number;
            /**
             * 技能组名称。
             * @example `skillgroup`
             */
            SkillGroupName: string;
            /**
             * 技能组ID。
             * @example `skillgroup@ccc-test`
             */
            SkillGroupId: string;
            /**
             * 当前空闲坐席数。
             * @example `2`
             */
            ReadyAgents: number;
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 处于仅外呼模式且在空闲状态的坐席数量。
             * @example `0`
             */
            OutboundScenarioReadyAgents: number;
            /**
             * 总坐席数。
             * @example `12`
             */
            TotalAgents: number;
            /**
             * 小休统计数据
             */
            BreakCodeDetailList: {
                /**
                 * 小休状态代码
                 * @example `客户自定义参数，比如午餐、会议等`
                 */
                BreakCode: string;
                /**
                 * 指定小休状态发生的次数
                 * @example `1`
                 */
                Count: number;
            }[];
        }[];
    };
}
