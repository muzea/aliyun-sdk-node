export interface ListDpiSignaturesResponse {
    /**
     * 当前页面展示的总的应用个数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 下一页查询开始的Token。
     * @example `FFrMV38kR4****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `63081123-B7C0-4BC9-B9E5-59E77A616EC9`
     */
    RequestId: string;
    /**
     * 应用信息列表
     */
    DpiSignature: {
        /**
         * 应用ID。
         * @example `235`
         */
        DpiSignatureId: string;
        /**
         * 支持该应用的最低特征库版本。
         * @example `20201117_1_0-0.0.1`
         */
        MinSignatureDbVersion: string;
        /**
         * 应用所属的应用组ID。
         * @example `20`
         */
        DpiGroupId: string;
        /**
         * 支持该应用的最低引擎版本。
         * @example `0-0.0.1`
         */
        MinEngineVersion: string;
        /**
         * 应用名称。
         * @example `EdgeCast`
         */
        DpiSignatureName: string;
    }[];
}
