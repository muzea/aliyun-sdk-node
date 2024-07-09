export interface CreateAnnotationMissionRequest {
    /**
     * 1：外呼
     * @example `1`
     */
    "AnnotationMissionDataSourceType"?: number;
    /**
     * 外呼场景ID
     * @example `6236f21e-2e04-4dad-a47b-ae77e6a48325`
     */
    "ScriptId"?: string;
    /**
     * 实例ID
     * @example `bf3b51a5-e88a-4636-98b0-1a34725a085b`
     */
    "InstanceId"?: string;
    /**
     * 业务是否结束。
     * @example `True`
     */
    "Finished"?: boolean;
    /**
     * 通话结果状态过滤条件
     */
    "SessionEndReasonFilterList"?: number[];
    /**
     * 通话结果状态过滤条件
     * @example `[1]`
     */
    "SessionEndReasonFilterListJsonString"?: string;
    /**
     * 是否排除其他任务已标注的通话记录
     * @example `true`
     */
    "ExcludeOtherSession"?: boolean;
    /**
     * 通话时间过滤开始时间
     * @example `1683302400000`
     */
    "ConversationTimeStartFilter"?: number;
    /**
     * 通话时间过滤结束时间
     * @example `1682956800000`
     */
    "ConversationTimeEndFilter"?: number;
    /**
     * 抽样类型
     * @example `1`
     */
    "SamplingType"?: number;
    /**
     * 抽样比例
     * @example `1`
     */
    "SamplingRate"?: number;
    /**
     * 抽样数量自定义量
     * @example `1`
     */
    "SamplingCount"?: number;
    /**
     * 标注任务名称
     * @example `询问卖车-标注任务-20230506-112934`
     */
    "AnnotationMissionName"?: string;
    /**
     * 业务数据列表
     */
    "AnnotationMissionDebugDataSourceList"?: number[];
    /**
     * 调试数据JSON
     * @example `[1]`
     */
    "AnnotationMissionDebugDataSourceListJsonString"?: string;
    /**
     * 机器人id
     * @example `chatbot-cn-fqEnFZBYnb`
     */
    "ChatbotId"?: string;
    /**
     * 坐席ID
     * @example `1168702`
     */
    "AgentId"?: string;
    /**
     * 业务空间key,不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `9137ab9c27044921860030adf8590ec4_p_outbound_public`
     */
    "AgentKey"?: string;
}
