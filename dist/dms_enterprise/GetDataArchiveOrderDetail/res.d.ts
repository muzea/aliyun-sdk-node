export interface GetDataArchiveOrderDetailResponse {
    /**
     * 用于跟踪服务请求。
     * @example `0a06e1e316757357507896067d3780`
     */
    TraceId: string;
    /**
     * 查询是否成功：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `User [199295823****] not exist`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `NoPermission`
     */
    ErrorCode: string;
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `4161CE36-28DF-5191-8A6F-A17076A0B124`
     */
    RequestId: string;
    /**
     * 数据归档工单详情。
     */
    DataArchiveOrderDetail: {
        /**
         * 数据归档工单的备注信息。
         * @example `Archiving of test results`
         */
        Comment: string;
        /**
         * 工单提交者。
         * @example `dmstest`
         */
        Committer: string;
        /**
         * 工单提交者的用户ID，非阿里云UID。
         * @example `26***`
         */
        CommitterId: number;
        /**
         * 工单的创建时间。
         * @example `2023-05-15 16:00:48`
         */
        GmtCreate: string;
        /**
         * 最后一次修改工单的时间。
         * @example `2023-05-23 16:00:48`
         */
        GmtModified: string;
        /**
         * 数据归档工单ID。
         * @example `868****`
         */
        Id: number;
        /**
         * 工单的额外信息。
         */
        PluginExtraData: {
            /**
             * 工作流信息。
             */
            DagInfo: {
                /**
                 * 创建人的用户ID。
                 * @example `59****`
                 */
                CreatorId: string;
                /**
                 * 定时任务开始调度的时间。此时间点之前任务流不进行调度。
                 * @example `1970-01-01`
                 */
                CronBeginDate: string;
                /**
                 * 定时任务结束调度的时间。此时间点之后任务流不再进行调度。
                 * @example `9999-01-01`
                 */
                CronEndDate: string;
                /**
                 * 归档任务是否是周期任务。返回值：
                 * - **true**
                 * - **false**
                 * @example `false`
                 */
                CronTrigger: boolean;
                /**
                 * 是否用于数仓开发。
                 * > 该字段为暂不使用的保留字段。
                 * @example `false`
                 */
                DWDevelop: boolean;
                /**
                 * 工作流名称。
                 * @example `data-archive-9099197`
                 */
                DagName: string;
                /**
                 * 工作流Owner的用户ID。
                 * @example `13****`
                 */
                DagOwnerId: string;
                /**
                 * 部署记录ID。
                 * @example `93***`
                 */
                DeployId: number;
                /**
                 * 工作流的描述信息。
                 * @example `order id:9099197`
                 */
                Description: string;
                /**
                 * 可编辑工作流版本的ID。
                 * @example `24***`
                 */
                EditDagId: number;
                /**
                 * 创建工作流的时间。
                 * @example `2023-05-15 16:00:48`
                 */
                GmtCreate: string;
                /**
                 * 最后修改工作流的时间。
                 * @example `2023-06-15 16:00:48`
                 */
                GmtModified: string;
                /**
                 * 任务流ID。
                 * @example `24***`
                 */
                Id: number;
                /**
                 * 是否公开该工作流。返回值：
                 * - **0**：不公开。
                 * - **1**：公开。
                 * @example `0`
                 */
                IsPublic: number;
                /**
                 * 是否为历史任务。返回值：
                 * - **true**
                 * - **false**
                 * @example `false`
                 */
                Legacy: boolean;
                /**
                 * 是否为系统创建。返回值：
                 * - **true**
                 * - **false**
                 * @example `false`
                 */
                System: boolean;
                /**
                 * 租户ID。
                 * @example `5***`
                 */
                TenantId: string;
                /**
                 * 该工作流是否触发运行一次。返回值：
                 * - **true**
                 * - **false**
                 * @example `false`
                 */
                TriggerOnce: boolean;
            };
            /**
             * 数据归档工单相关的数据库信息。
             */
            DbBaseInfo: {
                /**
                 * 实例别名。
                 * @example `tf-testAccDMSEnterpriseLogicDatabase853****`
                 */
                Alias: string;
                /**
                 * 数据库设置的查询超时时间。
                 * @example `600`
                 */
                AlterTimeout: number;
                /**
                 * 是否开启数据资产访问控制。返回值：
                 * - **true**
                 * - **false**
                 * @example `true`
                 */
                AssetControl: boolean;
                /**
                 * 实例在实例列表中的名称。
                 * @example `test`
                 */
                CatalogName: string;
                /**
                 * 实例增加DMS白名单的情况。
                 * @example `whitelist_done`
                 */
                ClusterNode: string;
                /**
                 * 数据库ID（DatabaseId），可调用[SearchDatabase](~~141876~~)接口获取该参数的值。
                 * >您也可以调用[ListDatabases](~~141873~~)接口获取物理库的DatabaseId值，调用[ListLogicDatabases](~~141874~~)接口获取逻辑库的DatabaseId值。
                 * @example `348****`
                 */
                DbId: number;
                /**
                 * 数据库类型，取值请参见[DbType参数说明](~~198106~~)。
                 * @example `MySQL`
                 */
                DbType: string;
                /**
                 * 实例DBA的用户ID。
                 * @example `16****`
                 */
                DbaId: number;
                /**
                 * 实例DBA的昵称。
                 * @example `DBA`
                 */
                DbaName: string;
                /**
                 * 完整的数据库地址。
                 * @example `test@rm-2ze756u8837****.mysql.rds.aliyuncs.com:3306 [test]`
                 */
                Description: string;
                /**
                 * 数据库编码。
                 * @example `utf8`
                 */
                Encoding: string;
                /**
                 * 数据库环境类型，返回值：
                 * - **product**：生产环境。
                 * - **dev**：开发环境。
                 * - **pre**：预发环境。
                 * - **test**：测试环境。
                 * - **sit**：SIT环境。
                 * - **uat**：UAT环境。
                 * - **pet**：压测环境。
                 * - **stag**：STAG环境。
                 * @example `product`
                 */
                EnvType: string;
                /**
                 * 是否为关注的实例。返回值：
                 * - **true**
                 * - **false**
                 * @example `false`
                 */
                Follow: boolean;
                /**
                 * 数据库连接地址。
                 * @example `rm-2ze756u8837****.mysql.rds.aliyuncs.com`
                 */
                Host: string;
                /**
                 * 数据库所在地域。
                 * @example `cn-beijing`
                 */
                Idc: string;
                /**
                 * 数据库所在地域的名称。
                 * @example `cn-beijing`
                 */
                IdcTitle: string;
                /**
                 * 数据库所属的实例ID。
                 * @example `175****`
                 */
                InstanceId: number;
                /**
                 * 实例来源，返回值如下：
                 * - **RDS**：阿里云数据库实例。
                 * - **ECS_OWN**：阿里云ECS自建库实例。
                 * - **PUBLIC_OWN**：公网自建库实例。
                 * - **VPC_ID**：VPC专线IDC数据库实例。
                 * - **GATEWAY**：数据库网关实例。
                 * @example `RDS`
                 */
                InstanceSource: string;
                /**
                 * 上一次获取数据库信息的时间。
                 * @example `2023-05-14 18:34:45`
                 */
                LastSyncTime: string;
                /**
                 * 实例级别。
                 * @example `中`
                 */
                Level: string;
                /**
                 * 数据库是否为逻辑库。返回值：
                 * - **true**
                 * - **false**
                 * @example `false`
                 */
                Logic: boolean;
                /**
                 * 数据库Owner的用户ID，多个用户ID将以数组形式保存。可调用[GetUser](~~147098~~)或[ListUsers](~~141938~~)接口获取UserId的值。
                 * >用户ID的参数名为UserId。
                 */
                OwnerIds: number[];
                /**
                 * 数据库Owner的用户名列表。
                 */
                OwnerNames: string[];
                /**
                 * 数据库的连接端口。
                 * @example `3306`
                 */
                Port: number;
                /**
                 * 数据库名。
                 * @example `test`
                 */
                SchemaName: string;
                /**
                 * 数据库搜索名。
                 * @example `test@rm-2ze756u8837****.mysql.rds.aliyuncs.com:3306 [test]`
                 */
                SearchName: string;
                /**
                 * 实例的管控模式详情。
                 */
                StandardGroup: {
                    /**
                     * 实例的引擎类型，取值请参见[DbType参数说明](~~198106~~)。
                     * @example `MySQL`
                     */
                    DbType: string;
                    /**
                     * 安全规则集描述。
                     * @example `adb_mysql default`
                     */
                    Description: string;
                    /**
                     * 实例的管控模式是否为自由操作或稳定变更。返回值：
                     * - **true**
                     * - **false**
                     * @example `false`
                     */
                    FreeOrStable: boolean;
                    /**
                     * 添加安全规则的时间。
                     * @example `2020-05-24 14:12:32`
                     */
                    GmtCreate: string;
                    /**
                     * 修改安全规则的时间。
                     * @example `2020-05-25 14:12:32`
                     */
                    GmtModified: string;
                    /**
                     * 实例关联的管控模式类型。返回值：
                     * - **COMMON**：安全协同。
                     * - **NONE_CONTROL**：自由操作。
                     * - **STABLE**：稳定变更。
                     * @example `COMMON`
                     */
                    GroupMode: string;
                    /**
                     * 管控模式对应的安全规则名称。
                     * @example `adb_mysql default`
                     */
                    GroupName: string;
                    /**
                     * 安全规则ID。
                     * @example `24***`
                     */
                    Id: number;
                    /**
                     * 最近修改安全规则的用户ID。
                     * @example `12****`
                     */
                    LastMenderId: number;
                };
                /**
                 * 实例状态。返回值：
                 * - **NORMAL**： 正常。
                 * - **DISABL**E：禁用。
                 * - **OFFLINE**：下线。
                 * - **NOT_EXIST**：不存在。
                 * @example `NORMAL`
                 */
                State: string;
                /**
                 * 表数量。
                 * @example `201`
                 */
                TableCount: number;
                /**
                 * tns名称。
                 * @example `TNS_4010`
                 */
                TnsName: string;
                /**
                 * 单元化类型。
                 * @example `-1`
                 */
                UnitType: string;
            };
            /**
             * 归档任务的总数量。
             * @example `2`
             */
            InstanceTotal: number;
            /**
             * 归档任务列表。
             */
            Instances: {
                /**
                 * 任务流的业务时间，时间格式为yyyy-MM-DD HH:mm:ss。
                 * @example `2023-05-14 16:00:57`
                 */
                BusinessTime: string;
                /**
                 * 整个任务的ID，可调用[ListTaskFlow](~~424565~~)或[ListLhTaskFlowAndScenario](~~426672~~)接口获取该参数的值。
                 * @example `37***`
                 */
                DagId: number;
                /**
                 * 任务流结束运行的时间，时间格式为yyyy-MM-DD HH:mm:ss。
                 * @example `2022-06-04 15:14:00`
                 */
                EndTime: string;
                /**
                 * 创建任务流的时间。
                 * @example `2023-05-14 16:00:57`
                 */
                GmtCreate: string;
                /**
                 * 更新任务流的时间。
                 * @example `2023-05-14 16:00:57`
                 */
                GmtModified: string;
                /**
                 * 历史任务流ID。
                 * @example `32***`
                 */
                HistoryDagId: number;
                /**
                 * 在运行任务流中的实例ID。
                 * @example `24***`
                 */
                Id: number;
                /**
                 * 上次任务流运行的情况。
                 * @example `{
                      "nodes": [
                            48**
                      ],
                      "edges": {}
                }`
                 */
                LastRunningContext: string;
                /**
                 * 本次任务运行的详细信息。
                 * @example `归档任务日志：2023-05-15 16:37:48[GMT+08:00] INFO - Resource Control is active!\n2023-05-15 16:37:48[GMT+08:00] INFO - Starting job j_4834 at Mon May 15 16:37:48 CST 2023`
                 */
                Msg: string;
                /**
                 * 任务运行状态。返回值如下：
                 * - **0**：等待执行。
                 * - **1**：运行中。
                 * - **2**：暂停。
                 * - **3**：失败。
                 * - **4**：成功。
                 * - **5**：运行结束。
                 * @example `4`
                 */
                Status: number;
                /**
                 * 租户ID。
                 * @example `5***`
                 */
                TenantId: string;
                /**
                 * 触发类型。返回值如下：
                 * - **0**：周期调度。
                 * - **1**：手动运行。
                 * @example `1`
                 */
                TriggerType: number;
                /**
                 * 版本号。
                 * @example `1`
                 */
                Version: string;
            }[];
            /**
             * 下次任务触发时间。
             */
            NextFireTimeResult: {
                /**
                 * 周期触发类型。
                 * @example `NOT_SET`
                 */
                CronFireType: string;
            };
            /**
             * 分页页码。
             * @example `10`
             */
            PageIndex: number;
            /**
             * 每页返回的结果个数。
             * @example `20`
             */
            PageSize: number;
            /**
             * 归档生成的临时表名（根据归档任务ID区分）。
             * @example `{
                  "803***": [
                        "tmp_dms_21321_20230704144336_temp_test_check"
                  ]
            }`
             */
            TempTableNameMap: any;
        };
        /**
         * 创建工单参数，格式为JSON形式的字符串。详细信息，请参见[PluginType参数说明](~~429109~~)。
         */
        PluginParam: {
            /**
             * 归档目标类型。
             * @example `inner_oss`
             */
            ArchiveMethod: string;
            /**
             * 归档库表Schema。
             * @example `test`
             */
            DbSchema: string;
            /**
             * 是否为逻辑库，返回值：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            Logic: boolean;
            /**
             * 归档后置行为。
             */
            OrderAfter: string[];
            /**
             * 运行方法，指立刻运行还是指定时间运行任务。
             * @example `now`
             */
            RunMethod: string;
            /**
             * 源数据库的ID。
             * @example `12***`
             */
            SourceDatabaseId: number;
            /**
             * 归档的表列表和过滤条件。
             */
            TableIncludes: {
                /**
                 * 表名。
                 * @example `tm_insured_cb`
                 */
                TableName: string;
                /**
                 * 过滤条件。
                 * @example `id<1000或者gmt_create<'2023-05-14 16:00:57'`
                 */
                TableWhere: string;
            }[];
            /**
             * 库表映射。
             */
            TableMapping: string[];
            /**
             * 目标实例ID。
             * @example `12***`
             */
            TargetInstanceId: string;
            /**
             * 定义的时间变量，用于周期归档。
             */
            Variables: string[];
        };
        /**
         * 工单类型对应的PluginType，数据归档的PluginType为DATA_ARCHIVE。更多信息，请参见[PluginType参数说明](~~429109~~)。
         * @example `DATA_ARCHIVE`
         */
        PluginType: string;
        /**
         * 工单相关人的用户ID。
         */
        RelatedUserList: number[];
        /**
         * 工单相关人的昵称列表。
         */
        RelatedUserNickList: string[];
        /**
         * 工单状态码，返回值：
         * - **new**：新建。
         * - **toaudit**：审批中。
         * - **approved**：审批通过。
         * - **reject**：审批拒绝。
         * - **processing**：执行中。
         * - **success**：执行成功。
         * - **closed**：已关闭。
         * @example `processing`
         */
        StatusCode: string;
        /**
         * 工单状态描述。
         * @example `正在执行工单任务。`
         */
        StatusDesc: string;
        /**
         * 审批流ID，可调用[GetOrderBaseInfo](~~144642~~)接口获取该参数的值。
         * @example `29****`
         */
        WorkflowInstanceId: number;
        /**
         * 审批描述信息。
         * @example `审批通过`
         */
        WorkflowStatusDesc: string;
    };
}
