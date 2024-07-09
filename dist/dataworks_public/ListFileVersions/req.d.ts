export interface ListFileVersionsRequest {
    /**
     * 文件的ID，您可以通过[ListFiles](~~173942~~)查询对应文件的ID。
     * @example `100000001`
     */
    "FileId": number;
    /**
     * DataWorks工作空间的ID，您可以单击页面右上角的小扳手图标，进入工作空间管理页面查看。
     * @example `10000`
     */
    "ProjectId"?: number;
    /**
     * DataWorks工作空间的唯一标识符，即数据开发页面顶部切换工作空间处的英文标识。
     * 该参数与ProjectId参数二者必须设置其一，以确定本次API调用操作的DataWorks工作空间。
     * @example `dw_project`
     */
    "ProjectIdentifier"?: string;
    /**
     * 请求的数据页数，用于翻页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
}
