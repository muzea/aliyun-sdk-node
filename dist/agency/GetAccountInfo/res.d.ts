export interface GetAccountInfoResponse {
    /**
     * 结果码
     * Error Code. Value Range:
     * - 200: OK
     * - 1109: System Error
     * - 3029: Invalid UID
     * - 3062: Uid and UserType are both empty
     * - 3063: UserType value out of range.
     * @example `200`
     */
    Code: string;
    /**
     * message
     * @example `成功`
     */
    Message: string;
    /**
     * 候选值:True/False，代表了是否当前API调用本身是成功 的。不代表后续业务操作的成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 分页信息
     */
    PageInfo: {
        /**
         * 分页，每页数量
         * @example `10`
         */
        PageSize: number;
        /**
         * 分页，总量
         * @example `12`
         */
        Total: number;
        /**
         * 分页，当前页
         * @example `1`
         */
        Page: number;
    };
    AccountInfoList: {
        /**
         * 账号信息列表
         */
        AccountInfo: {
            /**
             * 账户类型:
             * - 1 Agency的终端客户
             * - 2 Reseller的终端客户
             * - 3 企业客户
             * - 4 Agency类型2级伙伴
             * - 5 Reseller类型2级伙伴
             * - 6 Agency+Reseller类型2级伙伴
             * @example `1`
             */
            SubAccountType: number;
            /**
             * 分销客户账户与伙伴账户建立分销主子关系的关联时间
             * @example `2021-01-01`
             */
            AssociationSuccessTime: string;
            /**
             * 分销客户账户昵称。 对于企业客户，是公司名称。 对于T2伙伴，则是伙伴名称。
             * @example `XXX技术有限公司`
             */
            AccountNickname: string;
            /**
             * 分销客户账户电子邮件地址
             * @example `1234@qq.com
            `
             */
            Email: string;
            /**
             * 分销客户账号说明
             * @example `子账号`
             */
            Remark: string;
            /**
             * 分销客户账号手机号
             * @example `13641588680`
             */
            Mobile: string;
            /**
             * 分销客户账户阿里云登录名
             * @example `1234@qq.com`
             */
            AliyunId: string;
            /**
             * 分销客户账户UID
             * @example `1415740779475837`
             */
            Uid: number;
            /**
             * 分销客户对应CID
             * @example `61479572`
             */
            Cid: number;
            /**
             * 延停策略。取值三个如下
             * 1、immediatelyStop，立即停机
             * 2、delayStop，延迟停机。延迟停机额度见delayAmount字段
             * 3、noStop，不停机
             * @example `immediatelyStop`
             */
            DelayStatus: string;
            /**
             * 当延停策略为delayStop（延迟停机）时，透支的额度
             * @example `600`
             */
            DelayAmount: string;
            /**
             * 客户商务经理
             * @example `张三`
             */
            CustomerBd: string;
            /**
             * 下单状态，取值如下
             * Purchase Forbidden（禁止下单）
             * Normal（正常）
             * @example `Normal`
             */
            NewBuyStatus: string;
        }[];
    };
    /**
     * 请求id，阿里云为该请求生成的唯一标识符。
     * @example `9C14ADFE-DF0A-54D4-8BD5-45D0839246B4`
     */
    RequestId: string;
}
