export interface RemoveSearchStrategyRequest {
    /**
     * 应用名称
     * @example `my_app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 版本号
     * @example `110157886`
     */
    "appId": string;
    /**
     * 策略名称
     * @example `default`
     */
    "strategyName": string;
}
