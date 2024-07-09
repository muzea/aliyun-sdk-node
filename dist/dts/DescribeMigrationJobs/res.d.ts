export interface DescribeMigrationJobsResponse {
    /**
     * 请求ID。
     * @example `0ED4846D-ED60-435D-88C0-7EC0CE4D****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 当前页可展示的最大记录数。
     * @example `30`
     */
    PageRecordCount: number;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 阿里云主账号下所有符合条件的数据迁移实例数量。
     * @example `300`
     */
    TotalRecordCount: number;
    /**
     * 调用错误时返回的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    MigrationJobs: {
        /**
         * 数据迁移实例列表和各迁移实例的详情。
         */
        MigrationJob: {
            /**
             * 数据迁移实例名称。
             * @example `MySQL迁移`
             */
            MigrationJobName: string;
            /**
             * 迁移实例状态，返回值为：
             * - **NotStarted**：未启动。
             * - **Prechecking**：表示预检查中。
             * - **PrecheckFailed**：表示预检查失败。
             * - **Migrating**：表示迁移中。
             * - **Suspending**：表示暂停中。
             * - **MigrationFailed**：表示迁移失败。
             * - **Finished**：表示完成。
             * @example `Migrating`
             */
            MigrationJobStatus: string;
            /**
             * 迁移实例的付费类型，返回值固定为**PostPaid**（按量付费）。
             * @example `PostPaid`
             */
            PayType: string;
            /**
             * 数据迁移实例的规格，返回值为：**small**、**medium**、**large**、**xlarge**或**2xlarge**。更多规格说明，请参见[数据迁移链路规格说明](~~26606~~)。
             * @example `2xlarge`
             */
            MigrationJobClass: string;
            /**
             * 迁移实例创建时间，<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2021-06-22T09:02:13Z`
             */
            InstanceCreateTime: string;
            /**
             * 数据迁移实例ID。
             * @example `dtson2z28evm33****`
             */
            MigrationJobID: string;
            /**
             * 同步任务创建时间，<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2021-06-22T08:53:55Z`
             */
            JobCreateTime: string;
            MigrationObject: {
                /**
                 * 迁移对象。
                 */
                SynchronousObject: {
                    /**
                     * 源实例中待迁移对象所属数据库的名称。
                     * @example `dtstestdata`
                     */
                    DatabaseName: string;
                    /**
                     * 是否迁移整库，返回值：
                     * - **true**：是。
                     * - **false**：否。
                     * @example `false`
                     */
                    WholeDatabase: string;
                    TableList: {
                        Table: string[];
                    };
                }[];
            };
            Tags: {
                /**
                 * 标签集合。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `testkey1`
                     */
                    Key: string;
                    /**
                     * 标签键对应的标签值。
                     * @example `testvalue1`
                     */
                    Value: string;
                }[];
            };
            /**
             * 全量数据迁移情况。
             */
            DataInitialization: {
                /**
                 * 全量数据迁移进度，单位为百分比。
                 * @example `100`
                 */
                Percent: string;
                /**
                 * 全量数据迁移状态，取值包括：
                 * - **NotStarted**：未启动。
                 * - **Migrating**：迁移中。
                 * - **Failed**：迁移失败。
                 * - **Finished**：迁移完成。
                 * @example `Finished`
                 */
                status: string;
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
             * 增量数据迁移情况。
             */
            DataSynchronization: {
                /**
                 * 增量数据迁移延迟，单位为秒。
                 * @example `0`
                 */
                Delay: string;
                /**
                 * 增量数据迁移进度，单位为百分比。
                 * @example `95`
                 */
                Percent: string;
                /**
                 * 增量数据迁移状态，取值包括：
                 * - **NotStarted**：未启动。
                 * - **Migrating**：迁移中。
                 * - **Failed**：迁移失败。
                 * - **Finished**：迁移完成。
                 * - **Catched**：无延迟。
                 * @example `Catched`
                 */
                status: string;
                /**
                 * 增量数据迁移失败的错误提示。
                 * @example `任务失败太久无法恢复`
                 */
                ErrorMessage: string;
            };
            /**
             * 目标实例的连接信息。
             */
            DestinationEndpoint: {
                /**
                 * 当目标实例的数据库类型为**Oracle**时，才会返回该参数。
                 * @example `testsid`
                 */
                OracleSID: string;
                /**
                 * 目标实例中待迁移对象所属数据库的名称。
                 * @example `dtstestdata`
                 */
                DatabaseName: string;
                /**
                 * 目标实例ID。
                 * @example `rm-bp1zc3iyqe3qw****`
                 */
                InstanceID: string;
                /**
                 * 目标实例的数据库服务端口。
                 * @example `3306`
                 */
                Port: string;
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
                 * 目标实例的数据库账号。
                 * @example `dtstest`
                 */
                UserName: string;
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
                DataInitialization: boolean;
                /**
                 * 是否迁移增量数据，取值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                DataSynchronization: boolean;
                /**
                 * 是否执行结构迁移，取值：
                 * - **true**：是。
                 * - **false**：否。
                 * @example `true`
                 */
                StructureInitialization: boolean;
            };
            /**
             * 预检查情况。
             */
            Precheck: {
                /**
                 * 预检查结果，返回值：
                 * - **Success**：通过。
                 * - **Failed**：未通过。
                 * @example `Success`
                 */
                Status: string;
                /**
                 * 预检查整体进度，单位为百分比。
                 * @example `100`
                 */
                Percent: string;
            };
            /**
             * 源实例的连接信息。
             */
            SourceEndpoint: {
                /**
                 * 当源实例的数据库类型为**Oracle**时，才会返回该参数。
                 * @example `testsid`
                 */
                OracleSID: string;
                /**
                 * 源实例中待迁移对象所属数据库的名称。
                 * @example `dtstestdata`
                 */
                DatabaseName: string;
                /**
                 * 源实例ID。
                 * @example `rm-bp1i99e8l7913****`
                 */
                InstanceID: string;
                /**
                 * 源实例的数据库服务端口。
                 * @example `3306`
                 */
                Port: string;
                /**
                 * 源实例的连接地址。
                 * @example `172.16.88.***`
                 */
                IP: string;
                /**
                 * 源实例类型。
                 * @example `RDS`
                 */
                InstanceType: string;
                /**
                 * 源实例的数据库账号。
                 * @example `dtstest`
                 */
                UserName: string;
                /**
                 * 源实例的数据库类型。
                 * @example `MySQL`
                 */
                EngineName: string;
            };
            /**
             * 结构迁移情况。
             */
            StructureInitialization: {
                /**
                 * 结构迁移进度，单位为百分比。
                 * @example `100`
                 */
                Percent: string;
                /**
                 * 结构迁移状态，取值包括：
                 * - **NotStarted**：未启动。
                 * - **Migrating**：迁移中。
                 * - **Failed**：迁移失败。
                 * - **Finished**：迁移完成。
                 * @example `Finished`
                 */
                status: string;
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
        }[];
    };
}
