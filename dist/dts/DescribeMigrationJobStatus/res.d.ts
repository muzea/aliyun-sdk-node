export interface DescribeMigrationJobStatusResponse {
    /**
     * 请求ID。
     * @example `A032E3B4-929B-48E9-97B9-37587CBF****`
     */
    RequestId: string;
    /**
     * 数据迁移实例名称。
     * @example `MySQL迁移`
     */
    MigrationJobName: string;
    /**
     * 迁移实例状态，返回值：
     * - **NotStarted**：未启动。
     * - **Prechecking**：预检查中。
     * - **PrecheckFailed**：预检查失败。
     * - **Migrating**：迁移中。
     * - **Suspending**：暂停中。
     * - **MigrationFailed**：迁移失败。
     * - **Finished**：迁移完成。
     * @example `Migrating`
     */
    MigrationJobStatus: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 迁移实例的付费类型，返回值固定为**PostPaid**（按量付费）。
     * @example `PostPaid`
     */
    PayType: string;
    /**
     * 调用错误时返回的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
    /**
     * 迁移对象。
     * @example `[{\"DBName\":\"dtstestdata\",\"TableIncludes\":[{\"TableName\":\"customer\"}]}]`
     */
    MigrationObject: string;
    /**
     * 数据迁移实例ID。
     * @example `dtsz2v12jfo309****`
     */
    MigrationJobId: string;
    /**
     * 数据迁移任务ID，可用于配置控制台任务详情页面的链接。
     * > 迁移任务详情页的链接为：https://dts.console.aliyun.com/#/progress/z2v12jfo309****​/config/ 。
     * @example `z2v12jfo309****`
     */
    TaskId: string;
    /**
     * 数据迁移实例的规格，返回值为：**small**、**medium**、**large**、**xlarge**或**2xlarge**。更多规格说明，请参见[数据迁移链路规格说明](~~26606~~)。
     * @example `2xlarge`
     */
    MigrationJobClass: string;
    /**
     * 全量数据迁移执行状态。
     */
    DataInitializationStatus: {
        /**
         * 全量数据迁移状态，取值包括：
         * - **NotStarted**：未启动。
         * - **Migrating**：迁移中。
         * - **Failed**：迁移失败。
         * - **Finished**：迁移完成。
         * @example `Finished`
         */
        Status: string;
        /**
         * 全量数据迁移进度，单位为百分比。
         * @example `100`
         */
        Percent: string;
        /**
         * 全量数据迁移失败的错误提示。
         * @example `java.lang.NumberFormatException: For input string: ""`
         */
        ErrorMessage: string;
        /**
         * 已完成全量数据初始化的记录数。
         * @example `200001`
         */
        Progress: string;
    };
    /**
     * 增量数据迁移执行状态。
     */
    DataSynchronizationStatus: {
        /**
         * 增量数据迁移状态，取值包括：
         * - **NotStarted**：未启动。
         * - **Migrating**：迁移中。
         * - **Failed**：迁移失败。
         * - **Finished**：迁移完成。
         * - **Catched**：无延迟。
         * @example `Catched`
         */
        Status: string;
        /**
         * 增量数据迁移进度，单位为百分比。
         * @example `95`
         */
        Percent: string;
        /**
         * 增量数据迁移延迟，单位为秒。
         * @example `0`
         */
        Delay: string;
        /**
         * 增量数据迁移失败的错误提示。
         * @example `任务失败太久 无法恢复`
         */
        ErrorMessage: string;
        /**
         * 迁移最新一条增量数据的时间戳，格式为Unix时间戳，单位为秒。
         * @example `1612507847`
         */
        Checkpoint: string;
    };
    /**
     * 目标实例的连接信息。
     */
    DestinationEndpoint: {
        /**
         * 目标实例中待迁移对象所属数据库的名称。
         * @example `dtstestdata`
         */
        DatabaseName: string;
        /**
         * 目标实例ID。
         * @example `rm-bp1zc3iyqe3qw****`
         */
        InstanceId: string;
        /**
         * 目标实例的连接地址。
         * @example `172.16.88.***`
         */
        IP: string;
        /**
         * 目标实例类型。
         * @example `RDS`
         */
        InstanceType: string;
        /**
         * 目标实例的数据库服务端口。
         * @example `3306`
         */
        Port: string;
        /**
         * 目标实例的数据库账号。
         * @example `dtstest`
         */
        UserName: string;
        /**
         * Oracle数据库的SID信息。
         * > 当目标实例的数据库类型为**Oracle**时，才会返回该参数。
         * @example `testsid`
         */
        oracleSID: string;
        /**
         * 目标实例的数据库类型。
         * @example `MySQL`
         */
        EngineName: string;
    };
    /**
     * 迁移类型。
     */
    MigrationMode: {
        /**
         * 是否迁移全量数据，取值：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        dataInitialization: boolean;
        /**
         * 是否迁移增量数据，取值：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        dataSynchronization: boolean;
        /**
         * 是否执行结构迁移，取值：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        structureInitialization: boolean;
    };
    /**
     * 预检查情况。
     */
    PrecheckStatus: {
        /**
         * 预检查状态，返回值：
         * - **NotStarted**：未启动。
         * - **Checking**：预检查中。
         * - **Failed**：预检查失败。
         * - **Finished**：预检查完成。
         * @example `Success`
         */
        Status: string;
        /**
         * 预检查整体进度，单位为百分比。
         * @example `100`
         */
        Percent: string;
        Detail: {
            /**
             * 各预检查项的执行情况。
             */
            CheckItem: {
                /**
                 * 检查结果，返回值：
                 * - **Success**：通过该项检查。
                 * - **Failed**：未通过该项检查。
                 * @example `Success`
                 */
                CheckStatus: string;
                /**
                 * 预检查未通过的错误提示。
                 * > 当**CheckStatus**参数返回值为**Failed**时，才会返回本参数。
                 * @example `Original error: Access denied for user 'dtstest'@'100.104.***.**' (using password: YES)`
                 */
                ErrorMessage: string;
                /**
                 * 预检查项目。
                 * @example `CHECK_CONN_SRC`
                 */
                ItemName: string;
                /**
                 * 预检查未通过时对应的修复方法。
                 * > 当**CheckStatus**参数返回值为**Failed**时，才会返回本参数。
                 * @example `CHECK_ERROR_DEST_CONN_REPAIR2`
                 */
                RepairMethod: string;
            }[];
        };
    };
    /**
     * 源实例的连接信息。
     */
    SourceEndpoint: {
        /**
         * 源实例中待迁移对象所属数据库的名称。
         * @example `dtstestdatabase`
         */
        DatabaseName: string;
        /**
         * 源实例ID。
         * @example `rm-bp1i99e8l7913****`
         */
        InstanceId: string;
        /**
         * 源实例的连接地址。
         * @example `172.16.88.***`
         */
        IP: string;
        /**
         * 源实例类型。
         * - **RDS**：阿里云RDS实例。
         * - **ECS**：ECS上的自建数据库。
         * - **LocalInstance**：有公网IP的自建数据库。
         * - **Express**：通过专线/VPN网关/智能网关接入的自建数据库。
         * - **MongoDB**：阿里云MongoDB实例。
         * - **POLARDB**：阿里云POLARDB for MySQL集群（该值仅适用于中国站）。
         * @example `RDS`
         */
        InstanceType: string;
        /**
         * 源实例的数据库服务端口。
         * @example `3306`
         */
        Port: string;
        /**
         * 源实例的数据库账号。
         * @example `dtstest`
         */
        UserName: string;
        /**
         * Oracle数据库的SID信息。
         * > 当源实例的数据库类型为**Oracle**时，才会返回该参数。
         * @example `dtstestdatabase`
         */
        oracleSID: string;
        /**
         * 源实例的数据库类型。
         * @example `MySQL`
         */
        EngineName: string;
    };
    /**
     * 结构迁移执行状态。
     */
    StructureInitializationStatus: {
        /**
         * 结构迁移状态，取值包括：
         * - **NotStarted**：未启动。
         * - **Migrating**：迁移中。
         * - **Failed**：迁移失败。
         * - **Finished**：迁移完成。
         * @example `Finished`
         */
        Status: string;
        /**
         * 结构迁移进度，单位为百分比。
         * @example `100`
         */
        Percent: string;
        /**
         * 结构迁移失败的错误提示。
         * @example `DTS-1020042 Execute sql error sql: ERROR: type "geometry" does not exist;`
         */
        ErrorMessage: string;
        /**
         * 已完成结构迁移的表的数量。
         * @example `1`
         */
        Progress: string;
    };
}
