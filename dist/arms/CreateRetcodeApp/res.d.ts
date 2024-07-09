export interface CreateRetcodeAppResponse {
    /**
     * 请求ID。
     * @example `A5EC8221-08F2-4C95-9AF1-49FD998C647A`
     */
    RequestId: string;
    /**
     * 接口状态码：2XX：成功                                 3XX：重定向                                 4XX：请求错误                                 5XX：服务器错误
     * @example `200`
     */
    Code: number;
    /**
     * 返回结构体。
     * @example `bdidt76ehx@d5cf1cd3f7df411`
     */
    Data: string;
    /**
     * 操作是否成功：true：操作成功                                 false：操作失败
     * @example `True`
     */
    Success: boolean;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 返回前端监控创建信息。
     */
    RetcodeAppDataBean: {
        /**
         * PID。
         * @example `aokcdqn3ly@a195c6d6421****`
         */
        Pid: string;
        /**
         * 应用ID。
         * @example `135143`
         */
        AppId: number;
        /**
         * 资源组ID。
         * @example `rg-acfmxyexli2****`
         */
        ResourceGroupId: string;
        Tags: {
            /**
             * 标签。
             */
            Tags: {
                /**
                 * 标签的键（key）。
                 * @example `TestKey`
                 */
                Key: string;
                /**
                 * 标签的值（value）。
                 * @example `TestValue`
                 */
                Value: string;
            }[];
        };
    };
}
