export interface GetDataServiceApplicationRequest {
    /**
     * 租户ID。您可登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入数据开发（DataStudio）页面，单击右上方当前登录用户名称，选择菜单 > 用户信息，获取租户ID。
     * @example `10002`
     */
    "TenantId"?: number;
    /**
     * 工作空间的ID。
     * @example `10001`
     */
    "ProjectId": number;
    /**
     * App的ID，可在API网关控制台上查看应用信息。
     * @example `10000`
     */
    "ApplicationId": number;
}
