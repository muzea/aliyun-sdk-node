export interface GetReserveTaskDetailResponse {
    /**
     * 容器预定任务ID。
     * @example `b354****`
     */
    TaskId: string;
    /**
     * 任务状态。取值：
     * - created：已创建但未运行。
     * - running：运行中。
     * - cancelled：已取消。
     * - cancelling：取消中。
     * - completed：已完成。
     * - failed：失败。
     * @example `created`
     */
    TaskStatus: string;
    /**
     * 项目ID。
     * @example `d9a8****`
     */
    ProjectId: string;
    /**
     * 应用ID。
     * @example `13027****`
     */
    AppId: string;
    /**
     * 应用版本ID。
     * @example `35067****`
     */
    AppVersion: string;
    /**
     * 区域ID。取值：
     * - huadong
     * - xinan
     * - huanan
     * - huabei
     * - huazhong
     * @example `huadong`
     */
    DistrictId: string;
    /**
     * 容量预定期望的会话路数。
     * @example `100`
     */
    ExpectSessionCapacity: number;
    /**
     * 当前任务已经生产完成的会话路数。
     * @example `100`
     */
    CurrCompletedSessionCapacity: number;
    /**
     * 容量预定时的期望生效时间。
     * 格式：`YYYY-MM-DD hh:mm:ss` ，时区是北京时间（东八区）。
     * @example `2022-02-02 22:22:22`
     */
    ExpectResourceReadyTime: string;
    /**
     * 请求ID。
     * @example `46329898-489C-4E63-9BA1-C1DA5C5D0986`
     */
    RequestId: string;
    /**
     * 本次预定的资源包含了哪些批次。
     */
    ResBatchList: {
        /**
         * 批次ID。
         * @example `726573XXXX`
         */
        ResBatchId: string;
        /**
         * 批次标签名称。目前取值固定为 resBatchId。
         * @example `resBatchId`
         */
        ResBatchTagName: string;
    }[];
}
