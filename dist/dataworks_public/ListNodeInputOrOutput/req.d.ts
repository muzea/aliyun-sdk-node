export interface ListNodeInputOrOutputRequest {
    /**
     * 节点的ID。您可以调用[ListNodes](~~173979~~)接口查看NodeId的相关信息。
     * @example `12314567`
     */
    "NodeId": number;
    /**
     * 运行的环境，包括DEV（开发环境）和PROD（生产环境）。
     * @example `PROD`
     */
    "ProjectEnv": string;
    /**
     * 用于指定查询节点为上游节点还是下游节点。取值如下：
     * - input，上游节点。
     * - output，下游节点。
     * @example `output`
     */
    "IoType": string;
}
