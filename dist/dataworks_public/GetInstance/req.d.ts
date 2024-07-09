export interface GetInstanceRequest {
    /**
     * 实例的ID。您可以调用[ListInstances](~~173982~~)获取。
     * @example `1234`
     */
    "InstanceId": number;
    /**
     * 工作空间的环境，包括PROD（生产环境）和DEV（开发环境）。
     * @example `PROD`
     */
    "ProjectEnv": string;
}
