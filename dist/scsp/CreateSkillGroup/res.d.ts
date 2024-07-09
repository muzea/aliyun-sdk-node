export interface CreateSkillGroupResponse {
    /**
     * Message
     * @example `xxxx`
     */
    Message: string;
    /**
     * RequestId
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 创建成功的技能组id
     * @example `123456`
     */
    Data: number;
    /**
     * Code
     * @example `Success`
     */
    Code: string;
    /**
     * Success
     * @example `true`
     */
    Success: boolean;
}
