export interface GetDataSourceMetaRequest {
    /**
     * DataWorks工作空间的ID。您可以登录[DataWorks控制台](https://workbench.data.aliyun.com/console)，进入工作空间配置页面获取工作空间ID。
     * @example `10000`
     */
    "ProjectId": number;
    /**
     * 目标数据源的名称。
     * @example `mysql_name`
     */
    "DatasourceName": string;
    /**
     * 请求的数据页数，用于翻页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的数据条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 目标数据源所属的环境。取值如下：
     * - 0：开发环境。
     * - 1：生产环境。
     * @example `1`
     */
    "EnvType"?: string;
}
