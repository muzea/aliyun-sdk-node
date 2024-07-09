export interface InitializeDbsServiceLinkedRoleResponse {
    /**
     * 空值。
     * @example `null`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `4F1888AC-1138-4995-B9FE-D2734F61C058`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: string;
    /**
     * 错误码。
     * @example `EntityAlreadyExists.Role`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `EntityAlreadyExists.Role : The role already exists:AliyunServiceRoleForDBS\r\nRequestId : 73******-3B4D-501A-9505-FA8B9******`
     */
    ErrMessage: string;
}
