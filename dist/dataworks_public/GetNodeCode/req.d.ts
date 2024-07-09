export interface GetNodeCodeRequest {
    /**
     * 节点的ID。
     * @example `1234`
     */
    "NodeId": number;
    /**
     * 工作空间的环境，包括PROD和DEV。
     * @example `PROD`
     */
    "ProjectEnv": string;
}
