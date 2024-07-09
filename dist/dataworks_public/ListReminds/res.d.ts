export interface ListRemindsResponse {
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 本次调用的唯一ID。出现错误后，您可以根据该ID排查问题。
     * @example `0000-ABCD-EFG****`
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
     * 返回的自定义监控规则列表。
     */
    Data: {
        /**
         * 当前的页数。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页的大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 自定义监控规则的总数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 自定义监控规则列表。
         */
        Reminds: {
            /**
             * 规则创建人的阿里云UID。
             * @example `952795****`
             */
            Founder: string;
            /**
             * 自定义监控规则的ID。
             * @example `1234`
             */
            RemindId: number;
            /**
             * 报警接收对象的粒度，包括OWNER（任务责任人）和OTHER（指定的人）。
             * @example `OWNER`
             */
            AlertUnit: string;
            /**
             * 触发条件，包括FINISHED（完成）、UNFINISHED（未完成）、ERROR（出错）、CYCLE_UNFINISHED（周期未完成）和TIMEOUT（运行超时）。
             * @example `FINISHED`
             */
            RemindType: string;
            /**
             * 免打扰截止时间，格式为hh:mm。hh的取值范围为\[0,23\]，mm的取值范围为\[0,59\]。
             * @example `08:00`
             */
            DndEnd: string;
            /**
             * 免打扰起始时间，格式为hh:mm。hh的取值范围为\[0,23\]，mm的取值范围为\[0,59\]。
             * @example `00:00`
             */
            DndStart: string;
            /**
             * 对象的类型，包括NODE（任务节点）、BASELINE（基线）、PROJECT（工作空间）和BIZPROCESS（业务流程）。
             * @example `NODE`
             */
            RemindUnit: string;
            /**
             * 规则是否开启，包括true（开启）和false（关闭）。
             * @example `true`
             */
            Useflag: boolean;
            /**
             * 自定义监控规则的名称。
             * @example `规则名称`
             */
            RemindName: string;
            /**
             * 报警接收人的阿里云UID列表。
             */
            AlertTargets: string[];
            /**
             * 当RemindUnit（对象类型）为NODE（任务节点）时，监控的节点ID列表。
             */
            NodeIds: number[];
            /**
             * 当RemindUnit（对象类型）为BIZPROCESS（业务流程）时，监控的基线ID列表。
             */
            BizProcessIds: number[];
            /**
             * 当RemindUnit（对象类型）为PROJECT（工作空间）时，监控的节点ID列表。
             */
            ProjectIds: number[];
            /**
             * 当RemindUnit（对象类型）为BASELINE（基线）时，监控的基线ID列表。
             */
            BaselineIds: number[];
            /**
             * 报警的方式，包括MAIL（邮件）、SMS（短信）和PHONE（电话，仅DataWorks专业版及以上版本支持）。
             */
            AlertMethods: string[];
        }[];
    };
}
