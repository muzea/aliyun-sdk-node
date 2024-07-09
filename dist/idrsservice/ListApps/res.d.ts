export interface ListAppsResponse {
    /**
     * 错误消息
     * @example `无`
     */
    Message: string;
    /**
     * 请求 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    RequestId: string;
    /**
     * 无
     */
    Data: {
        /**
         * 数据项
         */
        Items: {
            /**
             * 部门名称
             * @example `部门`
             */
            DepartmentName: string;
            /**
             * 包名
             * @example `com.aaa.test`
             */
            PackageName: string;
            /**
             * 创建日期
             * @example `2020-07-14T14:01:41.000+08:00`
             */
            CreatedAt: string;
            /**
             * 部门 ID
             * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
             */
            DepartmentId: string;
            /**
             * 是否禁用
             * @example `false`
             */
            Disabled: boolean;
            /**
             * 名称
             * @example `应用`
             */
            Name: string;
            /**
             * ID
             * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
             */
            Id: string;
        }[];
        /**
         * 总页数
         * @example `11`
         */
        TotalPages: number;
        /**
         * 总条目数
         * @example `1`
         */
        TotalElements: number;
    };
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
}
