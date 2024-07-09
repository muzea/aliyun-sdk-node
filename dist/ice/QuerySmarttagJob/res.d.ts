export interface QuerySmarttagJobResponse {
    /**
     * 任务状态，可取值：
     * - **Success**：处理成功。
     * - **Fail**：处理失败。
     * - **Processing**：处理中。
     * - **Submitted**：已提交等待处理。
     * @example `Success`
     */
    JobStatus: string;
    /**
     * 请求ID。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 通过MNS回调时透传回来的信息。消息格式请参见下文回调消息格式定义。
     * @example `{"userId":"123432412831"}`
     */
    UserData: string;
    Results: {
        /**
         * 分析结果对象数组。
         */
        Result: {
            /**
             * 分析结果的类型。
             * - [ ] - 标签1.0分析结果类型：
             * 1. TextLabel：文本标签
             * 2. VideoLabel：视频标签
             * 3. ASR：语音识别原始结果（默认不返回）
             * 4. OCR：文字识别原始结果（默认不返回）
             * 5. NLP：NLP处理结果（默认不返回）
             * - [ ] - 标签2.0分析结果类型：
             * 1. CPVLabel
             * 2. Meta：视频标题等信息（默认不返回）
             * - [ ] - 标签2.0-custom分析结果类型：
             * 1. CPVLabel
             * 2. Meta：视频标题等信息（默认不返回）
             * @example `Meta`
             */
            Type: string;
            /**
             * 分析结果的具体数据，以JSON字符串表示。不同Type的数据结构见下文Result参数说明。
             * @example `{"title":"example-title-****"}
            `
             */
            Data: string;
        }[];
    };
}
