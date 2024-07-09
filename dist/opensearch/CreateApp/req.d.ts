export interface CreateAppRequest {
    /**
     * 应用名称
     * @example `my_app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 是否dryRun创建（仅校验数据源是否合法）。取值：-true 是 -false 否
     * @example `true`
     */
    "dryRun"?: boolean;
    /**
     * 请求Body。
     */
    "body"?: any;
}
