export interface SetAccountInfoRequest {
    /**
     * 子账户昵称。 对于企业客户，是公司名称。 对于T2伙伴，则是伙伴名称。
     * @example `我的账号`
     */
    "AccountNickname"?: string;
    /**
     * 子账户说明
     * @example `测试的账号`
     */
    "Remark"?: string;
    /**
     * 子账户UID
     * @example `1133166938931507`
     */
    "Uid": number;
    /**
     * 客户商务经理（限50字符）
     * @example `张三`
     */
    "CustomerBd"?: string;
}
