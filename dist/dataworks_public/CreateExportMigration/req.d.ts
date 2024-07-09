export interface CreateExportMigrationRequest {
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * @example `12345`
     */
    "ProjectId": number;
    /**
     * 导出任务的名称。
     * 名称必须唯一，即当前DataWorks工作空间中不能存在名称重复的导出任务。
     * @example `test_export_01`
     */
    "Name": string;
    /**
     * 任务的导出模式，取值如下：
     * - FULL：全量导出目标任务。
     * - INCREMENTAL：从指定的时间点开始，增量导出目标任务。选择该模式时，需要同时配置IncrementalSince参数。
     * @example `FULL`
     */
    "ExportMode": string;
    /**
     * 增量导出目标任务的起始时间。
     * 当ExportMode参数配置为INCREMENTAL时，IncrementalSince参数才生效。
     * @example `1589904000000`
     */
    "IncrementalSince"?: number;
    /**
     * 导出任务的状态。系统会根据所选状态导出指定状态的任务。取值如下：
     * - SAVED：保存状态，即导出已保存的任务。
     * - SUBMITTED：提交状态，即导出已提交的任务。
     * - DEPLOYED：发布状态，即导出已发布的任务。
     * @example `SAVED`
     */
    "ExportObjectStatus"?: string;
    /**
     * 导出任务的描述信息。
     * @example `test`
     */
    "Description"?: string;
}
