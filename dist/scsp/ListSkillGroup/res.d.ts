export interface ListSkillGroupResponse {
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
     * 技能组信息
     */
    Data: {
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
         * @example `2`
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
