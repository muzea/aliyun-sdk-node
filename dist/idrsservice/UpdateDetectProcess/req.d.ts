export interface UpdateDetectProcessRequest {
    /**
     * ID
     * @example `0f1c45cd-3eee-4e60-b505-2e330b8755d3`
     */
    "Id": string;
    /**
     * 检测流程名称
     * @example `Android检测流程`
     */
    "Name": string;
    /**
     * 流程配置草稿内容
     * @example `{}`
     */
    "Draft"?: string;
    /**
     * 流程配置正式内容
     * @example `{}`
     */
    "Content"?: string;
}
