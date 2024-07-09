export interface StartServiceResponse {
    /**
     * 请求ID。
     * @example `047BA921-06DE-0DC4-8433-BAB26A4F3133`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 服务ID。
         * @example `22`
         */
        Id: number;
        /**
         * 创建时间。
         * @example `1626434355778`
         */
        GmtCreate: number;
        /**
         * 服务名称。
         * @example `日常服务测试`
         */
        ServiceName: string;
        /**
         * 服务描述。
         * @example `日常服务测试描述`
         */
        ServiceDescription: string;
        /**
         * 服务当前状态。取值如下：
         * - INIT：初始化
         * - STARTING：开始运行
         * - RUNNING：运行
         * - START_FAIL：启动失败
         * - STOPPING：停止运行
         * @example `STARTING`
         */
        Status: string;
    };
}
