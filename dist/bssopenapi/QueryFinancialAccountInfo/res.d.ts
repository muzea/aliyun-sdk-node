export interface QueryFinancialAccountInfoResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 消息说明。
     * @example `Successful!`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `97426BC2-792E-41F5-92B8-73C710DA7779`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据消息体。
     */
    Data: {
        /**
         * 成员账号的显示名称。
         * @example `测试`
         */
        MemberNickName: string;
        /**
         * 是否是企业财务账号：true表示是，false表示否。
         * @example `true`
         */
        IsFinancialAccount: boolean;
        /**
         * 成员账号所在的组名。
         * @example `测试组`
         */
        MemberGroupName: string;
        /**
         * 账号登录名。
         * @example `killortop3`
         */
        UserName: string;
        /**
         * 企业财务账号类型：MASTER表示主账号，MEMBER表示成员账号。
         * @example `MEMBER`
         */
        AccountType: string;
        /**
         * 成员账号所在的组ID。
         * @example `124`
         */
        MemberGroupId: number;
    };
}
