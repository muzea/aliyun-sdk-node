export interface CreateSearchStrategyRequest {
    /**
     * 应用名称
     * @example `"my_app"`
     */
    "appGroupIdentity": string;
    /**
     * 版本号
     * @example `1234`
     */
    "appId": string;
    /**
     * 查询策略
     */
    "body"?: any;
}
