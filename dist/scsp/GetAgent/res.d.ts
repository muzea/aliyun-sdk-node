export interface GetAgentResponse {
    /**
     * 请求ID，用于跟踪错误原因
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 坐席数据
     */
    Data: {
        /**
         * 坐席状态，0:正常，1:冻结，2:删除。只有正常的状态，才可进行业务活动
         * @example `0`
         */
        Status: number;
        /**
         * 坐席对外显示名称
         * @example `刘测试`
         */
        DisplayName: string;
        /**
         * 坐席id
         * @example `222222`
         */
        AgentId: number;
        /**
         * 坐席所属技能组信息
         */
        GroupList: {
            /**
             * 技能组对外显示名称
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
             * 技能组id
             * @example `123456`
             */
            SkillGroupId: number;
            /**
             * 技能组名称
             * @example `自动化技能组`
             */
            Name: string;
        }[];
        /**
         * 坐席账号名称（登录名）
         * @example `123@123.com`
         */
        AccountName: string;
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
    Message: string;
}
