export interface DescribeParameterGroupSupportParamResponse {
    /**
     * 请求ID。
     * @example `BB73740C-23E2-4392-9DA4-2660C74C****`
     */
    RequestId: string;
    /**
     * 参数列表。
     */
    ResourceList: {
        /**
         * 引擎类型。
         * @example `redis`
         */
        DbType: string;
        /**
         * 引擎兼容版本。
         * @example `5.0`
         */
        DbVersion: string;
        /**
         * 产品类别。
         * @example `standard`
         */
        Category: string;
        /**
         * 支持设置的参数。
         * @example `rt_threshold_ms`
         */
        ParamName: string;
    }[];
}
