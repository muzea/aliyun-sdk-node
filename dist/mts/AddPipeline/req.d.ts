export interface AddPipelineRequest {
    /**
     * 管道名称，最大长度128字节。
     * @example `test-pipeline`
     */
    "Name": string;
    /**
     * 管道类型。
     * 取值：
     * - **Boost**：倍速转码
     * - **Standard**：普通管道
     * - **NarrowBandHDV2**：窄带高清2.0
     * - **AIVideoCover**：智能截图
     * -  **AIVideoTag**：视频标签（支持区域上海、北京、杭州）
     * 默认值：**Standard**。
     * @example `Standard`
     */
    "Speed"?: string;
    /**
     * 管道级别，取值范围：**\[1,3\]**。
     * @example `1`
     */
    "SpeedLevel"?: number;
    /**
     * MNS通知配置。
     * @example `{"Topic":"mts-topic-1"}`
     */
    "NotifyConfig"?: string;
    /**
     * 角色。
     * @example `AliyunMTSDefaultRole`
     */
    "Role"?: string;
}
