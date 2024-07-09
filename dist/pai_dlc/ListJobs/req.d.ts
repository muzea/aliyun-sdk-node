export interface ListJobsRequest {
    /**
     * 任务名称，支持模糊查询，大小写不敏感，不支持通配符。
     * 例如：输入test，可以匹配test-job1、job-test、job-test2或job-Test；但是不能匹配job-t1。
     * 默认为空，代表任意任务名称。
     * @example `tf-mnist-test`
     */
    "DisplayName"?: string;
    /**
     * 任务类型，可以查询任意任务类型。默认为空，代表所有类型。支持的任务类型如下：
     * - TFJob
     * - PyTorchJob
     * - XGBoostJob
     * - OneFlowJob
     * - ElasticBatchJob
     * @example `TFJob`
     */
    "JobType"?: string;
    /**
     * 任务状态；默认为空，代表任意状态。
     * @example `Running`
     */
    "Status"?: string;
    /**
     * 查询区间的起始时间；使用任务的创建时间来过滤。
     * @example `2020-11-08T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 查询区间的截止时间；使用任务的创建时间来过滤。
     * @example `2020-11-09T14:45:00Z`
     */
    "EndTime"?: string;
    /**
     * 分页查询，指定当前需要返回的页码，起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询中，指定每页返回的任务数量。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 返回任务列表的排序字段，枚举型：
     * - DisplayName
     * - JobType
     * - Status
     * - GmtCreateTime
     * - GmtFinishTime
     * @example `GmtCreateTime`
     */
    "SortBy"?: string;
    /**
     * 排列顺序，枚举类型：
     * - desc：降序。
     * - asc：升序。
     * @example `desc`
     */
    "Order"?: string;
    /**
     * 是否只查询当前用户提交的任务列表。
     * @example `true`
     */
    "ShowOwn"?: boolean;
    /**
     * 工作空间ID。如何获取工作空间ID，请参见[ListWorkspaces](~~449124~~)。
     * @example `1****`
     */
    "WorkspaceId"?: string;
    /**
     * 资源组ID。如何查询专有资源组ID，详情请参见[准备及管理DLC资源组集群](https://help.aliyun.com/document_detail/202827.html#section-yhx-u5z-nh8)。
     * @example `r*****`
     */
    "ResourceId"?: string;
    /**
     * 任务关联用户ID。
     * @example `16****`
     */
    "BusinessUserId"?: string;
    /**
     * 调用方。
     * @example `local`
     */
    "Caller"?: string;
    /**
     * 用于过滤的标签。
     */
    "Tags"?: any;
    /**
     * 过滤指定工作流ID创建的任务。
     * @example `flow-*******`
     */
    "PipelineId"?: string;
    /**
     * 是否跨工作空间获取任务列表，需要配合`ShowOwn=true`参数使用，可以查询当前用户最近提交的任务列表。
     * @example `false`
     */
    "FromAllWorkspaces"?: boolean;
    /**
     * 任务ID，不支持模糊查询，对大小写不敏感。不支持通配符。
     * 默认为空，代表任意任务ID。
     * @example `dlc********`
     */
    "JobId"?: string;
    /**
     * 用于过滤的用户ID
     */
    "UserIdForFilter"?: string;
    /**
     * 提交作业用户名，支持模糊匹配
     */
    "Username"?: string;
    /**
     * 资源组名称
     */
    "ResourceQuotaName"?: string;
}
