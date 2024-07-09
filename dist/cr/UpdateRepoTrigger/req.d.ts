export interface UpdateRepoTriggerRequest {
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    "InstanceId": string;
    /**
     * 镜像仓库ID
     * @example `crr-tquyps22md8p****`
     */
    "RepoId": string;
    /**
     * 触发器名称
     * 非必选参数，TriggerName与TriggerUrl参数二选一
     * @example `test_trigger`
     */
    "TriggerName"?: string;
    /**
     * 触发器地址
     * @example `https://www.test.com`
     */
    "TriggerUrl"?: string;
    /**
     * 触发类型，取值：
     * - `ALL`：全部触发
     * - `TAG_LISTTAG`：触发
     * - `TAG_REG_EXP`：表达式触发
     * @example `ALL`
     */
    "TriggerType"?: string;
    /**
     * 触发触发器的镜像版本
     * @example `master`
     */
    "TriggerTag"?: string;
    /**
     * 触发器ID
     * @example `crw-k7bdx4kt52ty****`
     */
    "TriggerId": string;
}
