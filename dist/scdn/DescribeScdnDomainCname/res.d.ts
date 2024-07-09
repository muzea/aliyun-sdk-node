export interface DescribeScdnDomainCnameResponse {
    /**
     * 请求ID
     * @example `15C66C7B-671A-4297-9187-2C4477247A74`
     */
    RequestId: string;
    CnameDatas: {
        /**
         * Cname信息
         */
        Data: {
            /**
             * 状态
             * @example `6`
             */
            Status: number;
            /**
             * 域名
             * @example `.aliyundoc.com`
             */
            Domain: string;
            /**
             * Cname
             * @example `example.com`
             */
            Cname: string;
        }[];
    };
}
