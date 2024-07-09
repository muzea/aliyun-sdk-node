export interface DescribeQueryProcessorRequest {
    /**
     * 应用名称
     * @example `my_app_group_name`
     */
    "appGroupIdentity": string;
    /**
     * 版本号
     * @example `110157886`
     */
    "appId": number;
    /**
     * 规则名称
     * @example `test`
     */
    "name": string;
}
