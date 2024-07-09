export interface GetNodeRequest {
    /**
     * 节点的ID。您可以调用[ListNodes](~~173979~~)接口查看NodeId的相关信息。
     * @example `1234`
     */
    "NodeId": number;
    /**
     * 工作空间的环境，包括PROD和DEV。
     * @example `PROD`
     */
    "ProjectEnv": string;
}
