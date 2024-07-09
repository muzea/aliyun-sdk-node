export interface ListMachineGroupResponse {
    /**
     * 当前页返回的机器组数。
     * @example `1`
     */
    count: number;
    /**
     * 符合查询条件的机器组总数。
     * @example `1`
     */
    total: number;
    /**
     * 符合查询条件的机器组列表。
     * @example `[ "test-machine-group-1", "test-machine-group-2" ]`
     */
    machinegroups: string[];
}
