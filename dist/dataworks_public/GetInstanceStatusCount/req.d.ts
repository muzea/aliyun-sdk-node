export interface GetInstanceStatusCountRequest {
    /**
     * 工作空间的ID。
     * @example `1234`
     */
    "ProjectId": number;
    /**
     * 运行的环境，包括PROD和DEV。
     * @example `PROD`
     */
    "ProjectEnv": string;
    /**
     * 实例的业务日期。
     * @example `2020-01-01`
     */
    "BizDate": string;
}
