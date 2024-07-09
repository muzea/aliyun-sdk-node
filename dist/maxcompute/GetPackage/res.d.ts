export interface GetPackageResponse {
    /**
     * 请求id
     * @example `0b57ff8316614119858417939e3e54`
     */
    requestId: string;
    /**
     * 业务成功与否。如果非空且不是200，那么表示业务处理失败。
     * @example `200`
     */
    httpCode: number;
    /**
     * 错误码
     * @example `040002`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `异常信息`
     */
    errorMsg: string;
    /**
     * 返回数据
     */
    data: {
        /**
         * 已经安装的项目列表
         */
        allowedProjectList: {
            /**
             * 指定安全许可标签级别
             * @example `2`
             */
            label: string;
            /**
             * maxcompute项目名称
             * @example `proejctB`
             */
            project: string;
        }[];
        /**
         * package内包含的资源详情
         */
        resourceList: {
            /**
             * 表列表
             */
            table: {
                /**
                 * 表名称
                 * @example `dim_odps
                `
                 */
                name: string;
                /**
                 * schema名称。
                 * @example `default`
                 */
                schemaName: string;
                /**
                 * 表操作
                 */
                actions: string[];
            }[];
            /**
             * 资源列表
             */
            resource: {
                /**
                 * 资源名称
                 * @example `res_1`
                 */
                name: string;
                /**
                 * schema名称。
                 * @example `default`
                 */
                schemaName: string;
                /**
                 * 资源的操作
                 */
                actions: string[];
            }[];
            /**
             * 函数列表
             */
            function: {
                /**
                 * 函数名称
                 * @example `function_1`
                 */
                name: string;
                /**
                 * schema名称。
                 * @example `default`
                 */
                schemaName: string;
                /**
                 * 函数操作
                 */
                actions: string[];
            }[];
        };
    };
}
