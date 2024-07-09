export interface ModifyDBNodeClassRequest {
    /**
     * 集群ID。
     * @example `pc-*************`
     */
    "DBClusterId": string;
    /**
     * 变更类型，取值范围如下：
     * * **Upgrade**：升级规格
     * * **Downgrade**：降级规格
     * @example `Upgrade`
     */
    "ModifyType": string;
    /**
     * 所有节点的目标规格，请参见[计算节点规格](~~102542~~)。
     * @example `polar.mysql.x4.large`
     */
    "DBNodeTargetClass": string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，保证在不同请求间唯一，大小写敏感、不超过64个ASCII字符。
     * @example `6000170000591aed949d0f54a343f1a4233c1e7d1c5c******`
     */
    "ClientToken"?: string;
    /**
     * 开始执行定时（即在目标时间段内执行）升降级配置任务的最早时间。格式为`YYYY-MM-DDThh:mm:ssZ`（UTC）。
     * > * 当`ModifyType`取值为`Upgrade`或`Downgrade`时，该参数生效。
     * >* 开始时间的取值范围为未来24小时内的任意时间点。例如当前时间为`2021-01-14T09:00:00Z`，此处允许填入的开始时间范围为`2021-01-14T09:00:00Z`~`2021-01-15T09:00:00Z`。
     * >* 若该参数留空，默认立即执行升级配置任务。
     * @example `2021-01-14T09:00:00Z`
     */
    "PlannedStartTime"?: string;
    /**
     * 开始执行目标定时任务的最晚时间。格式为`YYYY-MM-DDThh:mm:ssZ`（UTC）。
     * > * 最晚时间需晚于开始时间的30分钟或以上。
     * > * 若设置了`PlannedStartTime`但未指定该参数，执行目标任务的最晚时间默认为`开始时间+30分钟`。例如当设置`PlannedStartTime`为`2021-01-14T09:00:00Z`且该参数留空时，目标任务最晚将于`2021-01-14T09:30:00Z`开始执行。
     * @example `2021-01-14T09:30:00Z`
     */
    "PlannedEndTime"?: string;
    /**
     * 集群子系列。取值范围如下：
     * - **normal_exclusive**：独享规格
     * - **normal_general**：通用规格
     * 若独享共享之间规格相互变配，subcategory 这个字段为必填项
     * @example `normal_general`
     */
    "SubCategory"?: string;
    /**
     * 节点类型。固定取值为DLNode。
     * @example `DLNode`
     */
    "DBNodeType"?: string;
}
