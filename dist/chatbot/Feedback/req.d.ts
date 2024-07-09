export interface FeedbackRequest {
    /**
     * 会话窗单次会话标识
     * @example `5ca40988-4f99-47ad-ac96-9060d0f81db9`
     */
    "MessageId"?: string;
    /**
     * 点赞或点踩
     * 枚举值：
     * good（点赞）
     * bad（点踩）
     * @example `good`
     */
    "Feedback"?: string;
    /**
     * 会话Session标识，标识：IM唯一标识会话
     * @example `7c3cec23cc8940bc9db4a318c8f4f0aa`
     */
    "SessionId"?: string;
    /**
     * 点赞、点踩的内容
     * @example `这个回答很棒`
     */
    "FeedbackContent"?: string;
    /**
     * 机器人唯一标识
     * @example `chatbot-cn-mp90s2lrk00050`
     */
    "InstanceId"?: string;
    /**
     * 业务空间key，不设置则访问默认业务空间，key值在主账号业务管理页面获取
     * @example `ac627989eb4f8a98ed05fd098bbae5_p_beebot_public`
     */
    "AgentKey"?: string;
}
