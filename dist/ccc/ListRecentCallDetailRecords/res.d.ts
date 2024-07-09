export interface ListRecentCallDetailRecordsResponse {
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
         * 总数，只有PageNumber为1才会返回真实大小，其他都是0。
         * @example `11`
         */
        TotalCount: number;
        /**
         * 通话记录列表。
         */
        List: {
            /**
             * 通话开始时间，内呼从进入IVR开始，外呼从开始接通计算，格式为Unix字符串，单位毫秒。
             * @example `1532448000000`
             */
            StartTime: number;
            /**
             * 电话结束原因。
             * @example `Success`
             */
            ContactDisposition: string;
            /**
             * 通话类型。
             * @example `Outbound`
             */
            ContactType: string;
            /**
             * 坐席ID列表，多个值用逗号分隔。
             * @example `agent@ccc-test`
             */
            AgentIds: string;
            /**
             * 通话ID。
             * @example `job-7660472242845****`
             */
            ContactId: string;
            /**
             * 通话时长，单位秒。
             * @example `16`
             */
            CallDuration: string;
            /**
             * 主叫号码。
             * @example `0533128****`
             */
            CallingNumber: string;
            /**
             * 通话持续时间，单位秒。
             * @example `16`
             */
            Duration: number;
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 被叫号码。
             * @example `1332315****`
             */
            CalledNumber: string;
            /**
             * 参与通话的座席所属的技能组，多个技能组以逗号分隔。
             * @example `skillgroup@ccc-test`
             */
            SkillGroupIds: string;
        }[];
    };
}
