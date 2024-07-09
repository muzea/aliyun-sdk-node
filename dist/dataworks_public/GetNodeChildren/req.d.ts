export interface GetNodeChildrenRequest {
    /**
     * 调度运维中心的环境标识。PROD表示生产环境，DEV表示开发环境。
     * @example `PROD`
     */
    "ProjectEnv": string;
    /**
     * 节点ID。您可以进入管控台的运维中心界面，查看节点ID。
     * @example `123456878`
     */
    "NodeId": number;
}
