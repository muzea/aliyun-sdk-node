export interface InflightTaskTimeoutRequest {
    /**
     * 实例id
     * @example `2d350e38-f561-49b0-85d3-b90d9fc7e052`
     */
    "InstanceId": string;
    /**
     * 任务id
     * @example `6bc0585c-0a8a-46d8-b042-23570bbb4855`
     */
    "TaskId": string;
    /**
     * 实例所属的阿里云账号id
     * @example `1864632921948620`
     */
    "InstanceOwnerId"?: number;
}
