export interface UpgradeDBClusterVersionRequest {
    /**
     * 集群ID。
     * >您可以通过[DescribeDBClusters](~~98094~~)接口查看账号下所有集群的详细信息（如集群ID）。
     * @example `pc-****************`
     */
    "DBClusterId": string;
    /**
     * 内核版本升级策略。取值范围如下：
     * - **HOT**：热升级
     * - **COLD**：冷升级。目前仅PolarDB MySQL版8.0集群版支持该升级方式。
     * @example `HOT`
     */
    "UpgradePolicy"?: string;
    /**
     * 内核版本升级标签。取值固定为**INNOVATE**。
     * >- 该参数仅适用于PolarDB MySQL版8.0.1版本升级至PolarDB MySQL版8.0.2版本。
     * >- 当传入该参数时，`UpgradePolicy`必须传入**COLD**。
     * @example `INNOVATE`
     */
    "UpgradeLabel"?: string;
    /**
     * 开始执行定时（即在目标时间段内执行）内核版本升级任务的最早时间。格式为`YYYY-MM-DDThh:mm:ssZ`（UTC）。
     * > * 开始时间的取值范围为未来24小时内的任意时间点。例如当前时间为`2021-01-14T09:00:00Z`，此处允许填入的开始时间范围为`2021-01-14T09:00:00Z`~`2021-01-15T09:00:00Z`。
     * >* 若该参数留空，默认立即执行内核版本升级任务。
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
     * 立即执行或定时执行内核版本升级。取值范围如下：
     * - **false**（默认值）：定时执行
     * - **true**：立即执行
     * > 调用该接口时无需使用该参数。
     * @example `false`
     */
    "FromTimeService"?: boolean;
    /**
     * 升级类型。取值范围如下：
     * - **PROXY**：仅升级数据库代理（Proxy）
     * - **DB**：仅升级内核引擎
     * - **ALL**（默认值）：同时升级数据库代理（Proxy）和内核引擎
     * @example `PROXY`
     */
    "UpgradeType"?: string;
    /**
     * 目标版本的VersionCode，参数取值可从[DescribeDBClusterVersion](~~2319145~~)接口获取。
     * @example `20230707`
     */
    "TargetDBRevisionVersionCode"?: string;
    "TargetProxyRevisionVersionCode"?: string;
}
