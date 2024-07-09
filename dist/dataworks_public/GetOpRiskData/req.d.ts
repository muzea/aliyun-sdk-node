export interface GetOpRiskDataRequest {
    /**
     * 每页返回的数据量，最大值为1000。
     * @example `100`
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
     * 示例获取Hologres中ABC实例的abc数据库的敏感数据访问记录：
     * [  {"dbType":"hologres","instanceName":"ABC","databaseName":"abc"} ]
     * 实际使用时，您需要根据业务使用的引擎进行配置。
     * @example `[ {"dbType":"hologres","instanceName":"ABC","databaseName":"abc"}, {"dbType":"ODPS.ODPS","projectName":"adbc"} ]`
     */
    "Name"?: string;
    /**
     * 获取访问记录的日期。格式为：yyyyMMdd。
     * @example `20210221`
     */
    "Date": string;
    /**
     * 指通过什么方式识别风险类型。取值如下：
     * - 手工识别。
     * - 风险规则名称，您可以进入DataWorks的数据保护伞，在风险识别管理页面获取。
     * @example `手工识别`
     */
    "RiskType"?: string;
}
