export interface GetFileRequest {
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * 该参数与ProjectIdentifier参数，二者必须设置其一，用来确定本次API调用操作的DataWorks工作空间。
     * @example `10000`
     */
    "ProjectId"?: number;
    /**
     * DataWorks工作空间的名称。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间名称。
     * 该参数与ProjectId参数，二者必须设置其一，用来确定本次API调用操作的DataWorks工作空间。
     * @example `dw_project`
     */
    "ProjectIdentifier"?: string;
    /**
     * 文件的ID。您可以调用[ListFiles](~~173942~~)接口查询对应文件的ID。
     * @example `100000001`
     */
    "FileId"?: number;
    /**
     * 调度节点的ID。您可以调用[ListFiles](~~173942~~)接口获取节点ID。
     * @example `200000001`
     */
    "NodeId"?: number;
}
