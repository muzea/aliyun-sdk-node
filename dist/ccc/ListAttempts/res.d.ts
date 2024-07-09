export interface ListAttemptsResponse {
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
     * @example `7CC6523B-0E51-1B62-8DA5-6A9831CAE315`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 总数。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 分页页码，大小取决于PageNumber和PageSize的乘积，两个参数相乘不能大于10000。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小，大小取决于PageNumber和PageSize的乘积，两个参数相乘不能大于10000。
         * @example `100`
         */
        PageSize: number;
        /**
         * 联系人拨打记录列表。
         */
        List: {
            /**
             * 呼叫ID。
             * @example `job-1704342174816****`
             */
            AttemptId: string;
            /**
             * 通话ID
             * @example `job-1704342174816****`
             */
            ContactId: string;
            /**
             * 系统生成的联系人ID，客户无需关心。
             * @example `21d194a7-60b7-4824-932b-48ed03a83704`
             */
            CaseId: string;
            /**
             * 预测式外呼活动ID。
             * @example `083046e3-5822-4cda-9b84-04f2a02eb605`
             */
            CampaignId: string;
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 技能组ID。
             * @example `skillgroup@ccc-test`
             */
            QueueId: string;
            /**
             * 主叫号码。
             * @example `05711234****`
             */
            Caller: string;
            /**
             * 被叫号码。
             * @example `1888888****`
             */
            Callee: string;
            /**
             * 坐席ID。
             * @example `agent@ccc-test`
             */
            AgentId: string;
            /**
             * 发起拨号的时间，格式为Unix时间戳，单位毫秒。
             * @example `1634196283974`
             */
            DialTime: number;
            /**
             * 拨号时长，单位秒。
             * @example `2734`
             */
            DialDuration: number;
            /**
             * 客户接通的时刻，格式为Unix时间戳，单位毫秒。
             * @example `1634196286708`
             */
            CustomerEstablishedTime: number;
            /**
             * 客户挂机时刻，格式为Unix时间戳，单位毫秒。
             * @example `1634196317888`
             */
            CustomerReleasedTime: number;
            /**
             * 转接进入IVR时刻，格式为Unix时间戳，单位毫秒。
             * @example `1634196286740`
             */
            EnterIvrTime: number;
            /**
             * IVR中时长，单位秒。
             * @example `1049`
             */
            IvrDuration: number;
            /**
             * 进入队列时刻，格式为Unix时间戳，单位毫秒。
             * @example `1634196287789`
             */
            EnqueueTime: number;
            /**
             * 排队时长，单位秒。
             * @example `80`
             */
            QueueDuration: number;
            /**
             * 分配坐席时刻，格式为Unix时间戳，单位毫秒。
             * @example `1634196287869`
             */
            AssignAgentTime: number;
            /**
             * 坐席振铃时长，单位秒。
             * @example `23`
             */
            AgentRingDuration: number;
            /**
             * 坐席接听时刻，格式为Unix时间戳，单位毫秒。
             * @example `1632883592732`
             */
            AgentEstablishedTime: number;
        }[];
    };
}
