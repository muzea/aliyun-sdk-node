export interface DescribeJDBCDataSourceResponse {
    /**
     * 服务Id。
     * @example `123`
     */
    DataSourceId: string;
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
    /**
     * 服务名称。
     * @example `hdfs_pxf`
     */
    DataSourceName: string;
    /**
     * 服务描述，最大长度为256字符。
     * @example `mysql data source config`
     */
    DataSourceDescription: string;
    /**
     * 服务状态位，取值：
     * - 初始化中 Init
     * - 运行中 Running
     * - 异常 Exception
     * @example `Running`
     */
    DataSourceStatus: string;
    /**
     * 服务状态信息，例如异常情况，则显示异常原因。正常Running状态下空值。
     * @example `""`
     */
    StatusMessage: string;
    /**
     * 创建时间。
     * @example `2019-09-08T16:00:00Z`
     */
    CreateTime: string;
    /**
     * 数据源类型。
     * @example `mysql`
     */
    DataSourceType: string;
    /**
     * JDBC连接串。
     * @example `jdbc:mysql://rm-xxx.mysql.rds.aliyuncs.com:3306/testadmin`
     */
    JDBCConnectionString: string;
    /**
     * 用户名。
     * @example `testuser`
     */
    JDBCUserName: string;
    /**
     * 密码。
     * @example `testpasswd`
     */
    JDBCPassword: string;
}
