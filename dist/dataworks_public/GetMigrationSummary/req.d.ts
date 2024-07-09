export interface GetMigrationSummaryRequest {
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * @example `12345`
     */
    "ProjectId": number;
    /**
     * 导入导出任务的ID。
     * 您可以调用[CreateImportMigration](~~2780280~~)接口获取导入任务的ID，调用[CreateExportMigration](~~2780281~~)接口获取导出任务的ID。
     * @example `1234`
     */
    "MigrationId": number;
}
