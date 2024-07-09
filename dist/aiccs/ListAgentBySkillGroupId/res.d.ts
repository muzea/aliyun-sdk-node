export interface ListAgentBySkillGroupIdResponse {
    /**
     * 状态码描述。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 坐席信息。
     */
    Data: {
        /**
         * 坐席状态。只有正常的状态，才可进行业务活动。取值：
         * - **0**：正常
         * - **1**：冻结
         * - **2**：删除
         * @example `0`
         */
        Status: number;
        /**
         * 坐席对外显示名称。
         * @example `刘测试`
         */
        DisplayName: string;
        /**
         * 坐席ID。
         * @example `666666`
         */
        AgentId: number;
        /**
         * 坐席账号名称，即账号注册时填写的手机或邮箱。实例内唯一。
         * @example `username@example.com`
         */
        AccountName: string;
        /**
         * 坐席所属的租户ID。与入参中的实例ID对应。
         * @example `0`
         */
        TenantId: number;
    }[];
    /**
     * 状态码。返回Success表示请求成功。
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
}
