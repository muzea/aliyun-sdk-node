export interface CreateRepoTriggerRequest {
    /**
     * 实例ID
     * @example `cri-xkx6vujuhay0****`
     */
    "InstanceId": string;
    /**
     * 镜像仓库ID
     * @example `crr-xwvi3osiy4ff****`
     */
    "RepoId": string;
    /**
     * 触发器名称
     * @example `trigger1`
     */
    "TriggerName": string;
    /**
     * 触发器URL
     * @example `http://www.mysite.com`
     */
    "TriggerUrl": string;
    /**
     * 触发器类型，取值：
     * - `ALL`：全部触发
     * - `TAG_LIST`：Tag触发
     * - `TAG_REG_EXP`：表达式触发
     * @example `ALL`
     */
    "TriggerType": string;
    /**
     * 触发触发器的镜像版本。
     * > - `TriggerType`为`ALL`，`TriggerTag`可以为任意字符串，示例`*`。
     * - `TriggerType`为`TAG_LIST`，`TriggerTag`为数组，示例`[1]`。
     * - `TriggerType`为`TAG_REG_EXP`，`TriggerTag`为字符串，示例`*`。
     * @example `[1]`
     */
    "TriggerTag"?: string;
}
