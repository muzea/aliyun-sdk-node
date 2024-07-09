export interface ListDeploymentsRequest {
    /**
     * DataWorks工作空间的名称。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间名称。
     * 该参数与ProjectId参数，二者必须设置其一，用来确定本次API调用操作的DataWorks工作空间。
     * @example `dw_project`
     */
    "ProjectIdentifier"?: string;
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * 该参数与ProjectIdentifier参数，二者必须设置其一，用来确定本次API调用操作的DataWorks工作空间。
     * @example `10000`
     */
    "ProjectId"?: number;
    /**
     * 发布包创建者的阿里云用户ID。
     * @example `20030****`
     */
    "Creator"?: string;
    /**
     * 生成发布包的最大毫秒时间戳。
     * @example `1593877765000`
     */
    "EndCreateTime"?: number;
    /**
     * 发布包执行者的阿里云用户ID。
     * @example `2003****`
     */
    "Executor"?: string;
    /**
     * 发布包开始执行的最大毫秒时间戳。
     * @example `1593877765000`
     */
    "EndExecuteTime"?: number;
    /**
     * 发布包当前的状态。取值如下：
     * - 0：发布包已准备就绪。
     * - 1：发布包发布成功。
     * - 2：发布包发布失败。
     * - 6：发布包被驳回。
     * @example `1`
     */
    "Status"?: number;
    /**
     * 发布包名称的关键字。DataWorks支持模糊匹配，即输入关键字，即可查询包含该关键字的发布包。
     * @example `hello`
     */
    "Keyword"?: string;
    /**
     * 请求的数据页数，用于翻页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的条数，默认为10条，最大为100条。
     * @example `20`
     */
    "PageSize"?: number;
}
