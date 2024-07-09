export interface ListTensorboardsRequest {
    /**
     * 是否显示详情。取值如下：
     * - true：显示详情。
     * - false：不显示详情。
     * @example `true`
     */
    "Verbose"?: boolean;
    /**
     * 工作空间ID。根据工作空间ID来获取Tensorboard列表。如何获取工作空间ID，请参见[ListWorkspaces](~~449124~~)。
     * @example `380`
     */
    "WorkspaceId"?: string;
    /**
     * 数据来源。目前仅支持DLC训练任务，即job。
     * @example `job`
     */
    "SourceType"?: string;
    /**
     * 数据来源ID。如何获取任务ID，请参见[ListJobs](~~459676~~)。
     * @example `dlc-xxxxxx`
     */
    "SourceId"?: string;
    /**
     * Tensorboard展示名称。
     * @example `TestTensorboard`
     */
    "DisplayName"?: string;
    /**
     * Tensorboard状态，取值如下：
     * - Creating：创建中。
     * - Running：运行中。
     * - Stopped：已停止。
     * - Succeeded：已成功。
     * - Failed：已失败。
     * @example `Running`
     */
    "Status"?: string;
    /**
     * 查询区间的起始时间。使用Tensorboard的创建UTC时间来过滤。若为空，则默认为当前时间的7天之前。
     * @example `2020-11-08T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 查询区间的截止时间。使用Tensorboard的创建UTC时间来过滤。若为空，则默认为当前时间。
     * @example `2020-11-09T14:45:00Z`
     */
    "EndTime"?: string;
    /**
     * 按返回的以下字段排序。
     * - DisplayName：任务名称。
     * - GmtCreateTime：任务创建时间。
     * @example `GmtCreateTime`
     */
    "SortBy"?: string;
    /**
     * 分页查询，指定当前需要返回的页码，起始值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询中，指定每页返回的Tensorboard数量。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 排序顺序。取值如下：
     * - desc：降序。
     * - asc：升序。
     * @example `desc`
     */
    "Order"?: string;
    /**
     * 根据DLC任务ID来过滤Tensorboard任务。如何获取任务ID，请参见[ListJobs](~~459676~~)。
     * @example `dlc-xxx`
     */
    "JobId"?: string;
    /**
     * 根据Tensorboard ID，来过滤Tensorboard列表。
     * @example `tensorboard-xxx`
     */
    "TensorboardId"?: string;
    /**
     * 是否只返回当前登录者所创建的Tensorboard
     * @example `false`
     */
    "ShowOwn"?: boolean;
    /**
     * Tensorboard任务的付费类型。Free代表使用了免费资源的Tensorboard任务。Postpaid代表使用了后付费资源的Tensorboard任务。
     * @example `Postpaid`
     */
    "PaymentType"?: string;
    "UserId"?: string;
    "Username"?: string;
}
