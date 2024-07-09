export interface CreateQualityCheckSchemeRequest {
    /**
     * 入参JSON，具体参考请求参数补充说明。
     * @example `{"dataType":1,"name":"质检方案A","type":1}`
     */
    "jsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
