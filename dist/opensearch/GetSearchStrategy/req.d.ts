export interface GetSearchStrategyRequest {
    /**
     * 应用分组ID。
     * @example `my_app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 应用版本
     * @example `110157886`
     */
    "appId": string;
    /**
     * 策略名称
     * @example `default`
     */
    "strategyName": string;
}
