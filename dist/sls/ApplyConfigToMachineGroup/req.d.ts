export interface ApplyConfigToMachineGroupRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 机器组名称。
     * @example `sample-group`
     */
    "machineGroup": string;
    /**
     * Logtail配置名称。
     * @example `logtail-config-sample`
     */
    "configName": string;
}
