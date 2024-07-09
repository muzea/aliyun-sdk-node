export interface GetFolderRequest {
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
     * 文件夹的ID。您可以调用[ListFolders](~~173955~~)接口获取文件夹ID。
     * 该参数与FolderPath参数配置一个即可。
     * @example `273****`
     */
    "FolderId"?: string;
    /**
     * 文件夹的路径。您可以调用[ListFolders](~~173955~~)接口获取文件夹路径。
     * 该参数与FolderId参数配置一个即可。
     * @example `业务流程/我的第一个业务流程/MaxCompute/ods层`
     */
    "FolderPath"?: string;
}
