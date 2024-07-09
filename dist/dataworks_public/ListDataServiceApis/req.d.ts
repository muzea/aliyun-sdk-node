export interface ListDataServiceApisRequest {
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
     * 工作空间的ID。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 租户ID。您可登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入数据开发（DataStudio）页面，单击右上方当前登录用户名称，选择菜单 > 用户信息，获取租户ID。
     * @example `10001`
     */
    "TenantId"?: number;
    /**
     * API名称的关键词，过滤得到API名称包含该关键词的API。
     * @example `我的API名称`
     */
    "ApiNameKeyword"?: string;
    /**
     * API路径的关键词，过滤得到API路径包含该关键词的API。
     * @example `/test/`
     */
    "ApiPathKeyword"?: string;
    /**
     * API创建者的阿里云ID，过滤得到该用户创建的API。
     * @example `12345`
     */
    "CreatorId"?: string;
}
