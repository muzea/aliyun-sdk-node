export interface ListAgentBySkillGroupIdResponse {
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
     * 坐席信息
     */
    Data: {
        /**
         * 坐席状态，0:正常，1：冻结，2：删除。只有正常的状态，才可进行业务活动
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
         * @example `666666`
         */
        AgentId: number;
        /**
         * 坐席账号名称，实例内唯一（登录名）
         * @example `123@123.com`
         */
        AccountName: string;
        /**
         * 坐席所属的租户ID，与入参中的实例ID一一对应
         * @example `0`
         */
        TenantId: number;
    }[];
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
}
