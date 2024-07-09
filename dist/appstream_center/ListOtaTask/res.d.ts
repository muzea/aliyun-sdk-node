export interface ListOtaTaskResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * OTA升级任务总数。
     * @example `6`
     */
    TotalCount: number;
    /**
     * 每页的查询结果数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前展示的查询结果页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * OTA升级任务列表。
     */
    TaskList: {
        /**
         * OTA版本。
         * @example `0.0.1-R-20220708.110604`
         */
        OtaVersion: string;
        /**
         * 任务状态。
         * @example `RUNNING`
         */
        TaskDisplayStatus: string;
        /**
         * 任务开始时间，ISO 8601格式。
         * @example `2022-08-04T14:36:00+08:00`
         */
        TaskStartTime: string;
        /**
         * 任务ID。
         * @example `ota-be7jzm29wrrz5****`
         */
        TaskId: string;
    }[];
}
