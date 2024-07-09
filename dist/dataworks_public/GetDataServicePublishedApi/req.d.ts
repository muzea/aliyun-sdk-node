export interface GetDataServicePublishedApiRequest {
    /**
     * 工作空间的ID。
     * @example `10002`
     */
    "ProjectId": number;
    /**
     * 租户ID。您可登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入数据开发（DataStudio）页面，单击右上方当前登录用户名称，选择菜单 > 用户信息，获取租户ID。
     * @example `10003`
     */
    "TenantId"?: number;
    /**
     * API的ID。
     * @example `10001`
     */
    "ApiId": number;
}
