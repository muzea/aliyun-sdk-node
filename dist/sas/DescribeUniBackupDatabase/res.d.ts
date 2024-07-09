export interface DescribeUniBackupDatabaseResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `09969D2C-4FAD-429E-BFBF-9A60DEF8****`
     */
    RequestId: string;
    /**
     * 页面显示的信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的数据库的数量。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的数据库的总数量。
         * @example `25`
         */
        TotalCount: number;
        /**
         * 当前页面显示的数据库的数量。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 数据库详情列表。
     */
    DatabaseList: {
        /**
         * ECS实例状态。取值：
         * - **Stopped**：已停止
         * - **Running**：运行中
         * @example `Running`
         */
        Status: string;
        /**
         * 数据库类型，取值如下：
         * - **MYSQL**
         * - **MSSQL**
         * - **Oracle**
         * @example `MYSQL`
         */
        DatabaseType: string;
        /**
         * 数据库版本。
         * @example `12.0.4100.1`
         */
        DatabaseVersion: string;
        /**
         * 数据库名称。
         * @example `apns_tt180`
         */
        DatabaseName: string;
        /**
         * 数据库所属实例名称。
         * @example `sql-test-001`
         */
        InstanceName: string;
        /**
         * 服务器数据库备份客户端唯一标识。
         * @example `85878b284df911ec800000163e19****`
         */
        InstanceUuid: string;
        /**
         * 数据库的创建方式。取值：
         * - **HBR**：混合云备份服务
         * - **AEGIS**：云安全中心
         * @example `AEGIS`
         */
        CreatedByProduct: string;
        /**
         * 服务器的实例ID。
         * @example `i-bp15aho9hhftvmhw****`
         */
        InstanceId: string;
        /**
         * 数据库防勒索备份策略的ID。
         * @example `123`
         */
        PolicyId: number;
        /**
         * 数据库客户端代理的状态。取值包括：
         * - **UNKNOWN**：未知
         * - **INSTALLED**：已安装
         * - **INSTALL_FAILED**：安装失败
         * - **UNINSTALL_FAILED**：卸载失败
         * @example `INSTALLED`
         */
        AgentStatus: string;
    }[];
}
