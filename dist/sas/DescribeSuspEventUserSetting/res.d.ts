export interface DescribeSuspEventUserSettingResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `028CF634-5268-5660-9575-48C9ED6XXXXX`
     */
    RequestId: string;
    /**
     * 告警通知的告警级别。取值：
     * - **remind**：提醒
     * - **suspicious**：可疑
     * - **serious**：紧急
     */
    LevelsOn: string[];
}
