export interface RemoveConfigFromMachineGroupRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 机器组名称。
     * @example `test-group`
     */
    "machineGroup": string;
    /**
     * Logtail配置名称。
     * @example `test-logtail`
     */
    "configName": string;
}
