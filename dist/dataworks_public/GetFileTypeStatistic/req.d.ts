export interface GetFileTypeStatisticRequest {
    /**
     * DataWorks工作空间的ID。您可以登录DataWorks管控台，进入工作空间配置页面获取工作空间ID。
     * @example `123465`
     */
    "ProjectId": number;
    /**
     * 工作空间的环境，包括DEV（开发环境）和PROD（生产环境）。
     * @example `PROD`
     */
    "ProjectEnv": string;
}
