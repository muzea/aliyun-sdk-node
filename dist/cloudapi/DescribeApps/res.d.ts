export interface DescribeAppsResponse {
    /**
     * 返回指定的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ015`
     */
    RequestId: string;
    /**
     * 返回指定的每页条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回结果的总条数
     * @example `1`
     */
    TotalCount: number;
    Apps: {
        /**
         * 由 AppItem 组成的数组格式，返回app的信息
         */
        AppItem: {
            /**
             * APP名称
             * @example `CreateApptest`
             */
            AppName: string;
            /**
             * APP描述信息
             * @example `App test`
             */
            Description: string;
            /**
             * APP编号
             * @example `20112314518278`
             */
            AppId: number;
        }[];
    };
}
