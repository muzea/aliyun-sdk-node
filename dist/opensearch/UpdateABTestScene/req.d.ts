export interface UpdateABTestSceneRequest {
    /**
     * 应用名称
     * @example `“my_app_group_name”`
     */
    "appGroupIdentity": string;
    /**
     * 场景ID
     * @example `20404`
     */
    "sceneId": number;
    /**
     * ABTest实验场景
     */
    "body"?: any;
    /**
     * 是否dryRun创建（仅校验数据源是否合法）。取值：-true 是 -false 否
     * @example `true`
     */
    "dryRun"?: boolean;
}
