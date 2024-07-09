export interface ModifySecondRankRequest {
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
     * 精排表达式名称
     * @example `true`
     */
    "name": string;
    /**
     * 是否为空运行请求
     * @example `true`
     */
    "dryRun"?: boolean;
    /**
     * 请求体，精排信息
     */
    "body"?: any;
}
