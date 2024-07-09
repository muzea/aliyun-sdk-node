export interface DescribeDomainCnameResponse {
    /**
     * 请求ID
     * @example `06D29681-B7CD-4034-A8CC-28AFFA213539`
     */
    RequestId: string;
    CnameDatas: {
        /**
         * Cname检测结果数组。
         */
        Data: {
            /**
             * Cname检查结果。取值：
             * - 0 表示通过域名解析检测到分配给域名的cname。
             * - 非0表示通过域名解析暂未监测到分配给域名的cname。
             * @example `0`
             */
            Status: number;
            /**
             * 输入参数中的加速域名。
             * @example `a.com`
             */
            Domain: string;
            /**
             * 阿里云CDN分配给域名的Cname
             * @example `a.com.w.alikunlun.net`
             */
            Cname: string;
        }[];
    };
}
