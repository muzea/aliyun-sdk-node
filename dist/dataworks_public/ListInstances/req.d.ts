export interface ListInstancesRequest {
    /**
     * 运行的环境，包括PROD（生产环境）和DEV（开发环境）。
     * @example `PROD`
     */
    "ProjectEnv": string;
    /**
     * 节点的ID。您可以调用[ListNodes](~~173979~~)查看节点ID信息。
     * @example `100000000000`
     */
    "NodeId"?: number;
    /**
     * 节点的名称。您可以调用[ListNodes](~~173979~~)查看节点名称。
     * @example `openmr_8****`
     */
    "NodeName"?: string;
    /**
     * 负责人的ID，即工作空间管理员的账号UID。您可登录阿里云控制台后，在账号管理的安全管理中查看账号UID。
     * @example `193379****`
     */
    "Owner"?: string;
    /**
     * 工作空间的ID。您可以调用[ListProjects](~~178393~~)查看空间ID信息。
     * @example `12345`
     */
    "ProjectId": number;
    /**
     * 业务流程的名称。您可以调用[ListBusiness](~~173945~~)查看业务流程信息。
     * @example `test_bizName`
     */
    "BizName"?: string;
    /**
     * 节点的类型。您可以调用[ListNodes](~~173979~~)查看节点类型。
     * @example `ODPS_SQL`
     */
    "ProgramType"?: string;
    /**
     * 页码数，用于翻页。最小值为1，最大值为100。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * DagId可以是执行补数据[RunCycleDagNodes](~~212961~~)，冒烟测试[RunSmokeTest](~~212949~~)，手动业务流程[RunManualDagNodes](~~212830~~)等接口返回的DagId。
     * @example `11111`
     */
    "DagId"?: number;
    /**
     * 获取实例列表的日期，格式为yyyy-MM-dd HH:mm:ss。
     * @example `2020-02-02 00:00:00`
     */
    "Bizdate"?: string;
    /**
     * 获取实例列表的开始日期，格式为yyyy-MM-dd HH:mm:ss。
     * @example `2020-02-02 00:00:00`
     */
    "BeginBizdate"?: string;
    /**
     * 获取实例列表的结束日期，格式为yyyy-MM-dd HH:mm:ss。
     * @example `2020-02-03 00:00:00`
     */
    "EndBizdate"?: string;
    /**
     * 任务的状态，取值如下：
     * - NOT_RUN（未运行）
     * - WAIT_TIME（等待定时间DueTime或CycTime到来）
     * - WAIT_RESOURCE（等待资源）
     * - RUNNING（运行中）
     * - CHECKING（下发给数据质量进行数据校验）
     * - CHECKING_CONDITION（正在进行分支条件校验）
     * - FAILURE（执行失败）
     * - SUCCESS（执行成功）。
     * @example `NOT_RUN`
     */
    "Status"?: string;
    /**
     * 返回值的排序规则。取值如下：
     * - CREATE_TIME_DESC：按照创建时间降序返回
     * - INSTANCE_ID_DESC：默认值，按照实例ID降序返回。
     * @example `INSTANCE_ID_DESC`
     */
    "OrderBy"?: string;
}
