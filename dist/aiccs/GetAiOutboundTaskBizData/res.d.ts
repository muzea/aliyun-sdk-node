export interface GetAiOutboundTaskBizDataResponse {
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 状态码。
     * @example `OK`
     */
    Code: string;
    /**
     * 接口调用是否成功。
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次呼叫关联的业务信息。
     */
    Data: {
        /**
         * 本次外呼关联的活动ID。
         * @example `123`
         */
        CaseId: number;
        /**
         * 外呼号码。
         * @example `158****0000`
         */
        PhoneNum: string;
        /**
         * 业务自定义信息。
         * @example `{"customer":123}`
         */
        BizData: string;
        /**
         * 任务ID。
         * @example `123456`
         */
        TaskId: number;
    };
}
