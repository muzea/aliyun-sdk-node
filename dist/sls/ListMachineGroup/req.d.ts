export interface ListMachineGroupRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 查询开始行。默认值为0。
     * @example `1`
     */
    "offset"?: number;
    /**
     * 分页查询时，设置的每页行数。最大值为500。
     * @example `10`
     */
    "size"?: number;
    /**
     * 机器组名称。用于过滤机器组，支持部分匹配。
     * @example `test-machine-group`
     */
    "groupName"?: string;
}
