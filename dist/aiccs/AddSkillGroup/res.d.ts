export interface AddSkillGroupResponse {
    /**
     * 状态码描述。
     * @example `xxxx`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 创建技能组ID。
     * @example `123456`
     */
    Data: string;
    /**
     * 状态码。返回200表示请求成功。
     * @example `200`
     */
    Code: string;
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
