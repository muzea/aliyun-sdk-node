export interface DescribeAppsByApiProductResponse {
    /**
     * 请求ID
     * @example `AC866798-62D3-52F4-8AB5-CA149A53984F`
     */
    RequestId: string;
    /**
     * 分页参数：每页显示条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 分页参数：当前页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 返回结果的总条数
     * @example `4`
     */
    TotalCount: number;
    AuthorizedApps: {
        /**
         * 授权的APP信息列表
         */
        AuthorizedApp: {
            /**
             * App名称
             * @example `APP_02580_DEV`
             */
            AppName: string;
            /**
             * 授权说明
             * @example `授权描述`
             */
            Description: string;
            /**
             * 授权有效时间的截止时间，格林尼治标准时间(GMT)，如果为空，即为授权永久有效
             * @example `2023-06-17T03:41:53Z`
             */
            AuthValidTime: string;
            /**
             * App的ID
             * @example `110982419`
             */
            AppId: number;
            /**
             * 扩展信息
             * @example `extra info`
             */
            Extend: string;
            /**
             * 授权操作的时间，格林尼治标准时间(GMT)
             * @example `2016-07-21T06:17:20Z`
             */
            AuthorizedTime: string;
        }[];
    };
}
