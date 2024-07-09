export interface ListProgramTypeCountRequest {
    /**
     * 工作空间的ID。
     * @example `1234`
     */
    "ProjectId": number;
    /**
     * 工作空间的环境，包括PROD和DEV。
     * @example `PROD`
     */
    "ProjectEnv": string;
}
