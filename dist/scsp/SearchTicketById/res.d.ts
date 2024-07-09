export interface SearchTicketByIdResponse {
    /**
     * 错误描述
     * @example `xxxx`
     */
    Message: string;
    /**
     * 请求ID，用于跟踪错误原因
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 工单详情
     */
    Data: {
        /**
         * 抄送人
         * @example `234432`
         */
        CarbonCopy: string;
        /**
         * 会员名称
         * @example `匿名会员`
         */
        MemberName: string;
        /**
         * 工单创建时间
         * @example `1614824872`
         */
        CreateTime: number;
        /**
         * 客服id/坐席id（工单操作人id）
         * @example `555555`
         */
        ServiceId: number;
        /**
         * 工单id
         * @example `2500000010`
         */
        TicketId: number;
        /**
         * 工单优先级
         * @example `1`
         */
        Priority: number;
        /**
         * 创建者id
         * @example `555555`
         */
        CreatorId: number;
        /**
         * 工单业务信息（工单模板表单信息）
         * @example `{"questionInfo":"自动化创建工单"}`
         */
        FormData: string;
        /**
         * 工单活动业务信息（工单活动表单信息）
         */
        Activities: {
            /**
             * 工单活动表单信息编码
             * @example `{\"BQ73dGsSNs\":\"备注\"}`
             */
            ActivityFormData: string;
            /**
             * 活动编码
             * @example `finish`
             */
            ActivityCode: string;
        }[];
        /**
         * 动作记录
         */
        ActivityRecords: {
            /**
             * 动作记录活动编码
             * @example `997015`
             */
            ActionCode: string;
            /**
             * 动作记录活动编码名称
             * @example `创建工单`
             */
            ActionCodeDesc: string;
            /**
             * 工单操作人名称
             * @example `刘测试`
             */
            OperatorName: string;
            Operator: string;
            /**
             * 动作备注
             * @example `{"CFQyYAPjKb":"开胶"}`
             */
            Memo: string;
            /**
             * 操作时间
             * @example `1614824772`
             */
            GmtCreate: number;
        }[];
        /**
         * 创建来源
         * @example `hotline`
         */
        FromInfo: string;
        /**
         * 工单处理时间
         * @example `1614824872`
         */
        ModifiedTime: number;
        /**
         * 创建者名称
         * @example `刘测试`
         */
        CreatorName: string;
        /**
         * 业务类目id
         * @example `10000`
         */
        CategoryId: number;
        /**
         * 创建者角色，有以下枚举：
         * 系统：0
         * 会员：1
         * 客服：4
         * @example `4`
         */
        CreatorType: number;
        /**
         * 会员id
         * @example `1876543`
         */
        MemberId: number;
        /**
         * 工单状态（工单状态数值）
         * @example `6`
         */
        CaseStatus: number;
        /**
         * 工单模板id
         * @example `546754`
         */
        TemplateId: number;
        /**
         * 工单名称
         * @example `自动化工单`
         */
        TicketName: string;
        ParentCaseId: number;
    };
    /**
     * 错误编码
     * @example `Success`
     */
    Code: string;
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
    HttpStatusCode: number;
}
