export interface GetCustomerAccountInfoResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful!`
     */
    Message: string;
    /**
     * 请求id。
     * @example `94017C56-1725-5DD9-AB41-B3BAE791D600`
     */
    RequestId: string;
    /**
     * success=true代表调用执行完成。success=false代表执行出现错误。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 父账号mpk
         * @example `1051360339779133`
         */
        Mpk: number;
        /**
         * 终端客户的邮箱地址
         * @example `xxxx@aliyun.com`
         */
        LoginEmail: string;
        /**
         * 托管状态.信控提供，实例是否托管由阿里云管理，如果托管，阿里云会负责欠费停机操作
         * 1、用户冻结业务-"FREEZE",
         * 2、用户托管业务-"TRUSTEESHIP"
         * @example `FREEZE`
         */
        HostingStatus: string;
        /**
         * 账号类型 1 为企业， 0 个人
         * @example `1`
         */
        AccountType: string;
        /**
         * enduser业务类型
         * 1、用户冻结状态-"Freeze"
         * 2、用户解冻状态-"Thaw"
         *
         * 3、用户托管状态-"Trusteeship"
         *
         * 4、用户非托管状态-"TrusteeshipCancel"
         * @example `Freeze`
         */
        CreditLimitStatus: string;
        /**
         * 实名认证状态
         * @example `true`
         */
        IsCertified: boolean;
    };
}
