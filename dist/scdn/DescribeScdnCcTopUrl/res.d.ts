export interface DescribeScdnCcTopUrlResponse {
    /**
     * 请求ID。
     * @example `FA2EE241-5E9D-488A-B36E-408BF81C077E`
     */
    RequestId: string;
    /**
     * 攻击URL数量。
     * @example `123`
     */
    Total: string;
    /**
     * 安全加速域名。
     * @example `example.com`
     */
    DomainName: string;
    AttackUrlDataList: {
        /**
         * 每个时间间隔的被攻击的URL相关数据。
         */
        AttackUrlDatas: {
            /**
             * 攻击次数。
             * @example `2018398`
             */
            AttackCount: string;
            /**
             * 攻击者的URL。
             * @example `/xxxxx/xxx`
             */
            Url: string;
        }[];
    };
}
