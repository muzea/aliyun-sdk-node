export interface StartMigrationRequest {
    /**
     * 项目空间的ID。您可以进入DataWorks项目空间的设置页面查看。
     * @example `123456`
     */
    "ProjectId": number;
    /**
     * 导入导出包的ID。您可以调用[CreateImportMigration](~~206094~~)接口获取导入包ID，调用[CreateExportMigration](~~349325~~)接口获取导出包ID。
     * @example `123456`
     */
    "MigrationId": number;
}
