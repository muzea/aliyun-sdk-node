export interface AttachIndexVersionRequest {
    /**
     * 实例ID。
     * @example `airec-test`
     */
    "instanceId": string;
    /**
     * 召回配置ID。
     * @example `123`
     */
    "algorithmId": string;
    /**
     * 索引版本ID。
     * @example `v1`
     */
    "versionId": string;
}
