export interface GetMonoRecordingRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 通话ID。
     * @example `job-6538214103689****`
     */
    "ContactId": string;
    /**
     * 过期时间，单位秒。
     * @example `300`
     */
    "ExpireSeconds"?: number;
}
