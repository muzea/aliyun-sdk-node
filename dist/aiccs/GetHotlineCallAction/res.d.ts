export interface GetHotlineCallActionResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EE339D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 接触ID。
         * @example `2235****`
         */
        TouchId: number;
        /**
         * 部门编号。
         * @example `1223****`
         */
        DepId: number;
        /**
         * 客服名称。
         * @example `XX测试`
         */
        ServicerName: string;
        /**
         * 会员名称。
         * @example `匿名会员`
         */
        MemberName: string;
        /**
         * 渠道类型。取值：
         * - **1**：热线。
         * - **2**：在线。
         * @example `2`
         */
        ChannelType: number;
        /**
         * 次接触ID。
         * @example `3423****`
         */
        SubTouchId: number;
        /**
         * 呼叫名称。
         * @example `王XX`
         */
        CalloutName: string;
        /**
         * 客户ID。
         * @example `8999****`
         */
        ActionId: number;
        /**
         * 坐席ID。
         * @example `1332****`
         */
        ServicerId: number;
        /**
         * 租户ID。
         * @example `2367****`
         */
        BuId: number;
        /**
         * 呼叫编号
         * @example `1122****`
         */
        CalloutId: number;
        /**
         * 工单编号。
         * @example `1138902****`
         */
        CaseId: number;
        /**
         * 渠道编号。
         * @example `2377****`
         */
        ChannelId: string;
        /**
         * 是否转移。
         * @example `true`
         */
        IsTransfer: string;
        /**
         * 会员ID。
         * @example `7856876****`
         */
        MemberId: number;
        /**
         * 任务编号。
         * @example `12345****`
         */
        TaskId: number;
        /**
         * 会员列表。
         * @example `8900****`
         */
        MemberList: string;
    };
}
