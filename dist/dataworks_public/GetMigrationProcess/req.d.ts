export interface GetMigrationProcessRequest {
    /**
     * 项目空间的ID。您可以进入DataWorks项目空间的设置页面查看。
     * @example `123456`
     */
    "ProjectId": number;
    /**
     * 导入导出包的ID。您可以调用CreateImportMigration接口获取。
     * @example `123456`
     */
    "MigrationId": number;
}
