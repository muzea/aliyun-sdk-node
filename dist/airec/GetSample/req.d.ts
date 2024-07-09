export interface GetSampleRequest {
    /**
     * 实例ID。
     * @example `airec-cn-shdjkgkeog`
     */
    "instanceId": string;
    /**
     * 样本ID。
     */
    "sampleId": string;
    /**
     * 是否携带扩展参数
     * - **true**：有扩展参数
     * - **false**：没有扩展参数
     * @example `false`
     */
    "withExtendParmas"?: boolean;
}
