export interface ListDataServiceFoldersRequest {
    /**
     * 页码，从1开始。默认值为1。
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
     * @example `10001`
     */
    "ProjectId": number;
    /**
     * 租户ID。您可登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入数据开发（DataStudio）页面，单击右上方当前登录用户名称，选择菜单 > 用户信息，获取租户ID。
     * @example `10002`
     */
    "TenantId"?: number;
    /**
     * 指定文件夹所属业务流程的ID。
     * @example `ds_123abc`
     */
    "GroupId"?: string;
    /**
     * 文件夹名称关键词，可以进行子串匹配。
     * @example `文件夹名称关键词`
     */
    "FolderNameKeyword"?: string;
}
