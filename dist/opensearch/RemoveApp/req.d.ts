export interface RemoveAppRequest {
    /**
     * 应用的名称或者是应用id
     * @example `“my_app_group_name”`
     */
    "appGroupIdentity": string;
    /**
     * 版本ID
     * @example `110116134`
     */
    "appId": number;
}
