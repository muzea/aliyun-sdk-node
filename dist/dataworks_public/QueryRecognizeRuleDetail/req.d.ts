export interface QueryRecognizeRuleDetailRequest {
    /**
     * 敏感字段名称。可调用[QuerySensNodeInfo](~~2747189~~)接口，或进入[DataWorks控制台](https://workbench.data.aliyun.com/console)，在数据保护伞的分类分级界面获取敏感字段名称。
     * @example `姓名`
     */
    "SensitiveName": string;
    /**
     * 租户ID。您可登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入数据开发（DataStudio）页面，单击右上方当前登录用户名称，选择菜单 > 用户信息，获取租户ID。
     * @example `10241024`
     */
    "TenantId": string;
}
