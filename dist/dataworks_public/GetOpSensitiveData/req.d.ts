export interface GetOpSensitiveDataRequest {
    /**
     *   获取访问记录的条件设置。可选的参数如下：
     * - dbType：数据类型。
     * - instanceName：实例名称。
     * - databaseName：数据库名称。
     * - projectName：项目名称。
     * - clusterName：集群名称。
     * 示例获取Hologres中ABC实例的abc数据库的敏感数据访问记录：
     * [  {"dbType":"hologres","instanceName":"ABC","databaseName":"abc"} ]
     * 实际使用时，您需要根据业务使用的引擎进行配置。
     * @example `[  {"dbType":"hologres","instanceName":"ABC","databaseName":"abc"},  {"dbType":"ODPS.ODPS","projectName":"adbc"}  ]`
     */
    "Name": string;
    /**
     * 每页展示的数据量，最小值为1，最大值为1000。
     * @example `1`
     */
    "PageSize": number;
    /**
     * 页码数。最小值为1，最大值为1000。
     * @example `100`
     */
    "PageNo": number;
    /**
     * 获取访问记录的日期。格式为：yyyyMMdd。
     * @example `20210116`
     */
    "Date": string;
    /**
     * 用户对数据的操作类型。取值如下：
     * - SQL_SELECT，访问行为。例如，使用SELECT查询数据。
     * - TUNNEL_DOWNLOAD，导出行为。例如，下载数据。
     * @example `SQL_SELECT`
     */
    "OpType"?: string;
}
