export interface DescribePreCheckStatusResponse {
    /**
     * 子任务的执行状态，返回值为：
     * - **NotStarted**：未启动。
     * - **Suspending**：暂停中。
     * - **Checking**：检查中。
     * - **Migrating**：迁移中。
     * - **Failed**：失败。
     * - **Catched**：增量迁移或同步中。
     * - **Finished**：完成。
     * @example `Finished`
     */
    State: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 当前页可展示的最大记录数。
     * @example `20`
     */
    PageRecordCount: number;
    /**
     * 子任务的总数。
     * @example `0`
     */
    Total: number;
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `C096FA97-B6BA-4575-899D-61E12B59****`
     */
    RequestId: string;
    /**
     * 所查询子任务的名称。
     * @example `预检查`
     */
    JobName: string;
    /**
     * 迁移或同步任务ID。
     * @example ` b4my3zg929a****`
     */
    JobId: string;
    /**
     * 导致子任务失败的具体项目数量。
     * @example `0`
     */
    ErrorItem: number;
    ErrorAnalysisItem: number;
    /**
     * 总记录数。
     * @example `100`
     */
    TotalRecordCount: number;
    /**
     * 任务码，代表所查询的子任务，取值为：
     * - **01**：预检查。
     * - **02**：库表结构迁移或初始化。
     * - **03**：全量迁移或初始化。
     * - **04**：增量迁移或同步。
     * @example `01`
     */
    Code: string;
    /**
     * 页码，取值为大于**0**且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 子任务的具体项目列表及项目执行进度。
     */
    JobProgress: {
        /**
         * 该具体项目失败后，您是否设置跳过该项目。返回值：
         * * **true**：是
         * * **false**：否
         * @example `false`
         */
        Skip: boolean;
        /**
         * 具体项目完成时间，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2021-03-16T08:01:34.000+00:00`
         */
        FinishTime: string;
        /**
         * 是否直接忽略该具体项目，跳至下一个具体项目，返回值：
         * - **N**：否。
         * - **Y**：是。
         * @example `N`
         */
        IgnoreFlag: string;
        /**
         * 增量迁移或同步延迟时间。
         * > 如查询迁移任务，该参数的单位为毫秒，如查询同步任务，该参数的单位为秒。
         * @example `0`
         */
        DelaySeconds: number;
        /**
         * 执行的DDL操作。
         * @example `CREATE TABLE `dtstestdata`.`order` (\n`orderid`  int(11)     COMMENT ''   NOT NULL   , \n`username`  char(32)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT ''   NULL   , \n`ordertime`  datetime     COMMENT ''   NULL   , \n`commodity`  varchar(32)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT ''   NULL   , \n`phonenumber`  int(11)     COMMENT ''   NULL   , \n`address`  text  CHARSET `utf8mb4` COLLATE `utf8mb4_general_ci`    COMMENT ''   NULL   \n, PRIMARY KEY (`orderid`)) engine=InnoDB DEFAULT CHARSET=`gbk` DEFAULT COLLATE `gbk_chinese_ci` ROW_FORMAT= Dynamic comment = '' ;\n`
         */
        DdlSql: string;
        /**
         * 具体项目的执行进度状态，返回值为：
         * - **NotStarted**：未启动。
         * - **Checking**：检查中。
         * - **Migrating**：迁移中。
         * - **Failed**：失败。
         * - **Warning**：警告。
         * - **Success**：完成。
         * @example `Success`
         */
        State: string;
        /**
         * 具体项目启动时间，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2021-03-16T08:01:31.000+00:00`
         */
        BootTime: string;
        /**
         * 具体项目的简称。
         * @example `CHECK_CONN_DEST`
         */
        Item: string;
        /**
         * 具体项目的子项目进度。
         * > 如返回**[]**，则表示没有子项目。
         * @example `[]`
         */
        Sub: string;
        /**
         * 子任务的具体项目总数。
         * @example `1`
         */
        Total: number;
        /**
         * 待迁移或同步的对象名称。
         * @example `order`
         */
        TargetNames: string;
        /**
         * DTS是否支持在具体项目失败后，跳过该项目。
         * @example `true`
         */
        CanSkip: boolean;
        /**
         * 具体项目名称。
         * @example `CHECK_CONN_DEST_DETAIL`
         */
        Names: string;
        /**
         * 具体项目出错时的错误详情。
         * @example `CHECK__ERROR_SAME_OBJ_DETAIL`
         */
        ErrDetail: string;
        /**
         * 本参数即将下线。
         * @example `1`
         */
        DiffRow: number;
        /**
         * 子任务ID。
         * @example `fj1c33ro168****`
         */
        JobId: string;
        /**
         * 源实例中迁移对象所属数据库名称。
         * @example `dtstestdata`
         */
        SourceSchema: string;
        /**
         * 目标实例中迁移对象所属数据库名称。
         * @example `dtstestdata_new`
         */
        DestSchema: string;
        /**
         * 本参数即将下线。
         * @example `demo`
         */
        ParentObj: string;
        /**
         * 具体项目出错时的报错提示。
         * @example `CHECK__ERROR_SAME_OBJ`
         */
        ErrMsg: string;
        /**
         * 项目编号。
         * @example `10`
         */
        OrderNum: number;
        /**
         * 具体项目未通过时对应的修复方法。
         * @example `CHECK__ERROR_SAME_OBJ_REPAIR`
         */
        RepairMethod: string;
        /**
         * 记录在元数据库中的ID。
         * @example `5632`
         */
        Id: string;
        /**
         * 具体报错的执行日志。
         */
        Logs: {
            /**
             * 报错信息。
             * @example `CREATE TABLE `dtstestdata`.`customer` (\n`runoob_id`  int(10) unsigned   auto_increment  COMMENT ''   NOT NULL   , \n`runoob_title`  varchar(100)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT ''   NOT NULL   , \n`runoob_author1216`  varchar(40)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT ''   NOT NULL   , \n`submission_date1216`  date     COMMENT ''   NULL   \n, PRIMARY KEY (`runoob_id`)) engine=InnoDB AUTO_INCREMENT=200001 DEFAULT CHARSET=`utf8` DEFAULT COLLATE `utf8_general_ci` ROW_FORMAT= Dynamic comment = '' ;\n`
             */
            ErrData: string;
            /**
             * 具体项目出错时DTS的报错提示。
             * @example `DTS-1020042 Execute sql error sql: Table 'customer' already exists`
             */
            ErrMsg: string;
            /**
             * 日志的级别。
             * @example `ERROR`
             */
            LogLevel: string;
            /**
             * 报错类型。
             * @example `ForeignKey`
             */
            ErrType: string;
        }[];
        /**
         * 当前运行中的子任务数量。
         * @example `0`
         */
        Current: string;
    }[];
    AnalysisJobProgress: {
        Skip: boolean;
        FinishTime: string;
        IgnoreFlag: string;
        DelaySeconds: number;
        DdlSql: string;
        State: string;
        BootTime: string;
        Item: string;
        Sub: string;
        Total: number;
        TargetNames: string;
        CanSkip: boolean;
        Names: string;
        ErrDetail: string;
        DiffRow: number;
        JobId: string;
        SourceSchema: string;
        DestSchema: string;
        ParentObj: string;
        ErrMsg: string;
        OrderNum: number;
        RepairMethod: string;
        Id: string;
        Logs: {
            ErrData: string;
            ErrMsg: string;
            LogLevel: string;
            ErrType: string;
        }[];
        Current: string;
    }[];
    /**
     * 分布式子任务的详情。
     */
    SubDistributedJobStatus: {
        /**
         * 任务关联的分布式子任务的名称。
         * @example `dts.step.struct.load`
         */
        JobName: string;
        /**
         * 子任务的执行状态，返回值为：
         * - **NotStarted**：未启动。
         * - **Suspending**：暂停中。
         * - **Checking**：检查中。
         * - **Migrating**：迁移中。
         * - **Failed**：失败。
         * - **Catched**：增量迁移或同步中。
         * - **Finished**：完成。
         * @example `Finished`
         */
        State: string;
        /**
         * 任务ID。
         * @example `n0gm1682j6563np`
         */
        JobId: string;
        /**
         * 当前执行失败的任务数量。
         * @example `0`
         */
        ErrorItem: number;
        /**
         * 任务码，代表所查询的子任务类型，取值为：
         * - **01**：预检查。
         * - **02**：库表结构迁移或初始化。
         * - **03**：全量迁移或初始化。
         * - **04**：增量迁移或同步。
         * @example `02`
         */
        Code: string;
        /**
         * 返回数据的总数量。
         * @example `11`
         */
        Total: number;
        /**
         * 子任务的具体项目列表及项目执行进度。
         */
        JobProgress: {
            /**
             * 是否有跳过该项工作，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `True`
             */
            Skip: boolean;
            /**
             * 完成时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2022-03-31T03:36:11.000+00:00`
             */
            FinishTime: string;
            /**
             * 是否直接忽略该具体项目，跳至下一个具体项目，返回值：
             * - **N**：否。
             * - **Y**：是。
             * @example `N`
             */
            IgnoreFlag: string;
            /**
             * 增量迁移或同步延迟时间。
             * @example `0`
             */
            DelaySeconds: number;
            /**
             * 执行的DDL操作。
             * @example `None`
             */
            DdlSql: string;
            /**
             * 子任务的执行状态，返回值为：
             * - **NotStarted**：未启动。
             * - **Suspending**：暂停中。
             * - **Checking**：检查中。
             * - **Migrating**：迁移中。
             * - **Failed**：失败。
             * - **Catched**：增量迁移或同步中。
             * - **Finished**：完成。
             * @example `Finished`
             */
            State: string;
            /**
             * 具体项目启动时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2022-03-30T03:36:11.000+00:00`
             */
            BootTime: string;
            /**
             * 具体项目名称。
             * @example `login_common_time`
             */
            Item: string;
            /**
             * 具体项目的子项目进度。
             * > 如返回**[]**，则表示没有子项目。
             * @example `[]`
             */
            Sub: string;
            /**
             * 项目的总条数。
             * @example `11`
             */
            Total: number;
            /**
             * 目标名称。
             * @example `order`
             */
            TargetNames: string;
            /**
             * DTS是否支持在项目失败后，跳过该项目。返回值：
             * * **true**：是
             * * **false**：否
             * @example `false`
             */
            CanSkip: boolean;
            /**
             * 具体项目名称。
             * @example `metricRuleTargets-20180308houe`
             */
            Names: string;
            /**
             * 具体项目出错时的错误详情。
             * @example `CHECK__ERROR_SAME_OBJ_DETAIL`
             */
            ErrDetail: string;
            /**
             * 本参数即将下线。
             * @example `None`
             */
            DiffRow: number;
            /**
             * 任务ID。
             * @example `l3m1213ye7l****`
             */
            JobId: string;
            /**
             * 源实例中迁移对象所属数据库名称。
             * @example `databasetest`
             */
            SourceSchema: string;
            /**
             * 目标实例中迁移对象所属数据库名称。
             * @example `databasetest`
             */
            DestSchema: string;
            /**
             * 本参数即将下线。
             * @example `None`
             */
            ParentObj: string;
            /**
             * 具体项目出错时的报错提示。
             * @example `ODPS project does not exist odps.`huijin`
             */
            ErrMsg: string;
            /**
             * 项目编号。
             * @example `1`
             */
            OrderNum: number;
            /**
             * 预检查未通过时对应的修复方法。
             * @example `CHECK__ERROR_SAME_OBJ_REPAIR
            `
             */
            RepairMethod: string;
            /**
             * 该条记录在元数据库中的ID。
             * @example `3890`
             */
            Id: string;
            /**
             * 报错的执行日志信息。
             */
            Logs: {
                /**
                 * 报错记录。
                 * @example `CREATE TABLE `dtstestdata`.`customer` (\n`runoob_id` int(10) unsigned auto_increment COMMENT '' NOT NULL , \n`runoob_title` varchar(100) CHARSET `utf8` COLLATE `utf8_general_ci` COMMENT '' NOT NULL , \n`runoob_author1216` varchar(40) CHARSET `utf8` COLLATE `utf8_general_ci` COMMENT '' NOT NULL , \n`submission_date1216` date COMMENT '' NULL \n, PRIMARY KEY (`runoob_id`)) engine=InnoDB AUTO_INCREMENT=200001 DEFAULT CHARSET=`utf8` DEFAULT COLLATE `utf8_general_ci` ROW_FORMAT= Dynamic comment = '' ;\n`
                 */
                ErrData: string;
                /**
                 * 具体的错误信息。
                 * @example `get metric list fail`
                 */
                ErrMsg: string;
                /**
                 * 日志的级别。
                 * @example `INFO`
                 */
                LogLevel: string;
                /**
                 * 报错的类型。
                 * @example `ForeignKey`
                 */
                ErrType: string;
            }[];
            /**
             * 当前运行中的子任务数量。
             * @example `0`
             */
            Current: string;
        }[];
    }[];
    FullNetCheckJobStatus: {
        JobName: string;
        State: string;
        JobId: string;
        ErrorItem: number;
        Code: string;
        Total: number;
        HostRegion: string;
        SrcRegion: string;
        DestRegion: string;
        SrcRegionCidr: string;
        DestRegionCidr: string;
        SourceEndpointType: string;
        DestinationEndpointType: string;
        JobProgress: {
            Skip: boolean;
            FinishTime: string;
            IgnoreFlag: string;
            DelaySeconds: number;
            DdlSql: string;
            State: string;
            BootTime: string;
            Item: string;
            Sub: string;
            Total: number;
            TargetNames: string;
            CanSkip: boolean;
            Names: string;
            ErrDetail: string;
            DiffRow: number;
            JobId: string;
            SourceSchema: string;
            DestSchema: string;
            ParentObj: string;
            ErrMsg: string;
            OrderNum: number;
            RepairMethod: string;
            Id: string;
            Logs: {
                ErrData: string;
                ErrMsg: string;
                LogLevel: string;
                ErrType: string;
            }[];
            Current: string;
        }[];
    }[];
    NetworkDiagnosisResult: {
        ModelVersion: string;
        Diagnosis: {
            EndpointType: string;
            Code: string;
            CnDocUrl: string;
            InternationalDocUrl: string;
            Result: string;
        }[];
    };
}
