export interface DsgStopSensIdentifyRequest {
    /**
     * 租户ID。您可登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入数据开发（DataStudio）页面，单击右上方当前登录用户名称，选择菜单 > 用户信息，获取租户ID。
     * @example `10241024`
     */
    "TenantId": string;
    /**
     * 数据保护伞的识别任务ID。可通过调用[DsgRunSensIdentify](~~2744039~~)接口获取。
     * @example `1000001`
     */
    "JobId": number;
}
