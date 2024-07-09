export interface DescribeSimilarEventScenariosResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `FDF7B8D9-8493-4B90-8D13-E0C1FFCE5F97`
     */
    RequestId: string;
    /**
     * 相同告警事件的处理场景列表。
     */
    Scenarios: {
        /**
         * 处理场景的Code值。取值：
         * - **default**：相同告警类型
         * - **same_file_content**：相同文件内容规则
         * - **same_ip**：相同IP规则
         * - **same_url**：相同URL规则
         * @example `same_url`
         */
        Code: string;
    }[];
}
