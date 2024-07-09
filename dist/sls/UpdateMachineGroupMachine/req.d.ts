export interface UpdateMachineGroupMachineRequest {
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
     * 请求结构体。要添加或删除的机器列表。
     */
    "body": string[];
    /**
     * add表示添加机器到机器组中， delete表示从机器组中删除机器。
     * @example `add`
     */
    "action"?: string;
}
