export interface StartChatRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId"?: string;
    /**
     * 聊天成员信息。
     */
    "UserList": {
        /**
         * 成员ID。
         * @example `fcd020fe-d8e4-40e5-8c77-1a272a174a7d`
         */
        UserId: string;
        /**
         * 成员类型。
         * - AGENT : 坐席
         * - CUSTOMER : 访客
         * @example `CUSTOMER`
         */
        UserType: string;
        /**
         * 成员头像链接。
         * @example `http://xxx.com/image`
         */
        AvatarUrl: string;
        /**
         * 成员昵称。
         * @example `访客-1a272a174a7d`
         */
        Nickname: string;
    }[];
    /**
     * 网络业务的渠道Token。
     * @example `9XYGTGWtq2wFi_Bpg7aUnIoYi_vG_rO3bjEn0YtsxbHRHrYHlz1LDBLJAyZcLxieRQR4h_6AnWvTjJeNU5jg************Hwej7WgWrmA=`
     */
    "Token"?: string;
    /**
     * 网络业务渠道ID。
     * @example `cf584733-***-***-9699-cb77aa3b7aa6`
     */
    "AccessChannelId"?: string;
}
