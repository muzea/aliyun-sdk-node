export interface ModifyDBClusterParametersRequest {
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~98094~~)接口查看目标地域下所有的集群信息，包括集群ID。
     * @example `pc-**************`
     */
    "DBClusterId": string;
    /**
     * 参数及其值的JSON串，参数的值都是字符串类型，例如`{"wait_timeout":"86","innodb_old_blocks_time":"10"}`。
     * > * 您可以通过接口[DescribeDBClusterParameters](~~98122~~)查看PolarDB集群的参数。
     * > * 若目标集群为PolarDB PostgreSQL版或PolarDB PostgreSQL版（兼容Oracle），该参数必填。
     * > * 若目标集群为PolarDB MySQL版，您需在该参数或`ParameterGroupId`参数中选择一个传入。
     * @example `{"wait_timeout":"86","innodb_old_blocks_time":"10"}`
     */
    "Parameters"?: string;
    /**
     * 参数模板ID。
     * > * 您可以通过[DescribeParameterGroups](~~207178~~)接口查看参数模板ID。
     * > * 您需在该参数或`Parameters`参数中选择一个传入。
     * > * 仅PolarDB MySQL版支持该参数。
     * @example `pcpg-**************`
     */
    "ParameterGroupId"?: string;
    /**
     * 开始执行定时（即在目标时间段内执行）任务的最早时间。格式为`YYYY-MM-DDThh:mm:ssZ`（UTC）。
     * > * 开始时间的取值范围为未来24小时内的任意时间点。例如当前时间为`2021-01-14T09:00:00Z`，此处允许填入的开始时间范围为`2021-01-14T09:00:00Z`~`2021-01-15T09:00:00Z`。
     * > * 若该参数留空，默认立即执行任务。
     * @example `2022-04-28T14:00:00Z`
     */
    "PlannedStartTime"?: string;
    /**
     * 开始执行目标定时任务的最晚时间。格式为`YYYY-MM-DDThh:mm:ssZ`（UTC）。
     * > * 最晚时间需晚于开始时间的30分钟或以上。
     * > * 若设置了`PlannedStartTime`但未指定该参数，执行目标任务的最晚时间默认为`开始时间+30分钟`。例如当设置`PlannedStartTime`为`2021-01-14T09:00:00Z`且该参数留空时，目标任务最晚将于`2021-01-14T09:30:00Z`开始执行。
     * @example `2022-04-28T14:30:00Z`
     */
    "PlannedEndTime"?: string;
    /**
     * 立即执行或定时执行修改参数并重启集群。取值：
     * - false（默认值）：定时执行
     *
     * - true：立即执行
     * @example `false`
     */
    "FromTimeService"?: boolean;
}
