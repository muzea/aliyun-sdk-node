export interface GetAgentResponse {
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 坐席数据。
     */
    Data: {
        /**
         * 坐席状态。取值：
         * - **0**：正常
         * - **1**：冻结
         * - **2**：删除
         * > 只有正常的状态，才可进行业务活动。
         * @example `0`
         */
        Status: number;
        /**
         * 坐席对外显示名称。
         * @example `XX测试`
         */
        DisplayName: string;
        /**
         * 坐席ID。
         * @example `222222`
         */
        AgentId: number;
        /**
         * 坐席所属技能组信息。
         */
        GroupList: {
            /**
             * 技能组对外显示名称。
             * @example `自动化技能组`
             */
            DisplayName: string;
            /**
             * 技能组描述
             * @example `自动化技能组`
             */
            Description: string;
            /**
             * 技能组渠道类型
             * @example `1`
             */
            ChannelType: number;
            /**
             * 技能组ID。
             * @example `123456`
             */
            SkillGroupId: number;
            /**
             * 技能组名称。
             * @example `自动化技能组`
             */
            Name: string;
        }[];
        /**
         * 坐席账号名称，即账号注册时填写的手机或邮箱。实例内唯一。
         * @example `username@example.com`
         */
        AccountName: string;
        /**
         * 坐席所属的租户ID，与请求参数中的实例ID相对应。
         * @example `0`
         */
        TenantId: number;
    };
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
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
