export interface ValidateDataSourcesResponse {
    /**
     * Id of the request
     * @example `8FA2B338-AFDC-46B4-A132-B5487820C2BF`
     */
    requestId: string;
    /**
     * 请求结果
     * @example `[]`
     */
    result: {
        /**
         * 状态码
         * @example `SUCCEED`
         */
        code: string;
        /**
         * 响应信息
         * @example `校验成功`
         */
        message: string;
        /**
         * 数据源
         * @example `{}`
         */
        dataSource: {
            /**
             * 表名
             * @example `user_activity_decision`
             */
            tableName: string;
            /**
             * 数据源类型
             * @example `rds`
             */
            type: string;
            /**
             * 参数体
             * @example `{}`
             */
            parameters: any;
        };
    }[];
}
