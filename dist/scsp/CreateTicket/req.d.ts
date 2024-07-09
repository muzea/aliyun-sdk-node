export interface CreateTicketRequest {
    /**
     * 客户请求唯一id，用于幂等校验，可以用uuid生成
     * @example `46c1341e-2648-447a-9b11-70b6a298d94d`
     */
    "ClientToken"?: string;
    /**
     * AICCS实例ID，在智能联络中心控制台上可以看到
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 工单模板id
     * @example `546754`
     */
    "TemplateId": number;
    /**
     * 业务类目id（如果不传，取工单模板的类目）
     * @example `10000`
     */
    "CategoryId"?: number;
    /**
     * 创建者id（坐席id）
     * @example `555555`
     */
    "CreatorId": number;
    /**
     * 创建者角色（默认为4：客服），有以下枚举：
     * 1：会员
     * 4：客服
     * @example `4`
     */
    "CreatorType"?: number;
    /**
     * 创建者名称
     * @example `刘测试`
     */
    "CreatorName": string;
    /**
     * 会员id（匿名会员id：-1）
     * @example `-1`
     */
    "MemberId": number;
    /**
     * 会员名称
     * @example `匿名会员`
     */
    "MemberName"?: string;
    /**
     * 创建来源
     * @example `manual`
     */
    "FromInfo": string;
    /**
     * 工单优先级，有以下枚举：
     * 普通：4
     * 低：0
     * 中：1
     * 高：2
     * 紧急：3
     * @example `4`
     */
    "Priority"?: number;
    /**
     * 被抄送人账号id(多个抄送人用逗号分隔)
     * @example `234432`
     */
    "CarbonCopy"?: string;
    /**
     * 工单模板的表单配置，格式{"key":"value"}
     * key:表单字段编码 value:记录值
     * 例：{"questionInfo":"自动化创建工单","CFQyYAPjKb":"开胶"}
     * @example `{"questionInfo":"自动化创建工单","CFQyYAPjKb":"开胶"}`
     */
    "FormData": string;
}
