export interface DescribeRdMemberListResponse {
    /**
     * 本次调用请求的 ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `DC245DEE-9800-5579-BF99-189D6A5BA9FE`
     */
    RequestId: string;
    /**
     * 总记录条数。
     * @example `10`
     */
    Total: number;
    /**
     * 成员账号列表。
     */
    MemberList: {
        /**
         * 成员账号 ID。
         * @example `196027980201****`
         */
        Uid: string;
        /**
         * 成员账号名称。
         * @example `tes***`
         */
        Name: string;
        /**
         * 创建时间。
         * @example `1624954942000`
         */
        GmtCreate: number;
    }[];
}
