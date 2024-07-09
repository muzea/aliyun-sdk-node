export interface ListNodeIORequest {
    /**
     * 节点的ID。您可参见[ListNodes](~~173979~~)查看NodeId相关信息。
     * @example `1234`
     */
    "NodeId": number;
    /**
     * 运行的环境，包括DEV（开发环境）和PROD（生产环境）。
     * @example `PROD`
     */
    "ProjectEnv": string;
    /**
     * 指定查询节点为上游节点还是下游节点。包括input和output。
     * @example `output`
     */
    "IoType": string;
}
