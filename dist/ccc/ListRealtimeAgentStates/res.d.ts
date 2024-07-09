export interface ListRealtimeAgentStatesResponse {
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
     * @example `EEEE671A-3E24-4A04-81E6-6C4F5B39DF75`
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
         * @example `1`
         */
        TotalCount: number;
        /**
         * 实时坐席状态数据列表。
         */
        List: {
            /**
             * 坐席分机号。
             * @example `80317391`
             */
            Extension: string;
            /**
             * 子状态，部分场景下，仅用State字段无法完整表示坐席状态，因此需要子状态辅助，比如监听状态下，State=Talking，StateCode=Monitoring。
             * @example `Monitored`
             */
            StateCode: string;
            /**
             * 坐席状态。
             * @example `ACW`
             */
            State: string;
            /**
             * 坐席ID。
             * @example `agent1@ccc-test`
             */
            AgentId: string;
            /**
             * 状态开始的时间。
             * @example `1696670640774`
             */
            StateTime: number;
            /**
             * 坐席姓名。
             * @example `坐席小王`
             */
            AgentName: string;
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 用于一些特定的三方场景，主要是监听，辅导，咨询，在三方场景时表示第三方，比如在监听或辅导场景，用于表示被监听或被辅导的坐席，在咨询场景下，表示被转接的坐席或外呼号码。
             * @example `agent@ccc-test`
             */
            CounterParty: string;
            /**
             * 坐席签入的技能组ID列表。
             */
            SkillGroupIdList: string[];
            /**
             * 坐席签入的技能组名称列表。
             */
            SkillGroupNameList: string[];
            /**
             * 工作模式。
             * @example `ON_SITE`
             */
            WorkMode: string;
            /**
             * 坐席是否处于仅外呼模式。
             * @example `false`
             */
            OutboundScenario: boolean;
            /**
             * 坐席的个人电话号码。
             * @example `1382114****`
             */
            Mobile: string;
            /**
             * 通话类型。
             * @example `Outbound`
             */
            CallType: string;
            /**
             * 当前状态的持续时长，单位秒。
             * @example `16`
             */
            Duration: number;
        }[];
    };
}
