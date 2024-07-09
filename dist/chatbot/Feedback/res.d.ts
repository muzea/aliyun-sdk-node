export interface FeedbackResponse {
    /**
     * 请求Id
     * @example `4e5eea71-f326-450c-8849-49515473ef64`
     */
    RequestId: string;
    /**
     * 点赞或点踩
     * 枚举值：
     * good（点赞）
     * bad（点踩）
     * @example `good`
     */
    Feedback: string;
    /**
     * 会话窗单次会话标识
     * @example `5ca40988-4f99-47ad-ac96-9060d0f81db9`
     */
    MessageId: string;
}
