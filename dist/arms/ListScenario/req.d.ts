export interface ListScenarioRequest {
    /**
     * 地域ID。
     * @example `cn-zhangjaikou`
     */
    "RegionId"?: string;
    /**
     * 使用场景。选项：
     * - `USER-DEFINED`（默认）：用户自定义。
     * - `EDAS-ROLLOUT`：EDAS应用发布。
     * - `OAM-ROLLOUT`：OAM应用发布。
     * - `MSC-CANARY`：MSE金丝雀发布。
     * @example `USER-DEFINED`
     */
    "Scenario"?: string;
    /**
     * 业务监控名称。
     * @example `测试业务监控`
     */
    "Name": string;
    /**
     * 应用ID。
     * @example `b590lhguqs@28f515462******`
     */
    "AppId": string;
    /**
     * 场景编码，明确知道目标业务场景编码时设置。
     * @example `a9f8****`
     */
    "Sign"?: string;
}
