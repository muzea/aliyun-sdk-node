export interface ModifyDBClusterPrimaryZoneRequest {
    /**
     * 集群ID。
     * >您可以调用[DescribeDBClusters](~~173433~~)接口查看目标地域下所有的集群信息，包括集群ID。
     * @example `pc-**************`
     */
    "DBClusterId": string;
    /**
     * 新的可用区ID。
     * > 可通过接口[DescribeRegions](~~98041~~)查看可用的可用区。
     * @example `cn-hangzhou-g`
     */
    "ZoneId": string;
    /**
     * 更换的可用区类型。取值范围如下：
     * - **Primary**：主可用区。
     * - **Standby**：备可用区。
     * @example `Primary`
     */
    "ZoneType"?: string;
    /**
     * 目标可用区的虚拟交换机（VSwitch）ID。
     * >- 当集群为PolarDB O引擎或PolarDB PostgreSQL引擎时，该参数必填。
     * >- 当集群为PolarDB MySQL引擎时，如果目标可用区没有创建过Vswitch，则使用默认的Vswitch，该参数非必填。如果目标可用区已创建过Vswitch，该参数必填。
     * @example `vsw-**************`
     */
    "VSwitchId"?: string;
    /**
     * 是否回切原可用区，取值范围如下：
     * - true：回切原可用区。
     * - false：不回切原可用区。
     * @example `false`
     */
    "IsSwitchOverForDisaster"?: string;
    /**
     * 开始执行定时（即在目标时间段内执行）变更可用区任务的最早时间。格式为`YYYY-MM-DDThh:mm:ssZ`（UTC）。
     * > * 开始时间的取值范围为未来24小时内的任意时间点。例如当前时间为`2021-01-14T09:00:00Z`，此处允许填入的开始时间范围为`2021-01-14T09:00:00Z`~`2021-01-15T09:00:00Z`。
     * >* 若该参数留空，默认立即执行变更可用区任务。
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
     * 立即执行或定时执行更换可用区。取值范围如下：
     * - false（默认值）：定时执行。
     * - true：立即执行。
     * @example `false`
     */
    "FromTimeService"?: boolean;
    /**
     * 切换可用区支持指定的专有网络ID。
     * @example `vpc-**********`
     */
    "VPCId"?: string;
}
