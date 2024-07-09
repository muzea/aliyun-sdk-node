export interface QuerySensNodeInfoRequest {
    /**
     * 分类分级模板ID。可通过调用[QueryDefaultTemplate](~~2743948~~)接口获取。
     * @example `e1970541-6cf5-4d23-b101-d5b66f6e1024`
     */
    "TemplateId": string;
    /**
     * 租户ID。您可登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入数据开发（DataStudio）页面，单击右上方当前登录用户名称，选择菜单 > 用户信息，获取租户ID。
     * @example `10241024`
     */
    "TenantId": string;
    /**
     * 分类分级节点ID。可通过调用[QuerySensClassification](~~2746850~~)接口获取，或登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入数据保护伞界面直接获取。
     * @example `0ce67949-0810-400f-a24a-cc5ffafe1024`
     */
    "NodeId"?: string;
    /**
     * 敏感字段名称。您可登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入数据保护伞界面直接获取。
     * @example `身份证`
     */
    "SensitiveName"?: string;
    /**
     * 分页查询页码数。取值：从1开始。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页查询每页显示的条数。取值：10~1000，建议大小为10~100。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 敏感字段的状态。取值如下：
     * - 0：草稿态。
     * - 1：发布态。
     * @example `0`
     */
    "status"?: number;
}
