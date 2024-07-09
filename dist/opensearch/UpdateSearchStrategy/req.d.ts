export interface UpdateSearchStrategyRequest {
    /**
     * 应用名称
     * @example `group_name`
     */
    "appGroupIdentity": string;
    /**
     * 版本号
     * @example `"110157886"`
     */
    "appId": string;
    /**
     * 策略名称
     * @example `default`
     */
    "strategyName": string;
    /**
     * 查询策略，参考[SearchStrategy](~~2400242~~)
     */
    "body"?: any;
}
