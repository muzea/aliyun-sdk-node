export interface StopServiceResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `65D559AA-2E27-0597-9733-69810820E334`
     */
    RequestId: string;
    /**
     * 出参数据实体。
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
         * 服务名称
         * @example `AT服务测试`
         */
        ServiceName: string;
        /**
         * 服务描述。
         * @example `AT服务测试`
         */
        ServiceDescription: string;
        /**
         * 服务当前状态。取值如下：
         * - INIT：未启动
         * - STARTING：启动中
         * - RUNNING：运行中
         * - START_FAIL：启动失败
         * - STOPPING：停止中
         * @example `STOPPING`
         */
        Status: string;
    };
}
