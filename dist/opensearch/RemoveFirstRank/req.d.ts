export interface RemoveFirstRankRequest {
    /**
     * 应用名称
     * @example `“my_app_group_name”`
     */
    "appGroupIdentity": string;
    /**
     * 版本号
     * @example `110157886`
     */
    "appId": number;
    /**
     * 粗排表达式名称
     * @example `“test”`
     */
    "name": string;
}
