export interface DeployFileRequest {
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
     * 该参数与NodeId参数配置一个即可。
     * @example `10000001`
     */
    "FileId"?: number;
    /**
     * 本次发布的说明信息。
     * @example `第一次发布任务`
     */
    "Comment"?: string;
    /**
     * 待发布文件在调度系统对应的任务ID。该参数与FileId参数配置一个即可。
     * @example `2000001`
     */
    "NodeId"?: number;
}
