export interface DeleteScenarioRequest {
    /**
     * 业务监控ID，可通过ListScenario接口获取。
     * @example `132`
     */
    "ScenarioId": number;
    /**
     * 地域ID。
     * @example `cn-zhangjaikou`
     */
    "RegionId"?: string;
}
