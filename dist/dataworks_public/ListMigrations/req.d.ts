export interface ListMigrationsRequest {
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * @example `12345`
     */
    "ProjectId": number;
    /**
     * 迁移任务的操作类型。包括：IMPORT、EXPORT。
     * @example `IMPORT`
     */
    "MigrationType": string;
    /**
     * 负责人的ID。
     * @example `193379****`
     */
    "Owner"?: string;
    /**
     * 请求数据的页码数。默认值：1 ，最大值100
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的数据条数，默认值10，最大值为100。
     * @example `10`
     */
    "PageSize"?: number;
}
