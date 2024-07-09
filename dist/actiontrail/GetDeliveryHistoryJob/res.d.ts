export interface GetDeliveryHistoryJobResponse {
    /**
     * 任务状态。取值：
     * - 0：任务正在初始化。
     * - 1：任务投递中。
     * - 2：任务投递完成。
     * - 3：任务投递失败。
     * @example `2`
     */
    JobStatus: number;
    /**
     * 各地域的任务状态列表。
     */
    Status: {
        /**
         * 各地域的任务状态。取值：
         * - 0：任务正在初始化。
         * - 1：任务投递中。
         * - 2：任务投递完成。
         * - 3：任务投递失败。
         * @example `2`
         */
        Status: number;
        /**
         * 任务投递的地域。
         * @example `cn-hangzhou`
         */
        Region: string;
    }[];
    /**
     * 任务创建时间。
     * @example `2021-05-27T07:15:03Z`
     */
    CreatedTime: string;
    /**
     * 任务结束时间。
     * @example `2021-05-27T07:20:03Z`
     */
    EndTime: string;
    /**
     * 请求ID。
     * @example `FAFEC427-A00D-5653-B837-D0FA52220D8C`
     */
    RequestId: string;
    /**
     * 任务开始时间。
     * @example `2021-02-26T07:15:03Z`
     */
    StartTime: string;
    /**
     * 任务关联的跟踪名称。
     * @example `trail-name`
     */
    TrailName: string;
    /**
     * 任务更新时间。
     * @example `2021-05-27T07:28:47Z`
     */
    UpdatedTime: string;
    /**
     * 任务ID。
     * @example `16602`
     */
    JobId: number;
    /**
     * 跟踪的Home地域。
     * @example `cn-hangzhou`
     */
    HomeRegion: string;
}
