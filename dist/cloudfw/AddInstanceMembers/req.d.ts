export interface AddInstanceMembersRequest {
    /**
     * 云防火墙成员账号。
     */
    "Members": {
        /**
         * 云防火墙成员账号的备注信息，长度为1~256个字符。最多可添加20个成员账号。
         * @example `renewal`
         */
        MemberDesc: string;
        /**
         * 云防火墙成员账号的UID。最多可添加20个成员账号。
         * @example `258039427902****`
         */
        MemberUid: number;
    }[];
}
