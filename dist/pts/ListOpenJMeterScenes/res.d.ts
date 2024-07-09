export interface ListOpenJMeterScenesResponse {
    /**
     * 错误提示信息，若成功则为空。
     * @example `空`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `A8E16480-15C1-555A-922F-B736A005E52D`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 场景信息。
     */
    JMeterScene: {
        /**
         * 压测持续时间。
         * @example `10分钟`
         */
        DurationStr: string;
        /**
         * 场景ID。
         * @example `DYYPZIH`
         */
        SceneId: string;
        /**
         * 场景名。
         * @example `test`
         */
        SceneName: string;
        /**
         * 场景状态。包括：
         * - PREPARING: 准备中
         * - PREPARED: 准备完成
         * - STARTING: 启动中
         * - RUNNING: 执行中
         * - STOPPING: 停止中
         * - STOPPED: 待启动
         * @example `STOPPED`
         */
        Status: string;
    }[];
    /**
     * 系统状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回场景第N页。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 返回场景数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回场景总数。
     * @example `100`
     */
    TotalCount: number;
}
