export interface GetHotlineAgentDetailResponse {
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 坐席服务数据。
     */
    Data: {
        /**
         * 坐席状态编码。取值：
         * - **AgentCheckout**：坐席下班。
         * - **AgentReady**：坐席空闲。
         * - **AgentBreak**：坐席小休。
         * - **AgentAcw**：话后处理。
         * - **AgentBusyForCall**：通话中。
         * @example `AgentCheckout`
         */
        AgentStatusCode: string;
        /**
         * 心跳签名。
         * @example `dnthF_oinHg7JMJDmKqex3Ux****`
         */
        Token: string;
        /**
         * 坐席ID。
         * @example `2235****`
         */
        AgentId: number;
        /**
         * 是否被分配。取值：
         * **false**：未分配（无通话）。
         * **true**：已分配（有通话）。
         * @example `false`
         */
        Assigned: boolean;
        /**
         * 小休类型。取值：
         * - **1**：小休。
         * - **2**：就餐。
         * - **3**：会议。
         * - **4**：辅导。
         * - **5**：培训。
         * @example `1`
         */
        RestType: number;
        /**
         * 坐席状态。取值范围：**1~6**。
         * @example `1`
         */
        AgentStatus: number;
        /**
         * 坐席所属的租户ID，与入参中的实例ID相对应。
         * @example `ccc_xp_pre-cn-***`
         */
        TenantId: number;
    };
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
