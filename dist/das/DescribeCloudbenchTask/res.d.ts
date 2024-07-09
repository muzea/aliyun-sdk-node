export interface DescribeCloudbenchTaskResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
    /**
     * 详细信息列表，包括信息总数、错误码等。
     */
    Data: {
        /**
         * DTS的任务名称。
         * @example `RDS间迁移`
         */
        DtsJobName: string;
        /**
         * 任务失败的错误提示。
         * @example `DTS-070211: Connect Source DB failed. cause by [com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.][com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\n\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.][java.net.ConnectException:Connection timed out (Connection timed out)] About more information in [https://yq.aliyun.com/articles/499178].`
         */
        ErrorMessage: string;
        /**
         * 其他信息。
         * @example `Null`
         */
        External: string;
        /**
         * 备份类型。取值：
         * - **TIMESTAMP**：按备份时间。
         * - **BACKUPID**：按备份集ID。
         * @example `TIMESTAMP`
         */
        BackupType: string;
        /**
         * 阿里云账号ID。
         * @example `109141182625****`
         */
        UserId: string;
        /**
         * 目标实例的类型。取值：
         * - **Instance**（默认）：实例ID。
         * - **ConnectionString**：实例的连接地址。
         * @example `Instance`
         */
        DstType: string;
        /**
         * ECS的实例ID。
         * @example `i-bp1ecr5go2go1****`
         */
        EcsInstanceId: string;
        /**
         * 目标实例的唯一标识符号。
         * @example `hdm_d887b5ccf99fa0dc9a1e5aaac368****`
         */
        DstInstanceUuid: string;
        /**
         * 压测任务类型。取值：
         * - **pressure test**（默认）：智能压测，将从源实例上捕获的流量，按照目标实例规格支持的极限速度，在目标实例上进行回放。
         * - **smart pressure test**：生成压测，通过分析和学习短时间内在源实例上捕获的流量，生成和原始流量的业务模型和流量分布基本一致的流量进行持续压测，减少从源实例采集数据的时间，降低存储成本和性能开销。
         * @example `pressure test`
         */
        TaskType: string;
        /**
         * 压测的子步骤。取值：
         * - **NEW**：任务初始化。
         * - **WAIT_BUY_ECS**：新购ECS实例。
         * - **WAIT_START_ECS**：ECS实例启动。
         * - **WAIT_INSTALL_JDK**：安装JDK。
         * - **WAIT_INSTALL_DBGATEWAY**：安装DBGateway。
         * - **ADD_SECURITY_IPS_STEP**：配置安全组白名单。
         * - **ARCHIVE**：全量SQL归档。
         * - **DOWNLOAD**：下载全量SQL文件。
         * - **PROCEED**：预处理全量SQL文件。
         * - **PRE_LOAD**：预加载全量SQL文件。
         * - **VALIDATE**：功能验证。
         * - **PRESSURE**：性能压测。
         * @example `PROCEED`
         */
        BenchStep: string;
        /**
         * 压测任务版本。取值：
         * - **V2.0**
         * - **V3.0**
         * @example `V3.0`
         */
        Version: string;
        /**
         * 压测任务结束后的状态。取值：
         * - **WAIT_TARGET**：准备压测的目标实例。
         * - **WAIT_DBGATEWAY**：准备压测部署。
         * - **WAIT_SQL**：准备全量SQL。
         * - **WAIT_LOGIC**：准备开始回放流量。
         * >当压测任务执行完EndState设置的状态之后，任务将直接到达完成状态。
         * @example `WAIT_LOGIC`
         */
        EndState: string;
        /**
         * 源实例的唯一标识符号。
         * @example `a364e414-e68b-4e5c-9166-65b3a153****`
         */
        SrcInstanceUuid: string;
        /**
         * 压测机器类型。取值：
         * - **ECS**：您需要自己准备[数据库网关](~~64905~~)。
         * - **DAS_ECS**：DAS自动购买和部署的ECS。
         * @example `ECS`
         */
        ClientType: string;
        /**
         * 目前压测任务的状态。取值：
         * - **WAIT_TARGET**：准备压测的目标实例。
         * - **WAIT_DBGATEWAY**：准备压测部署。
         * - **WAIT_SQL**：准备全量SQL。
         * - **WAIT_LOGIC**：准备开始回放流量。
         * @example `WAIT_TARGET`
         */
        State: string;
        /**
         * 备用参数。
         * @example `None`
         */
        DstIp: string;
        /**
         * 备用参数。
         * @example `None`
         */
        SrcPublicIp: string;
        /**
         * 备份集ID，可通过查询备份列表接口[DescribeBackups](~~26273~~)获取。
         * @example `229132`
         */
        BackupId: string;
        /**
         * 全量SQL的复用信息。
         * @example `{"sqlUuid":"task_a37d2f07-45cb-****-a2a6-c66c62****","metaUuid":"task_211e2561-5c0c-486b-864c-56b511****","sqlFile":"cl-1620057600000-1800626.sc","metaFile":"cl-1620057600000-180****.meta"}`
         */
        SqlCompleteReuse: string;
        /**
         * 生成压测时间，单位为毫秒。
         * @example `86400000`
         */
        SmartPressureTime: number;
        /**
         * SQL归档状态，取值：
         * - **0**：未开始。
         * - **1**：完成。
         * - **2**：错误。
         * - **3**：运行中。
         * - **4**：无需下载。
         * @example `1`
         */
        ArchiveState: number;
        /**
         * 压测任务的运行状态。取值：
         * - **SUCCESS**：成功。
         * - **IGNORED**：忽略。
         * - **RUNNING**：运行中。
         * - **EXCEPTION**：异常。
         * @example `RUNNING`
         */
        Status: string;
        /**
         * 压测生成的临时目录。
         * @example `/tmp/bench/`
         */
        WorkDir: string;
        /**
         * 归档的OSS表名。
         * @example `custins15546355_161604665****`
         */
        ArchiveOssTableName: string;
        /**
         * DTS迁移任务ID。
         * @example `i03e3zty16i****`
         */
        DtsJobId: string;
        /**
         * DTS任务状态，取值：
         * - **NOT_STARTED**：未启动。
         * - **PRE_CHECKING**：预检查中。
         * - **PRE_CHECK_FAILED**：预检查失败。
         * - **CHECKING**：检查中。
         * - **MIGRATING**：迁移中。
         * - **CATCHED**：已经追平。
         * - **SUSPENDING**：暂停中。
         * - **MIGRATION_FAILED**：迁移失败。
         * - **FINISHED**：完成。
         * - **INITIALIZING**：同步初始化。
         * - **INITIALIZE_FAILED**：同步初始化失败。
         * - **SYNCHRONIZING**：同步中。
         * - **MODIFYING**：同步对象变更中。
         * - **SWITCHING**：切换中。
         * - **FAILED**：失败。
         * @example `CHECKING`
         */
        DtsJobState: number;
        /**
         * 目标实例的端口。
         * @example `3306`
         */
        DstPort: number;
        /**
         * DTS任务规格。
         * @example `medium`
         */
        DtsJobClass: string;
        /**
         * 压测机的数据库网关ID。
         * @example `58598b2af48a0193dfc16fc6964ef****`
         */
        ClientGatewayId: string;
        /**
         * 压测任务描述。
         * @example `test-das-bench-0501`
         */
        Description: string;
        /**
         * 压测内部任务返回的错误码。
         * @example `10910`
         */
        ErrorCode: string;
        /**
         * 压测中涉及的表名。
         * @example `[{"TABLE_NAME":"customer1","TABLE_SCHEMA":"tpcc"}]`
         */
        TableSchema: string;
        /**
         * DTS任务状态，取值：
         * - **NOT_STARTED**：未启动。
         * - **PRE_CHECKING**：预检查中。
         * - **PRE_CHECK_FAILED**：预检查失败。
         * - **CHECKING**：检查中。
         * - **MIGRATING**：迁移中。
         * - **CATCHED**：已经追平。
         * - **SUSPENDING**：暂停中。
         * - **MIGRATION_FAILED**：迁移失败。
         * - **FINISHED**：完成。
         * - **INITIALIZING**：同步初始化。
         * - **INITIALIZE_FAILED**：同步初始化失败。
         * - **SYNCHRONIZING**：同步中。
         * - **MODIFYING**：同步对象变更中。
         * - **SWITCHING**：切换中。
         * - **FAILED**：失败。
         * @example `PRE_CHECKING`
         */
        DtsJobStatus: string;
        /**
         * 源实例的数据库类型。
         * @example `RDS`
         */
        SrcInstanceArea: string;
        /**
         * 压测子步骤状态。取值：
         * - **NEW**：任务初始化。
         * - **RUNNING**：正在执行。
         * - **FAILED**：失败。
         * - **FINISHED**：已完成。
         * - **Terminated**：已终止。
         * - **Deleted**：已删除。
         * @example `FINISHED`
         */
        BenchStepStatus: string;
        /**
         * 任务来源。取值：
         * - **DAS**。
         * - **OPEN_API**。
         * @example `DAS`
         */
        Source: string;
        /**
         * 归档任务ID。
         * @example `'202105211430070112231480820340758****`
         */
        ArchiveJobId: string;
        /**
         * kafka的消费Topic。
         * @example `das`
         */
        Topic: string;
        /**
         * 压测任务的持续时间。
         * @example `864000`
         */
        RequestDuration: number;
        /**
         * 任务ID。
         * @example `e5cec704-0518-430f-8263-76f4dcds****`
         */
        TaskId: string;
        /**
         * 压测倍率。回放倍率必须是正整数，取值范围为：**0**~**30**，默认为**1**。
         * @example `1`
         */
        Rate: number;
    };
}
