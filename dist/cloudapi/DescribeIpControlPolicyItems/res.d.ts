export interface DescribeIpControlPolicyItemsResponse {
    /**
     * 返回指定的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ004`
     */
    RequestId: string;
    /**
     * 返回指定的每页条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回结果的总条数
     * @example `2`
     */
    TotalCount: number;
    IpControlPolicyItems: {
        /**
         * 由 IpControlPolicyItem组成的数组格式，返回的是某IP访问控制下的策略信息。
         */
        IpControlPolicyItem: {
            /**
             * 修改时间（UTC）
             * @example `2018-01-17T06:25:13Z`
             */
            ModifiedTime: string;
            /**
             * 某项策略的ID
             * @example `P151617000829241`
             */
            PolicyItemId: string;
            /**
             * IP或者IP段组成的字符串
             * @example `113.125.XX.XX;101.11.XX.XX`
             */
            CidrIp: string;
            /**
             * 创建时间（UTC）
             * @example `2018-01-17T06:20:08Z`
             */
            CreateTime: string;
            /**
             * 应用ID
             * @example `11112`
             */
            AppId: string;
        }[];
    };
}
