export interface ListSkillGroupResponse {
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
     * 技能组信息。
     */
    Data: {
        /**
         * 技能组对外显示名称。
         * @example `自动化技能组`
         */
        DisplayName: string;
        /**
         * 技能组描述。
         * @example `自动化技能组`
         */
        Description: string;
        /**
         * 技能组渠道类型。
         * @example `2`
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
     * 状态码。返回Success表示调用成功。
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
