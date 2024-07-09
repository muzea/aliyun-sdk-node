export interface QueryTouchListRequest {
    /**
     * AICCS实例ID。
     * 您可以在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)左侧导航栏的**实例管理**中获取。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 要精确查询的接触ID列表。
     */
    "TouchId"?: number[];
    /**
     * 要精确查询的会话ID列表。
     */
    "ChannelId"?: string[];
    /**
     * 渠道类型。
     */
    "ChannelType"?: number[];
    /**
     * 接触类型。
     */
    "TouchType"?: number[];
    /**
     * 要查询的会员ID列表。
     */
    "MemberId"?: number[];
    /**
     * 要查询的会员名称列表。
     */
    "MemberName"?: string[];
    /**
     * 要查询的客服ID列表。
     */
    "ServicerId"?: number[];
    /**
     * 要查询的客服名称列表。
     */
    "ServicerName"?: string[];
    /**
     * 进线技能组ID列表。
     */
    "QueueId"?: number[];
    /**
     * 评价状态。
     */
    "EvaluationStatus"?: number[];
    /**
     * 满意度等级。
     */
    "EvaluationLevel"?: number[];
    /**
     * 满意度评分。
     */
    "EvaluationScore"?: number[];
    /**
     * 会话开始的时间范围左区间。时间戳格式（单位：毫秒）。
     * @example `1614596400000`
     */
    "FirstTimeStart"?: number;
    /**
     * 会话开始的时间范围右区间。时间戳格式（单位：毫秒）。
     * @example `1614599400000`
     */
    "FirstTimeEnd"?: number;
    /**
     * 会话结束的时间范围左区间。时间戳格式（单位：毫秒）。
     * @example `1614600400000`
     */
    "CloseTimeStart"?: number;
    /**
     * 会话结束的时间范围右区间。时间戳格式（单位：毫秒）。
     * @example `1614600500000`
     */
    "CloseTimeEnd"?: number;
    /**
     * 每页大小。取值大于**0**，默认值：**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 当前页。取值大于**0**，默认值：**1**。
     * @example `1`
     */
    "CurrentPage"?: number;
}
