export interface ListTaskResponse {
    /**
     * 请求ID。
     * @example `D9CB3933-9FE3-4870-BA8E-2BEE91B69D23`
     */
    RequestId: string;
    /**
     * 任务数据列表。
     */
    Data: {
        /**
         * 当前页码。
         * @example `1`
         */
        PageNo: number;
        /**
         * 每页个数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 任务总数。
         * @example `50`
         */
        Total: number;
        /**
         * 任务信息。
         */
        Record: {
            /**
             * 任务状态。
             * @example `RELEASE`
             */
            Status: string;
            /**
             * 任务创建时间。时间戳格式，单位：毫秒。
             * @example `1618477232000`
             */
            GmtCreate: string;
            /**
             * 处理通话总数。
             * @example `1`
             */
            TotalCount: number;
            /**
             * 任务启动时间。时间戳格式，单位：毫秒。
             * @example `1618477232000`
             */
            FireTime: string;
            /**
             * 任务名称。
             * @example `测试任务`
             */
            TaskName: string;
            /**
             * 指定机器人ID。
             * @example `12****`
             */
            RobotId: number;
            /**
             * 机器人名称。
             * @example `机器人`
             */
            RobotName: string;
            /**
             * 机器人呼叫任务的唯一任务ID。
             * @example `12****`
             */
            Id: number;
            /**
             * 完成通话个数。
             * @example `1`
             */
            CompleteCount: number;
        }[];
    };
    /**
     * 请求状态码。返回OK代表请求成功。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
}
