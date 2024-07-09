export interface ListQueryProcessorsRequest {
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
     * 是否已设置为默认规则，默认值为0
     * - 0 表示查询所有
     * - 1 表示查询已设置为默认的规则
     * - 2 表示查询未设置为默认的规则
     * @example `0`
     */
    "isActive"?: number;
}
