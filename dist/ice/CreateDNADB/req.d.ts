export interface CreateDNADBRequest {
    /**
     * DNA库名称。
     * @example `example name`
     */
    "Name": string;
    /**
     * DNA库模型。包含：
     * - **Video**：视频
     * - **Audio**：音频
     * - **Image**：图片
     * - **Text**：文本【仅上海区域支持】
     * @example `Video`
     */
    "Model"?: string;
    /**
     * DNA库描述。
     * @example `这是一个视频DNA库。`
     */
    "Description"?: string;
}
