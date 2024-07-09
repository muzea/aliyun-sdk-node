export interface BatchAddFeishuUsersResponse {
    /**
     * 请求 ID。
     * @example `D8749D65-E80A-433C-AF1B-CE9C180FF3B4`
     */
    RequestId: string;
    /**
     * 返回添加用户组成员的结果。取值范围：
     * - true：添加成功
     * - false：添加失败
     * @example `True`
     */
    Result: {
        /**
         * 成功计数。
         * @example `1`
         */
        OkCount: number;
        /**
         * 失败校验的个数。
         * @example `10`
         */
        FailCount: number;
        /**
         * 失败的具体详情。
         */
        FailResults: {
            /**
             * 错误原因。
             */
            FailInfos: {
                /**
                 * 错误码。
                 * @example `ACCOUNT_EXIST`
                 */
                Code: string;
                /**
                 * 错误的输入值。
                 * @example `20`
                 */
                Input: string;
                /**
                 * 错误码描述。
                 * @example `账号已存在`
                 */
                CodeDesc: string;
            }[];
        }[];
    };
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `True`
     */
    Success: boolean;
}
