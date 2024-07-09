export interface CheckCreateDdrDBInstanceResponse {
    /**
     * 是否能创建容灾恢复实例。取值：
     * - **true**
     * - **false**
     * @example `true`
     */
    IsValid: string;
    /**
     * 请求ID。
     * @example `1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC`
     */
    RequestId: string;
}
