export interface ListInstanceHistoryRequest {
    /**
     * 实例的ID。您可以调用ListInstances获取。
     * @example `1234`
     */
    "InstanceId": number;
    /**
     * 工作空间的环境，包括PROD（生产环境）和DEV（开发环境），默认获取PROD（生产环境）的实例数据。
     * @example `PROD`
     */
    "ProjectEnv"?: string;
}
