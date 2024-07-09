export interface RunSampleFormatConfigRequest {
    /**
     * 实例id
     * @example `airec-test`
     */
    "instanceId": string;
    /**
     * 样本id
     * @example `123`
     */
    "sampleId": string;
    /**
     * 格式化模式
     * Latest：采用最新的格式化配置（默认值）
     * @example `latest`
     */
    "mode"?: string;
}
