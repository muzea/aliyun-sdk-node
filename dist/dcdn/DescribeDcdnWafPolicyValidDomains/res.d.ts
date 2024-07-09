export interface DescribeDcdnWafPolicyValidDomainsResponse {
    /**
     * 每页显示的域名个数，同请求参数的PageSize。
     * @example `20`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `3C6CCEC4-6B88-4D4A-93E4-D47B3D92C630`
     */
    RequestId: string;
    /**
     * 页码，同请求参数的PageNumber。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 查询到的域名总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 防护域名列表。
     */
    Domains: {
        /**
         * 防护策略名称。
         * @example `test1`
         */
        PolicyName: string;
        /**
         * 防护策略ID。
         * @example `1000001`
         */
        PolicyId: number;
        /**
         * 防护域名。
         * @example `example.com`
         */
        DomainName: string;
        /**
         * 是否为默认防护策略，取值：
         * - default：默认
         * - custom：非默认
         * @example `default`
         */
        PolicyType: string;
        /**
         * 域名所绑定的策略。
         */
        Policies: {
            /**
             * 策略ID。
             * @example `10000002`
             */
            Id: number;
            /**
             * 策略名称。
             * @example `test2`
             */
            Name: string;
            /**
             * 策略类型。
             * @example `custom`
             */
            Type: string;
        }[];
    }[];
}
