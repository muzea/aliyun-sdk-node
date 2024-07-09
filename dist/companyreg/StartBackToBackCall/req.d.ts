export interface StartBackToBackCallRequest {
    /**
     * 业务类型
     * @example `test`
     */
    "BizType": string;
    /**
     * 技能类型
     * @example `1`
     */
    "SkillType": number;
    /**
     * 业务关联id
     * @example `20211203180209000001`
     */
    "BizId": string;
    /**
     * 主叫号码，传客服手机号或座机号
     * @example `13162828888`
     */
    "Caller": string;
    /**
     * 外呼号码
     * @example `02131584184`
     */
    "CallCenterNumber"?: string;
    /**
     * 被叫号码key（如果为空，默认呼叫工单主客户号码，如果不空则根据被叫号码key查找相应的被叫号码进行外呼），该字段适合一个工单有多个被叫号码的场景
     * @example `mobile1`
     */
    "MobileKey"?: string;
}
