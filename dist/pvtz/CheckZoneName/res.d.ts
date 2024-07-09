export interface CheckZoneNameResponse {
    /**
     * 请求ID。
     * @example `CA29B88F-A571-4123-80D5-768AC2F7F806`
     */
    RequestId: string;
    /**
     * 取值：
     * - **true**：可添加
     * - **false**：不可添加
     * @example `true`
     */
    Check: boolean;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
}
