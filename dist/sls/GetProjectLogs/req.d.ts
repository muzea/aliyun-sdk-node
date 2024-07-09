export interface GetProjectLogsRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 标准SQL语句。例如日志库名称为nginx-moni，查询时间区间在2022-03-01 10:41:40到2022-03-01 10:56:40之间的访问数量。
     * @example `SELECT COUNT(*) as pv FROM nginx-moni where __time__ > 1646102500 and __time__ < 1646103400`
     */
    "query": string;
    /**
     * 是否使用SQL独享版。更多信息，请参见[开启SQL独享版](~~223777~~)。
     * - true：使用SQL独享版。
     * - false（默认值）：使用SQL普通版。
     * 除通过powerSql参数配置SQL独享版外，您还可以使用**query**参数。
     * @example `false`
     */
    "powerSql"?: boolean;
}
