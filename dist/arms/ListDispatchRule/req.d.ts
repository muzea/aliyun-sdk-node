export interface ListDispatchRuleRequest {
    /**
     * 通知策略的名称， 支持模糊匹配。
     * @example `Prod`
     */
    "Name"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * - `false`（默认）：通知策略为内部系统创建。
     * - `true`：通知策略为外部系统创建。
     * > 外部系统创建的通知策略不支持在ARMS控制台修改通知策略的分派条件。
     * @example `true`
     */
    "System"?: boolean;
}
