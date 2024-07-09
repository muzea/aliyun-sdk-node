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
     * @example `7B117AF5-2A16-412C-B127-FA6175ED1AD0`
     */
    RequestId: string;
    /**
     * 通过MNS回调时透传回来的信息。消息格式请参见下文**回调消息格式定义**。
     * @example `example UserData ****`
     */
    UserData: string;
    Results: {
        /**
         * 分析结果对象数组。
         */
        Result: {
            /**
             * 分析结果的类型。
             * - 标签1.0分析结果类型：
             *     - TextLabel：文本标签
             *     - VideoLabel：视频标签
             *     - ASR：语音识别原始结果（默认不返回）
             *     - OCR：文字识别原始结果（默认不返回）
             *     - Process:  算法原始结果JSON文件链接（默认不返回），JSON结构请参见**补充说明**
             * - 标签2.0分析结果类型：
             *     - CPVLabel（人机）
             *     - Meta：视频标题等信息（默认不返回）
             * - 标签2.0-custom分析结果类型：
             *     - CPVLabel（人机）
             *     - Meta：视频标题等信息（默认不返回）
             * @example `Meta`
             */
            Type: string;
            /**
             * 分析结果的具体数据，以JSON字符串表示。不同Type的数据结构见下文**Result参数说明**。
             * @example `{"title":"example-title-****"}`
             */
            Data: string;
        }[];
    };
}
