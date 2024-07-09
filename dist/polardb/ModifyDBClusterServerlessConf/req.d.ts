export interface ModifyDBClusterServerlessConfRequest {
    /**
     * Serverless集群ID。
     * @example `pc-bp10gr51qasnl****`
     */
    "DBClusterId": string;
    /**
     * 单节点伸缩下限。取值范围：1~31。单位：PCU。
     * @example `1`
     */
    "ScaleMin"?: string;
    /**
     * 单节点伸缩上限。取值范围：1~32。单位：PCU。
     * @example `10`
     */
    "ScaleMax"?: string;
    /**
     * 只读节点个数的伸缩下限。取值范围：0~15。
     * @example `1`
     */
    "ScaleRoNumMin"?: string;
    /**
     * 只读节点个数的伸缩上限。取值范围：0~15。
     * @example `2`
     */
    "ScaleRoNumMax"?: string;
    /**
     * 是否开启无活动暂停。取值范围如下：
     * - **true**：开启
     * - **false**（默认）：关闭
     * @example `true`
     */
    "AllowShutDown"?: string;
    /**
     * 无活动暂停的检测时长。
     * 取值范围：300~86,400。单位秒。
     * >检测时长必须是300秒的倍数。
     * @example `10`
     */
    "SecondsUntilAutoPause"?: string;
    /**
     * 只读列存节点个数下限。取值范围：0～7。
     * @example `1`
     */
    "ScaleApRoNumMin"?: string;
    /**
     * 只读列存节点个数上限。取值范围：0～7。
     * @example `1`
     */
    "ScaleApRoNumMax"?: string;
    /**
     * 开始执行定时（即在目标时间段内执行）变更主可用区任务的最早时间。格式为YYYY-MM-DDThh:mm:ssZ（UTC）。
     * >开始时间的取值范围为未来24小时内的任意时间点。例如当前时间为2021-01-14T09:00:00Z，此处允许填入的开始时间范围为2021-01-14T09:00:00Z~2021-01-15T09:00:00Z。若该参数留空，默认立即执行变更主可用区任务。
     * @example `2021-01-14T09:00:00Z`
     */
    "PlannedStartTime"?: string;
    /**
     * 开始执行目标定时任务的最晚时间。格式为YYYY-MM-DDThh:mm:ssZ（UTC）。
     * > 最晚时间需晚于开始时间的30分钟或以上。若设置了PlannedStartTime但未指定该参数，执行目标任务的最晚时间默认为开始时间+30分钟。例如当设置PlannedStartTime为2021-01-14T09:00:00Z且该参数留空时，目标任务最晚将于2021-01-14T09:30:00Z开始执行。
     * @example `2021-01-14T09:30:00Z`
     */
    "PlannedEndTime"?: string;
    /**
     * 立即执行或定时执行内核版本升级。取值范围如下：
     * - **false**（默认）：定时执行
     * - **true**：立即执行
     * > 调用该接口时无需使用该参数。
     * @example `false`
     */
    "FromTimeService"?: boolean;
    "ServerlessRuleCpuShrinkThreshold"?: string;
    "ServerlessRuleCpuEnlargeThreshold"?: string;
    "ServerlessRuleMode"?: string;
}
