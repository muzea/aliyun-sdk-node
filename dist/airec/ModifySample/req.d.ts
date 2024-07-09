export interface ModifySampleRequest {
    /**
     * 实例ID。
     * @example `airec-cn-shdjkgkeog`
     */
    "instanceId": string;
    /**
     * 样本ID。
     * @example `Sample1`
     */
    "sampleId": string;
    /**
     * 请求Body参数。
     */
    "body"?: any;
}
