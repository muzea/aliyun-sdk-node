export interface ModifyInstanceMemberAttributesRequest {
    /**
     * 云防火墙成员账号。
     */
    "Members": {
        /**
         * 云防火墙成员账号的备注信息。
         * @example `renewal`
         */
        MemberDesc: string;
        /**
         * 云防火墙成员账号的UID。
         * @example `123412341234****`
         */
        MemberUid: number;
    }[];
}
