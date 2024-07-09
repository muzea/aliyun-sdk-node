export interface CreateBuildRecordByRuleResponse {
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `B01B8857-A16E-40E9-A37E-764F15776FAA`
     */
    RequestId: string;
    /**
     * 构建记录ID
     * @example `0A311FC5-B8C6-4332-80E4-539EB73****`
     */
    BuildRecordId: string;
}
