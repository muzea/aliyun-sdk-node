export interface DescribeDcdnDomainCnameResponse {
    /**
     * 请求ID。
     * @example `15C66C7B-671A-4297-9187-2C4477247A74`
     */
    RequestId: string;
    CnameDatas: {
        /**
         * CNAME信息。
         */
        Data: {
            /**
             * CNAME配置状态，返回0表示成功，返回其他数字表示配置错误。
             * - 0：表示通过域名解析检测到分配给域名的CNAME。
             * - 非0：表示通过域名解析暂未监测到分配给域名的CNAME。
             * @example `0`
             */
            Status: number;
            /**
             * 加速域名。
             * @example `.example.com`
             */
            Domain: string;
            /**
             * 阿里云DCDN分配给域名的CNAME。
             * @example `a.com.w.alikunlun.net`
             */
            Cname: string;
        }[];
    };
}
