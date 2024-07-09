export interface CreateCheckTypeToSchemeRequest {
    /**
     * 入参JSON，具体参考请求参数补充说明。
     * @example `{"schemeId":"187","checkName":"质检维度名","sourceScore":20}`
     */
    "jsonStr"?: string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
