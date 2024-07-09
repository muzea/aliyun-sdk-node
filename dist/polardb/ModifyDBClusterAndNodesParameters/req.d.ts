export interface ModifyDBClusterAndNodesParametersRequest {
    /**
     * 集群ID。
     * @example `pc-****************`
     */
    "DBClusterId": string;
    /**
     * 节点ID。通过设置该参数可以修改集群参数和指定节点的参数。多个节点ID间用英文逗号（,）分隔。
     * > 当该参数为空时，则表示只修改集群参数。
     * @example `pi-****************,pi-**********,`
     */
    "DBNodeIds"?: string;
    /**
     * 参数及参数值的JSON串。
     * @example `{"wait_timeout":"86","innodb_old_blocks_time":"10"}`
     */
    "Parameters"?: string;
    /**
     * 参数模板ID。
     * @example `pcpg-**************`
     */
    "ParameterGroupId"?: string;
    /**
     * 开始执行定时（即在目标时间段内执行）任务的最早时间。格式为`YYYY-MM-DDThh:mm:ssZ`（UTC）。
     * > * 开始时间的取值范围为未来24小时内的任意时间点。例如当前时间为`2021-01-14T09:00:00Z`，此处允许填入的开始时间范围为`2021-01-14T09:00:00Z`~`2021-01-15T09:00:00Z`。
     * > * 若该参数留空，默认立即执行任务。
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
     * 立即执行或定时执行修改参数并重启集群。取值：
     * - **false**（默认值）：定时执行
     * - **true**：立即执行
     * @example `false`
     */
    "FromTimeService"?: boolean;
}
