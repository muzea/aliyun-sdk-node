export interface ExportAnnotationsRequest {
    /**
     * 租户ID。如何获取租户ID，请参见[ListTenants](~~454649~~)。
     * @example `GA***W134`
     */
    "TenantId": string;
    /**
     * 任务ID。如何获取任务ID，请参见[ListTasks](~~454662~~)。
     * @example `15***02518306500608`
     */
    "TaskId": string;
    /**
     * 目标。
     * @example `PAI`
     */
    "Target"?: string;
    /**
     * OSS路径。
     * @example `oss://***-hz-oss.oss-cn-hangzhou.aliyuncs.com/output/`
     */
    "OssPath": string;
    /**
     * 是否注册成为PAI数据集。取值如下：
     * - true：将标注结果注册为PAI数据集。
     * - false：直接将标注结果导出至OSS目录，不注册数据集。
     * @example `true`
     */
    "RegisterDataset"?: string;
}
