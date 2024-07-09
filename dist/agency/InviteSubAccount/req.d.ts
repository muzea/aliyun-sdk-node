export interface InviteSubAccountRequest {
    /**
     * 邀请账号信息列表，一次小于等于5个
     */
    "AccountInfoList": {
        /**
         * 子账号类型:
         * - 1: Agency 的 End user
         * - 2: Reseller 的End user
         * - 5: Reseller 的T2伙伴
         * @example `1`
         */
        SubAccountType: string;
        /**
         * 分销客户账户的邮件地址，要发送邀请邮件到这里
         * @example `12345@163.com`
         */
        EmailAddress: string;
        /**
         * 分销客户的名称:
         * - 当是分销客户是一家企业时，为企业的公司名称
         * - 当是分销客户是T2 reseller伙伴时，为伙伴名称
         * @example `XXX技术有限公司`
         */
        AccountNickname: string;
        /**
         * 伙伴分配给分销客户的总预算额度(quota)
         * @example `100`
         */
        CreditLine: string;
        /**
         * 分销客户描述
         * @example `发展xx为客户的邀请`
         */
        Remark: string;
        /**
         * 伙伴对分销客户的停机策略管理。
         * - 1: delayStop 享受延停额度延迟停机：阿里云接管资源，延停额度耗尽是触发实例停机，再15天还未付费，则会释放存储资源。
         * - 2: noStop手工管理欠费不停机,：系统不会管理子账号的资源生命周期。伙伴需要手工管理客户的实例停机状态。
         * - 3：immediatelyStop  欠费立停，客户账号可用额度小于0账号进入欠费状态触发实例停机。
         * @example `1`
         */
        ZeroCreditShutdownPolicy: string;
        /**
         * 初始下单状态：
         * - ban：禁购--客户注册关联成功后不可立即下单购买云资源，需要在后续将“下单控制”配置为“正常”才可以下单。
         * - normal：正常--客户注册关联成功后可立即下单购买云资源。
         * @example `ban`
         */
        NewBuyStatus: string;
        /**
         * Customer Id 从CreateCustomer API返回的
         * @example `1234567`
         */
        CustomerId: string;
        /**
         * 客户商务经理（限50字符）
         * @example `张三`
         */
        CustomerBd: string;
    }[];
}
