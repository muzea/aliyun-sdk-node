export interface GetHotlineAgentDetailResponse {
    /**
     * 错误描述
     * @example `xxxx`
     */
    Message: string;
    /**
     * 请求ID，用于跟踪错误原因
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 坐席服务数据
     */
    Data: {
        /**
         * 坐席状态编码
         * 1:AgentCheckout（坐席下班）
         * 3:AgentReady（坐席空闲）
         * 4:AgentBreak（坐席小休）
         * 5:AgentAcw（话后处理）
         * 6:AgentBusyForCall（通话中）
         * @example `AgentCheckout`
         */
        AgentStatusCode: string;
        /**
         * 心跳签名
         * @example `dnthF_oinHg7JMJDmKqex3UxDD7`
         */
        Token: string;
        /**
         * 坐席id
         * @example `555555`
         */
        AgentId: number;
        /**
         * 是否被分配，有以下枚举：
         * false：未分配（无通话）
         * true：已分配（有通话）
         * @example `false`
         */
        Assigned: boolean;
        /**
         * 小休类型，有以下枚举：
         * 1：小休
         * 2：就餐
         * 3：会议
         * 4：辅导
         * 5：培训
         * @example `1`
         */
        RestType: number;
        /**
         * 坐席状态，有以下枚举：1-6
         * @example `1`
         */
        AgentStatus: number;
        /**
         * 坐席所属的租户ID，与入参中的实例ID一一对应
         * @example `0`
         */
        TenantId: number;
    };
    /**
     * 错误编码
     * @example `Success`
     */
    Code: string;
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
    HttpStatusCode: number;
}
