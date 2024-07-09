export interface ListScenariosResponse {
    /**
     * 请求ID。
     * @example `7FAD400F-7A5C-4193-8F9A-39D86C4F0231`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 业务场景列表。
     */
    ScenarioList: {
        /**
         * 业务场景ID。
         * @example `41***`
         */
        Id: number;
        /**
         * 业务场景名称。
         * @example `test`
         */
        ScenarioName: string;
        /**
         * 创建人的用户ID。
         * @example `23***`
         */
        CreatorId: string;
        /**
         * 业务场景描述。
         * @example `test`
         */
        Description: string;
    }[];
}
