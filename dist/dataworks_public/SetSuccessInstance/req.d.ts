export interface SetSuccessInstanceRequest {
    /**
     * 实例的ID。
     * @example `1234`
     */
    "InstanceId": number;
    /**
     * 工作空间的环境，包括PROD和DEV。
     * @example `PROD`
     */
    "ProjectEnv": string;
}
