export interface UpdateSchemeTaskConfigRequest {
    /**
     * 入参JSON，具体参考请求参数补充说明。
     * @example `{"schemeTaskConfigId":368,"status":1,"name":"检测任务 2022-09-21 16:59:50"}`
     */
    "jsonStr"?: string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
