export interface GetNodeTypeListInfoRequest {
    /**
     * Dataworks工作空间的ID，您可以单击页面右上角的小扳手图标，进入工作空间管理页面进行查看。
     * @example `10000`
     */
    "ProjectId"?: number;
    /**
     * Dataworks工作空间的唯一标识符，即数据开发页面顶部切换工作空间处的英文标识。该参数与ProjectId参数二者必须设置其一，以确定本次API调用操作的Dataworks工作空间。
     * @example `dw_project`
     */
    "ProjectIdentifier"?: string;
    /**
     * 请求的数据页数，用于翻页。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 请求的数据页大小，最大值为100。
     * @example `50`
     */
    "PageSize": number;
    /**
     * 节点类型的名称，您可以在DataStudio目录树中看到某个节点类型的名称，支持中英文，与locale需要对齐。支持模糊搜索，不填的情况下返回所有节点类型。
     * @example `ODPS SQ`
     */
    "Keyword"?: string;
    /**
     * 语言筛选，支持zh-CN和en-US。
     * @example `zh-CN`
     */
    "Locale"?: string;
}
