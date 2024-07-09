export interface GetStandardGroupResponse {
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `BF7E9543-F431-566A-991A-B5C493EA36C3`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError
    `
     */
    ErrorCode: string;
    /**
     * 安全规则集。
     */
    StandardGroup: {
        /**
         * 安全规则集名称。
         * @example `poc_test`
         */
        GroupName: string;
        /**
         * 安全规则集描述。
         * @example `生产环境测试规则`
         */
        Description: string;
        /**
         * 引擎类型。
         * @example `mysql`
         */
        DbType: string;
        /**
         * 最近修改安全规则的用户ID。
         * @example `513***`
         */
        LastMenderId: number;
        /**
         * 管控模式，返回值如下：
         * - **NONE_CONTROL**：自由操作。
         * - **STABLE**：稳定变更。
         * - **COMMON**：安全协同。
         * @example `COMMON`
         */
        GroupMode: string;
        /**
         * 安全规则集ID。
         * @example `41****`
         */
        GroupId: number;
    };
}
