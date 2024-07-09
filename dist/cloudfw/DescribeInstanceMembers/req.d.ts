export interface DescribeInstanceMembersRequest {
    /**
     * 分页查询时，返回第几页数据。
     * 默认值为**1**，表示返回第1页数据。
     * @example `1`
     */
    "CurrentPage"?: string;
    /**
     * 分页查询时，每页包含多少条结果。
     * 默认值为**20**，表示每页包含20条结果。
     * @example `20`
     */
    "PageSize"?: string;
    /**
     * 云防火墙成员账号的UID。
     * @example `258039427902****`
     */
    "MemberUid"?: string;
    /**
     * 云防火墙成员账号的名称。
     * @example `cloudfirewall_2`
     */
    "MemberDisplayName"?: string;
    /**
     * 云防火墙成员账号的备注信息，长度为1~256个字符。
     * @example `renewal`
     */
    "MemberDesc"?: string;
}
