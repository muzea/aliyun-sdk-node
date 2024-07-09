export interface SearchTicketListResponse {
    /**
     * 每页的数量
     * @example `20`
     */
    OnePageSize: number;
    /**
     * 请求ID，用于跟踪错误原因
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 错误描述
     * @example `xxxx`
     */
    Message: string;
    /**
     * 总页数
     * @example `3`
     */
    TotalPage: number;
    /**
     * 总共记录数
     * @example `45`
     */
    TotalResults: number;
    /**
     * 当前页
     * @example `1`
     */
    PageNo: number;
    /**
     * 工单信息
     */
    Data: {
        /**
         * 会员名称
         * @example `匿名会员`
         */
        MemberName: string;
        /**
         * 抄送人
         * @example `234432`
         */
        CarbonCopy: string;
        /**
         * 工单创建时间
         * @example `1614824872`
         */
        CreateTime: number;
        /**
         * 服务id（工单操作人id）
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
         * 工单状态，有以下枚举：未处理，处理中，已结束，挂起，取消，待分配
         * @example `处理中`
         */
        TaskStatus: string;
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
         * 创建者角色，有以下枚举： 系统：0 会员：1 客服：4
         * @example `4`
         */
        CreatorType: number;
        /**
         * 会员id
         * @example `1876543`
         */
        MemberId: number;
        /**
         * 工单状态
         * @example `6`
         */
        CaseStatus: number;
        /**
         * 工单模板id
         * @example `546754`
         */
        TemplateId: number;
    }[];
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
}
