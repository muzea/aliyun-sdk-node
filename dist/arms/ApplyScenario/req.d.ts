export interface ApplyScenarioRequest {
    /**
     * 地域ID。
     * @example `cn-zhangjiakou`
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
     * @example `测试POP业务监控`
     */
    "Name": string;
    /**
     * 应用ID。
     * @example `b590lhguqs@28f515462f******`
     */
    "AppId": string;
    /**
     * 场景编码。新建业务监控时无需设置，更新业务监控时必须设置。
     * @example `a9f8****`
     */
    "Sign"?: string;
    /**
     * 业务监控配置JSON字段。关于此字段的详细说明参见下文关于参数**Config**的补充说明。
     * @example `{"rpcType":"0","nameMatchType":"EQUALS","service":"/api/pop/test","operator":"and","filterItems":[{"type":"HttpHeaders","key":"uid","opt":"==","value":"123456789"}],"group":{"type":"HttpRequestParameters","key":"name"}}`
     */
    "Config": any;
    /**
     * 染色标是否向下透传。
     * - `true`
     * - `false`（默认）
     * @example `false`
     */
    "SnTransfer"?: boolean;
    /**
     * 染色标是否统计流量。
     * - `true`
     * - `false`（默认）
     * @example `false`
     */
    "SnStat"?: boolean;
    /**
     * 染色标的链路是否Dump业务参数。
     * - `true`
     * - `false`（默认）
     * @example `false`
     */
    "SnDump"?: boolean;
    /**
     * 染色标的链路是否全量采集。
     * - `true`
     * - `false`（默认）
     * @example `false`
     */
    "SnForce"?: boolean;
    /**
     * 是否更新操作。
     * - `true`：更新操作。
     * - `false`：插入操作。
     * @example `false`
     */
    "UpdateOption": boolean;
}
