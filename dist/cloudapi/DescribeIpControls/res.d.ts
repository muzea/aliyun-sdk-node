export interface DescribeIpControlsResponse {
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
     * @example `1`
     */
    TotalCount: number;
    IpControlInfos: {
        /**
         * 由IpControlInfo组成的数组格式，返回的是IP访问控制的信息项（不包含具体的策略）。
         */
        IpControlInfo: {
            /**
             * IP访问控制编号
             * @example `7ea91319a34d48a09b5c9c871d9768b1`
             */
            IpControlId: string;
            /**
             * IP访问控制类型
             * @example `ALLOW`
             */
            IpControlType: string;
            /**
             * 修改时间（UTC）
             * @example `2018-01-17T06:00:38Z`
             */
            ModifiedTime: string;
            /**
             * IP访问控制名称
             * @example `testControl11`
             */
            IpControlName: string;
            /**
             * 描述
             * @example `description`
             */
            Description: string;
            /**
             * 创建时间（UTC）
             * @example `2018-01-17T05:48:11Z`
             */
            CreateTime: string;
            /**
             * 所在的region
             * @example `cn-qingdao`
             */
            RegionId: string;
        }[];
    };
}
