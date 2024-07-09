export interface ListArtifactBuildTaskLogRequest {
    /**
     * 实例ID
     * @example `cri-shac42yvqzvq****`
     */
    "InstanceId": string;
    /**
     * 制品构建任务ID
     * @example `i2a-1yu****`
     */
    "BuildTaskId": string;
    /**
     * 页号
     * @example `1`
     */
    "Page": number;
    /**
     * 页大小
     * @example `100`
     */
    "PageSize": number;
}
