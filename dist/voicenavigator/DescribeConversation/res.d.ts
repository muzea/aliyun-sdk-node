export interface DescribeConversationResponse {
    /**
     * 有效问答数
     * @example `8`
     */
    EffectiveAnswerCount: number;
    /**
     * 对话id
     * @example `2d5aa451-661f-4f08-b0c4-28eec78decc4`
     */
    ConversationId: string;
    /**
     * 是否转人工
     * @example `true`
     */
    TransferredToAgent: boolean;
    /**
     * 结束时间
     * @example `1582103299434`
     */
    EndTime: number;
    /**
     * 请求id
     * @example `14C39896-AE6D-4643-9C9A-E0566B2C2DDD`
     */
    RequestId: string;
    /**
     * 开始时间
     * @example `1582103260434`
     */
    BeginTime: number;
    /**
     * 技能组id
     * @example `ABABCBAC`
     */
    SkillGroupId: string;
    /**
     * 呼入号码
     * @example `138106*****`
     */
    CallingNumber: string;
    /**
     * 客户提问数
     * @example `10`
     */
    UserUtteranceCount: number;
}
