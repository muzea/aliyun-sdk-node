export interface ImportDataSourcesResponse {
    /**
     * 请求是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `0bc1411515937635973****`
     */
    RequestId: string;
    /**
     * 批量导入数据源的返回结果。
     */
    Data: {
        /**
         * 批量导入数据源的结果状态。取值如下：
         * - true：表示全部数据源导入成功。
         * - false：表示部分数据源导入失败，您可以查看Message参数定位失败原因。
         * @example `true`
         */
        Status: boolean;
        /**
         * 批量导入数据源失败后的原因描述。如果批量导入数据源成功，则该参数的返回值为空。
         * @example ` Data source DEV XXX already exists`
         */
        Message: string;
    };
}
