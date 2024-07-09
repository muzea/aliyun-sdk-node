export interface DeleteRecognizeRuleRequest {
    /**
     * 敏感字段ID。可通过调用[QuerySensNodeInfo](~~2747189~~)接口获取。
     * @example `27f5f5e2-ec60-4567-b1e4-779ac3681024`
     */
    "SensitiveId": string;
    /**
     * 租户ID。您可登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入数据开发（DataStudio）页面，单击右上方当前登录用户名称，选择菜单 > 用户信息，获取租户ID。
     * @example `10241024`
     */
    "TenantId": string;
}
