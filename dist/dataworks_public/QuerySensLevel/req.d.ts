export interface QuerySensLevelRequest {
    /**
     * 数据保护伞定义的模板ID。可通过调用[QueryDefaultTemplate](~~2743948~~)接口获取。
     * @example `e1970541-6cf5-4d23-b101-d5b66f6e10af`
     */
    "TemplateId": string;
    /**
     * 租户ID。您可登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入数据开发（DataStudio）页面，单击右上方当前登录用户名称，选择菜单 > 用户信息，获取租户ID。
     * @example `10241024`
     */
    "tenantId": string;
}
