export interface DescribeInstanceMembersResponse {
    /**
     * 本次请求的ID。
     * @example `A531AE1A-FBA2-48B6-BAB8-84D02BD409EE`
     */
    RequestId: string;
    /**
     * 分页查询时的页面信息。
     */
    PageInfo: {
        /**
         * 本次查询第几页数据。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 本次查询每页包含多少条结果。
         * @example `20`
         */
        PageSize: number;
        /**
         * 云防火墙成员账号的总数量。
         * @example `20`
         */
        TotalCount: number;
    };
    /**
     * 云防火墙成员账号的信息。
     */
    Members: {
        /**
         * 云防火墙成员账号的备注信息。
         * @example `renewal`
         */
        MemberDesc: string;
        /**
         * 云防火墙成员账号的名称。
         * @example `cloudfirewall_2`
         */
        MemberDisplayName: string;
        /**
         * 云防火墙成员账号的加入时间。使用时间戳格式，单位：秒。
         * @example `1615189819`
         */
        CreateTime: number;
        /**
         * 云防火墙成员账号的UID。
         * @example `258039427902****`
         */
        MemberUid: number;
        /**
         * 云防火墙成员账号的状态。取值：
         * - **normal**：正常
         * - **deleting**：删除中
         * @example `normal`
         */
        MemberStatus: string;
        /**
         * 云防火墙成员账号的最近修改时间。使用时间戳格式，单位：秒。
         * @example `1615189819`
         */
        ModifyTime: number;
    }[];
}
