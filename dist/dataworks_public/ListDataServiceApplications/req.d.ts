export interface ListDataServiceApplicationsRequest {
    /**
     * 页码，从1开始，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 指定工作空间ID查询应用。支持多值，多值之间使用英文逗号（,）分隔。最少指定1个工作空间ID，最多指定50个工作空间ID。
     * @example `10000,100001`
     */
    "ProjectIdList": string;
    /**
     * 租户ID。您可登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入数据开发（DataStudio）页面，单击右上方当前登录用户名称，选择菜单 > 用户信息，获取租户ID。
     * @example `100002`
     */
    "TenantId"?: number;
}
