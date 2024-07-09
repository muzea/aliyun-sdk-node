export interface ListMachinesResponse {
    /**
     * 当前页返回的机器数目。
     * @example `3`
     */
    count: number;
    /**
     * 机器总数。
     * @example `8`
     */
    total: number;
    /**
     * 返回的机器信息列表。
     */
    machines: any[];
}
