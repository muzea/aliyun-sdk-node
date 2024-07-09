export interface SubmitFileRequest {
    /**
     * DataWorks工作空间的ID。您可以登录DataWorks管控台，进入工作空间配置页面获取工作空间ID。该参数与ProjectIdentifier参数，二者必须设置其一，用来确定本次API调用操作的DataWorks工作空间。
     * @example `10000`
     */
    "ProjectId"?: number;
    /**
     * DataWorks工作空间名称。您可以登录DataWorks控制台，进入工作空间配置页面获取工作空间名称。该参数与ProjectId参数，二者必须设置其一，用来确定本次API调用操作的DataWorks工作空间。
     * @example `dw_project`
     */
    "ProjectIdentifier"?: string;
    /**
     * 文件的ID，您可以通过[ListFiles](~~173942~~)查询对应文件的ID。
     * @example `1000000`
     */
    "FileId": number;
    /**
     * 本次提交的说明信息。
     * @example `第一次提交任务`
     */
    "Comment"?: string;
    /**
     * 文件提交成功后是否跳过发布前检查：
     * - false：不跳过。文件提交后会自动触发发布前检查流程，检查通过后才会进入可发布状态。
     * - true：跳过。文件提交后不会触发发布前检查流程，可直接进入发布流程。
     * @example `false`
     */
    "SkipAllDeployFileExtensions"?: boolean;
}
