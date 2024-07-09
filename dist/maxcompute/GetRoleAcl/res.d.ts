export interface GetRoleAclResponse {
    /**
     * 请求id
     * @example `0a06dc0916696898838762018e9564`
     */
    requestId: string;
    /**
     * 返回的HTTP状态码。
     * @example `200`
     */
    httpCode: number;
    /**
     * 错误码
     * @example `040002`
     */
    errorCode: string;
    /**
     * 错误描述信息。
     * @example `异常信息`
     */
    errorMsg: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * 表
         */
        table: {
            /**
             * 表名称
             * @example `tableA`
             */
            name: string;
            /**
             * Schema名称。
             * @example `default`
             */
            schemaName: string;
            /**
             * 表操作
             */
            actions: string[];
        }[];
        /**
         * 资源
         */
        resource: {
            /**
             * 资源名称。
             * @example `resourceA`
             */
            name: string;
            /**
             * Schema名称。
             * @example `default`
             */
            schemaName: string;
            /**
             * 资源操作
             */
            actions: string[];
        }[];
        /**
         * 函数
         */
        function: {
            /**
             * 函数名称。
             * @example `functionA`
             */
            name: string;
            /**
             * Schema名称。
             * @example `default`
             */
            schemaName: string;
            /**
             * 函数操作
             */
            actions: string[];
        }[];
        /**
         * 项目
         */
        project: {
            /**
             * maxcompute项目名称
             * @example `projectA`
             */
            name: string;
            /**
             * Schema名称。
             * @example `default`
             */
            schemaName: string;
            /**
             * 项目操作
             */
            actions: string[];
        }[];
        /**
         * 实例
         */
        instance: {
            /**
             * 实例名称
             * @example `instanceA`
             */
            name: string;
            /**
             * Schema名称。
             * @example `default`
             */
            schemaName: string;
            /**
             * 实例操作
             */
            actions: string[];
        }[];
        /**
         * Package
         */
        package: {
            /**
             * package名称
             * @example `packageA`
             */
            name: string;
            /**
             * Schema名称。
             * @example `default`
             */
            schemaName: string;
            /**
             * package操作
             */
            actions: string[];
        }[];
    };
}
