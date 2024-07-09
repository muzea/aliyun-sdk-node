export interface DescribeModifyParameterLogResponse {
    /**
     * 请求ID。
     * @example `4FA1F1D1-50A6-4F60-9A78-5752F2076A53`
     */
    RequestId: string;
    /**
     * 变更历史。
     */
    Changelogs: {
        /**
         * 修改前的参数。
         * @example `100`
         */
        ParameterValueAfter: string;
        /**
         * 参数名。
         * @example `testkey`
         */
        ParameterName: string;
        /**
         * 生效时间。
         * @example `2023-01-03T17:00:00Z`
         */
        EffectTime: string;
        /**
         * 修改后的参数。
         * @example `200`
         */
        ParameterValueBefore: string;
        /**
         * 是否生效。
         * @example `true`
         */
        ParameterValid: string;
    }[];
}
