export interface DescribeScdnCcTopIpResponse {
    /**
     * 请求ID。
     * @example `FA2EE241-5E9D-488A-B36E-408BF81C077E`
     */
    RequestId: string;
    /**
     * 攻击IP数量。
     * @example `246`
     */
    Total: string;
    /**
     * 安全加速域名。
     * @example `example.com`
     */
    DomainName: string;
    AttackIpDataList: {
        /**
         * 每个时间间隔的攻击者IP相关数据。
         */
        AttackIpDatas: {
            /**
             * 攻击次数。
             * @example `2018398`
             */
            AttackCount: string;
            /**
             * 攻击者的IP地址。
             * @example `1.XXX.XXX.4`
             */
            Ip: string;
        }[];
    };
}
