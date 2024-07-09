export interface CreateDagTestRequest {
    /**
     * 工作空间的环境，包括PROD和DEV。
     * @example `PROD`
     */
    "ProjectEnv": string;
    /**
     * 业务日期。
     * @example `2020-05-26 00:00:00`
     */
    "Bizdate": string;
    /**
     * 工作流的名称。
     * @example `xm_create_test`
     */
    "Name": string;
    /**
     * 节点的ID。
     * @example `1234`
     */
    "NodeId": number;
    /**
     * 节点的参数。
     * @example `bizdate=$bizdate tbods=$tbods`
     */
    "NodeParams"?: string;
}
