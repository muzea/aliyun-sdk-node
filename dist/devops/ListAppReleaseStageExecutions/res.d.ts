export interface ListAppReleaseStageExecutionsResponse {
    /**
     * 采用键值分页时存在该字段，用于传给分页接口，迭代获取下一页数据
     * @example `vxc2341gfssad12`
     */
    nextToken: string;
    /**
     * 分页结果数据
     */
    data: {
        /**
         * 流水线执行编号
         * @example `1`
         */
        number: string;
        /**
         * 流水线执行状态
         * @example `SUCCESS`
         */
        state: string;
        /**
         * 流水线执行触发方式
         * @example `MANUAL`
         */
        triggerMode: string;
        /**
         * 流水线执行开始时间
         * @example `2024-06-25T07:25:54.000+00:00`
         */
        startTime: string;
        /**
         * 流水线执行结束时间
         * @example `2024-06-25T07:26:18.000+00:00`
         */
        endTime: string;
    }[];
    /**
     * 页码分页时存在该字段，表示结果总数
     * @example `2`
     */
    total: number;
    /**
     * 页码分页时存在该字段，表示当前页
     * @example `1`
     */
    current: number;
    /**
     * 页码分页时存在该字段，表示每页大小
     * @example `20`
     */
    perPage: number;
    /**
     * 页码分页时存在该字段，表示总页数
     * @example `1`
     */
    pages: number;
}
