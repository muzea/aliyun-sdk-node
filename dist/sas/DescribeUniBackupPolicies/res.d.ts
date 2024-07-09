export interface DescribeUniBackupPoliciesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `ACF97412-FD09-4D1F-994F-34DF12BR****`
     */
    RequestId: string;
    /**
     * 页面显示信息。
     */
    PageInfo: {
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的数据库防勒索策略的数量。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的数据库防勒索策略的总数量。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 当前页面显示的数据库防勒索策略的数量。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 数据库防勒索备份策略集合。
     */
    UniBackupPolicies: {
        /**
         * 数据库防勒索备份策略状态，取值：
         * - **initiating**：初始化中
         * - **opening**：开启中
         * - **closing**：关闭中
         * - **deleting**：删除中
         * - **enabled**：已启用
         * - **disabled**：已禁用
         * @example `opening`
         */
        PolicyStatus: string;
        /**
         * 备份策略的错误信息。
         * @example `AttachRamRoleError`
         */
        ErrorMessage: string;
        /**
         * 最新备份计划执行结果。
         * @example `completed`
         */
        LatestBackResult: string;
        /**
         * 数据库服务器所在的地域ID。
         * @example `cn-hangzhou`
         */
        UniRegionId: string;
        /**
         * 备份计划状态，取值如下：
         * - **init**：初始化中
         * - **running**：执行中
         * - **completed**：执行完成
         * - **restoring**：恢复中
         * - **creating**：创建中
         * - **created**：创建成功
         * @example `creating`
         */
        PlanStatus: string;
        /**
         * 服务器数据库备份客户端唯一标识。
         * @example `cf1bcad4063f11ed800000163e0e****`
         */
        InstanceUuid: string;
        /**
         * 数据库防勒索备份策略的名称。
         * @example `auto_oracle_37f`
         */
        PolicyName: string;
        /**
         * 客户端异常错误信息。
         * @example `INSTALL_TIMEOUT`
         */
        AgentErrorMessage: string;
        /**
         * 服务器的实例ID。
         * @example `i-9dp7mubt5wit6g0h****`
         */
        InstanceId: string;
        /**
         * 数据库客户端代理的状态。取值包括：
         * - **UNKNOWN**：未知
         * - **INSTALLED**：已安装
         * - **INSTALL_FAILED**：安装失败
         * - **UNINSTALL_FAILED**：卸载失败
         * @example `INSTALLED`
         */
        AgentStatus: string;
        /**
         * 数据库类型，取值如下：
         * - **MYSQL**
         * - **MSSQL**
         * - **Oracle**
         * @example `MYSQL`
         */
        DatabaseType: string;
        /**
         * 备份计划执行失败返回错误Code信息。
         * @example `EXPIRED`
         */
        ErrorCode: string;
        /**
         * 数据库名称。
         * @example `abc123`
         */
        DatabaseName: string;
        /**
         * 服务器实例名称。
         * @example `sql-test-001`
         */
        InstanceName: string;
        /**
         * 最新备份计划执行时间。
         * @example `2022-01-01 00:00:11`
         */
        LatestBackupTime: string;
        /**
         * ECS实例状态。取值：
         * - **Stopped**：已停止
         * - **Running**：运行中
         * @example `Running`
         */
        InstanceStatus: string;
        /**
         * 数据库防勒索备份策略的ID。
         * @example `123`
         */
        PolicyId: number;
    }[];
}
