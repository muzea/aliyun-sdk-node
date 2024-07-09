export interface ListFoldersRequest {
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
     * 父文件夹的路径。
     * @example `业务流程/我的第一个业务流程/MaxCompute`
     */
    "ParentFolderPath": string;
    /**
     * 请求的数据页数，用于翻页。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页显示的数据条数，默认为10条，最大为100条。
     * @example `10`
     */
    "PageSize": number;
}
