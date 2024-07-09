export interface ModifyDBNodesParametersRequest {
    /**
     * 集群ID。
     * @example `pc-**************`
     */
    "DBClusterId": string;
    /**
     * 节点ID。支持传入多个节点ID，多个节点ID间用英文逗号（,）分隔。
     * @example `pi-****************， pi-****************`
     */
    "DBNodeIds": string;
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
     * 开始执行定时（即在目标时间段内执行）内核版本升级任务的最早时间。格式为YYYY-MM-DDThh:mm:ssZ（UTC）。
     * @example `2022-04-28T14:00:00Z`
     */
    "PlannedStartTime"?: string;
    /**
     * 开始执行目标定时任务的最晚时间。格式为YYYY-MM-DDThh:mm:ssZ（UTC）。
     * @example `2022-04-28T14:30:00Z`
     */
    "PlannedEndTime"?: string;
    /**
     * 立即执行或定时执行修改参数并重启取值：  false（默认值）：定时执行 true：立即执行
     * @example `false`
     */
    "FromTimeService"?: boolean;
}
