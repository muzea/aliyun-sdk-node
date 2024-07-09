export interface CreateJobGroupExportTaskRequest {
    /**
     * 实例id
     * @example `a4274627-265f-4e14-b2d6-4ee7d4f8593e`
     */
    "InstanceId": string;
    /**
     * 任务组ID
     * @example `baf6dfdc-eb79-4c63-ab19-c56388b1fbdd`
     */
    "JobGroupId"?: string;
    /**
     * 导入任务执行参数
     * @example `[]`
     */
    "Option"?: string[];
}
