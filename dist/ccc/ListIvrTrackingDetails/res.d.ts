export interface ListIvrTrackingDetailsResponse {
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
     * @example `D2RB671A-3E24-4A04-81E6-6C4F5B39DF75`
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
         * @example `3`
         */
        TotalCount: number;
        /**
         * IVR轨迹详情列表。
         */
        List: {
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            Instance: string;
            /**
             * 被叫号码。
             * @example `0533128****`
             */
            Callee: string;
            /**
             * 进入该IVR节点的时间，格式为Unix时间戳，单位毫秒。
             * @example `1621910542876`
             */
            EnterTime: number;
            /**
             * 节点变量。
             * @example `{"digits":"2"}`
             */
            NodeVariables: any;
            /**
             * 节点的状态码。
             * @example `Success`
             */
            NodeExitCode: string;
            /**
             * 联系流名称。
             * @example `测试IVR`
             */
            FlowName: string;
            /**
             * 联系流ID。
             * @example `abc99462-1058-47d0-a114-f145ea7444ff`
             */
            FlowId: string;
            /**
             * 节点的属性集合。
             * @example `{"say":"您好。"}`
             */
            NodeProperties: any;
            /**
             * 节点类型。
             * @example `PLAY_SAY`
             */
            NodeType: string;
            /**
             * 主叫号码。
             * @example `1332315****`
             */
            Caller: string;
            /**
             * 节点名称。
             * @example `放音`
             */
            NodeName: string;
            /**
             * 通话ID。
             * @example `job-10963442671187****`
             */
            ContactId: string;
            /**
             * 离开该IVR节点的时间。
             * @example `1621910545105`
             */
            LeaveTime: number;
            /**
             * 随路数据。
             * @example `A=B;C=D`
             */
            ChannelVariables: string;
            /**
             * 话务通道ID。
             * @example `65cp2c15-92ac-4e67-98b2-073a3c541c5d`
             */
            ChannelId: string;
            /**
             * 节点ID。
             * @example `e0bc19a3`
             */
            NodeId: string;
        }[];
    };
}
