export interface ListTablesRequest {
    /**
     * 实例id
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 是否为新版本控制台页面
     * @example `true`
     */
    "newMode"?: boolean;
}
