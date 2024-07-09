export interface GetRemindResponse {
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 本次调用的唯一ID。出现错误后，您可以根据该ID排查问题。
     * @example `0000-ABCD-EFGH-IJKLMNOPQ`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `The specified parameters are invalid.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `1031203110005`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 自定义监控规则的详情。
     */
    Data: {
        /**
         * 最大报警次数。
         * @example `3`
         */
        MaxAlertTimes: number;
        /**
         * 对象的类型，包括NODE（任务节点）、BASELINE（基线）、PROJECT（工作空间）和BIZPROCESS（业务流程）。
         * @example `NODE`
         */
        RemindUnit: string;
        /**
         * 最小报警间隔，单位为秒。
         * @example `1800`
         */
        AlertInterval: number;
        /**
         * 自定义监控规则是否开启，包括true（开启）和false（关闭）。
         * @example `true`
         */
        Useflag: boolean;
        /**
         * 自定义监控规则创建人的阿里云UID。
         * @example `9527951795****`
         */
        Founder: string;
        /**
         * 自定义监控规则的ID。
         * @example `1234`
         */
        RemindId: number;
        /**
         * 免打扰截止时间，格式为hh:mm。hh的取值范围为\[0,23\]，mm的取值范围为\[0,59\]。
         * @example `08:00`
         */
        DndEnd: string;
        /**
         * 触发条件，包括FINISHED（完成）、UNFINISHED（未完成）、ERROR（出错）、CYCLE_UNFINISHED（周期未完成）和TIMEOUT（运行超时）。
         * @example `FINISHED`
         */
        RemindType: string;
        /**
         * 报警接收对象的粒度，包括OWNER（任务责任人）和OTHER（指定的人）。
         * @example `OWNER`
         */
        AlertUnit: string;
        /**
         * 免打扰起始时间，格式为hh:mm。hh的取值范围为\[0,23\]，mm的取值范围为\[0,59\]。
         * @example `00:00`
         */
        DndStart: string;
        /**
         * 规则的名称。
         * @example `规则名称`
         */
        RemindName: string;
        /**
         * - 当RemindType（触发条件）为FINISHED（完成）时，返回空。
         * - 当RemindType（触发条件）为UNFINISHED（未完成）时，返回格式为{"hour":23,"minu":59}。hour的取值范围为\[0,47\]，minu的取值范围为\[0,59\]。
         * - 当RemindType（触发条件）为ERROR（出错）时，返回空。
         * - 当RemindType（触发条件）为CYCLE_UNFINISHED（周期未完成）时，返回格式为{"1":"05:50","2":"06:50","3":"07:50","4":"08:50","5":"09:50","6":"10:50","7":"11:50","8":"12:50","9":"13:50","10":"14:50","11":"15:50","12":"16:50","13":"17:50","14":"18:50","15":"19:50","16":"20:50","17":"21:50","18":"22:50","19":"23:50","20":"24:50","21":"25:50"}。JSON字符串key为周期号，取值范围为\[1,288\]。value为该周期对应的未完成时间，格式为hh:mm。hh的取值范围为\[0,47\]，mm的取值范围为\[0,59\]。
         * - 当RemindType（触发条件）为TIMEOUT（运行超时）时，返回格式为1800，单位为秒。即从开始运行起，运行超过30分钟触发报警。
         * @example `{"hour":23,"minu":59}`
         */
        Detail: string;
        /**
         * 钉钉群机器人的webhook地址列表。
         */
        Robots: {
            /**
             * 钉钉群机器人的webhook地址。
             * @example `https://oapi.dingtalk.com/robot/send?access_token=******************************`
             */
            WebUrl: string;
            /**
             * 是否@所有人，包括true（是）和false（否）。
             * @example `true`
             */
            AtAll: boolean;
        }[];
        /**
         * 当RemindUnit（对象类型）为NODE（任务节点）时，该规则监控的节点列表。
         */
        Nodes: {
            /**
             * 节点责任人的阿里云UID。
             * @example `9527951795****`
             */
            Owner: string;
            /**
             * 节点的名称。
             * @example `节点名称`
             */
            NodeName: string;
            /**
             * 节点的ID。
             * @example `1234`
             */
            NodeId: number;
            /**
             * 节点所在工作空间的ID。
             * @example `1234`
             */
            ProjectId: number;
        }[];
        /**
         * 当RemindUnit（对象类型）为BASELINE（基线）时，该规则监控的基线列表。
         */
        Baselines: {
            /**
             * 基线的名称。
             * @example `基线名称`
             */
            BaselineName: string;
            /**
             * 基线的ID。
             * @example `1234`
             */
            BaselineId: number;
        }[];
        /**
         * 当RemindUnit（对象类型）为PROJECT（工作空间）时，该规则监控的工作空间列表。
         */
        Projects: {
            /**
             * 工作空间的ID。
             * @example `1234`
             */
            ProjectId: number;
        }[];
        /**
         * 当RemindUnit（对象类型）为BIZPROCESS（业务流程）时，该规则监控的业务流程列表。
         */
        BizProcesses: {
            /**
             * 业务流程名称。
             * @example `业务流程名称`
             */
            BizProcessName: string;
            /**
             * 业务流程ID。
             * @example `9527`
             */
            BizId: number;
        }[];
        /**
         * 报警接收人说明。
         */
        AlertTargets: string[];
        /**
         * 报警方式。
         */
        AlertMethods: string[];
        /**
         * WebHook信息。
         */
        Webhooks: string[];
    };
}
