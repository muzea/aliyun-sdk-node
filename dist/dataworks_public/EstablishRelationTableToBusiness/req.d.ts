export interface EstablishRelationTableToBusinessRequest {
    /**
     * DataWorks工作空间的ID，您可以单击页面右上角的小扳手图标，进入工作空间管理页面查看。
     * @example `10000`
     */
    "ProjectId"?: number;
    /**
     * DataWorks工作空间的唯一标识符，即数据开发页面顶部切换工作空间处的英文标识。
     * 该参数与ProjectId参数二者必须设置其一，以确定本次API调用操作的DataWorks工作空间。
     * @example `dw`
     */
    "ProjectIdentifier"?: string;
    /**
     * 业务流程的ID，您可以使用[ListBusiness](~~173945~~)获取对应业务流程的ID。
     * @example `1000001`
     */
    "BusinessId": string;
    /**
     * 表的UUID，您可以通过[SearchMetaTables](~~173919~~)获取对应表的UUID。
     * @example `odps.dw_project.tb1`
     */
    "TableGuid": string;
    /**
     * 文件夹的ID，您可以使用[GetFolder](~~173952~~)或者[ListFolders](~~173955~~)获取对应文件夹的ID。
     * @example `2eb6f9****`
     */
    "FolderId"?: string;
}
