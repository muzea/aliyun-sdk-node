export interface CreateLakeHouseSpaceResponse {
    /**
     * 项目空间ID。
     * @example `24`
     */
    SpaceId: number;
    /**
     * 请求ID。
     * @example `7FAD400F-7A5C-4193-8F9A-39D86C4F0231`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `InvalidParameterValid`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `Invalid parameters: space name、mode、prod db id、db type、config.`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
