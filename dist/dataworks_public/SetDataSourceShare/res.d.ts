export interface SetDataSourceShareResponse {
    /**
     * 请求是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次调用的唯一ID。用于出现错误后定位日志，排查问题。
     * @example `0000-ABCD-EFG	`
     */
    RequestId: string;
    /**
     * 分享目标数据源的返回数据。
     */
    Data: {
        /**
         * 分享目标数据源的结果状态。取值如下：
         * - success：表示目标数据源分享成功。
         * - fail：表示目标数据源分享失败。您可以查看Message参数定位失败原因。
         * @example `success`
         */
        Status: string;
        /**
         * 分享目标数据源失败后的原因描述。如果分享目标数据源成功，则该参数的返回值为空。
         * @example `datasource is wrong`
         */
        Message: string;
    };
}
