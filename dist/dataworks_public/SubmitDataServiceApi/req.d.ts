export interface SubmitDataServiceApiRequest {
    /**
     * 租户ID。您可以登录[数据服务](https://ds-cn-shanghai.data.aliyun.com/)，点击账号名称，查看用户信息，获取租户ID。
     * @example `10001`
     */
    "TenantId"?: number;
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks管控台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * API的ID。您可以通过调用[ListDataServiceApis](~~2780261~~)接口获取。
     * @example `12345`
     */
    "ApiId": number;
}
