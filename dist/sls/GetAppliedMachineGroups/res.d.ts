export interface GetAppliedMachineGroupsResponse {
    /**
     * 返回的机器组数量。
     * @example `2`
     */
    count: number;
    /**
     * 返回的机器组名称。
     * @example `[ "sample-group1","sample-group2" ]`
     */
    machinegroups: string[];
}
