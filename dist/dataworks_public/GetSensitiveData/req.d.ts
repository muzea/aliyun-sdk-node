export interface GetSensitiveDataRequest {
    /**
     * 每页返回的数据量，最大值为1000。
     * @example `1000`
     */
    "PageSize": number;
    /**
     * 页码数，最小值为1。
     * @example `1`
     */
    "PageNo": number;
    /**
     * 获取访问记录的条件设置。可选的参数如下：
     * - dbType：数据类型。
     * - instanceName：实例名称。
     * - databaseName：数据库名称。
     * - projectName：项目名称。
     * - clusterName：集群名称。
     * 示例获取Hologres中ABC实例的abc数据库的敏感数据访问记录。实际使用时，您需要根据业务使用的引擎进行配置。
     * @example `[ {"dbType":"hologres","instanceName":"ABC","databaseName":"abc"}, {"dbType":"ODPS.ODPS","projectName":"adbc"} ]`
     */
    "Name": string;
}
