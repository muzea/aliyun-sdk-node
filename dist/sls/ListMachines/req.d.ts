export interface ListMachinesRequest {
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
     * 查询开始行。默认值为0。
     * @example `0`
     */
    "offset"?: number;
    /**
     * 分页查询时，设置的每页行数。默认值为100，最大值为500。
     * @example `10`
     */
    "size"?: number;
}
