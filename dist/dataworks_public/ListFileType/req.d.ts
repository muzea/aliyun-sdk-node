export interface ListFileTypeRequest {
    /**
     * DataWorks工作空间的ID。您可以登录DataWorks管控台，进入工作空间配置页面获取工作空间ID。该参数与ProjectIdentifier参数，二者必须设置其一，用来确定本次API调用操作的DataWorks工作空间。
     * @example `10000`
     */
    "ProjectId"?: number;
    /**
     * DataWorks工作空间名称。您可以登录DataWorks控制台，进入工作空间配置页面获取工作空间名称。
     * 该参数与ProjectId参数，二者必须设置其一，用来确定本次API调用操作的DataWorks工作空间。
     * @example `dw_project`
     */
    "ProjectIdentifier"?: string;
    /**
     * 请求数据的页码数。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页显示的数据条数，最大值为100。
     * @example `50`
     */
    "PageSize": number;
    /**
     * 节点类型的名称。您可以登录DataWorks控制台，进入数据开发界面，在左侧导航栏查看某类型节点的名称。配置说明如下：
     * - 支持查看中英文名称，但该参数查看的名称语言需要与Locale参数的语言类型一致。
     * - 支持模糊搜索。
     * - 如果不配置该参数，则会返回所有节点类型的名称。
     * @example `ODPS SQL`
     */
    "Keyword"?: string;
    /**
     * 选择查询的语言，支持查询zh-CN和en-US语言的节点类型信息。
     * @example `zh-CN`
     */
    "Locale"?: string;
}
