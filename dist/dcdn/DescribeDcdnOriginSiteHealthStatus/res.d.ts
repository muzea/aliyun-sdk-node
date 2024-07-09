export interface DescribeDcdnOriginSiteHealthStatusResponse {
    /**
     * 请求ID。
     * @example `0AEDAF20-4DDF-4165-8750-47FF9C1929C9`
     */
    RequestId: string;
    /**
     * 加速域名对应的源站运行情况列表。
     */
    OriginSiteStatus: {
        /**
         * 您在DCDN控制台上配置的源站域名，包括IPv4地址、IPv6地址、普通域名、OSS域名。
         * @example `host.com`
         */
        Host: string;
        /**
         * DCDN的各个节点会定期对您配置的源站域名发起探测请求，若在5秒之内收到源站响应则认为探测成功。通过汇总各个节点的探测数据，根据成功比例计算出源站的运行状态。各个运行状态的说明如下：
         * - unknown（未知）：未能获取到对应源站的探测数据，这是由于该源站的配置短期内发生过变更，请您稍后重试。
         * - healthy（健康）：成功探测的比例高于80%。
         * - degraded（部分健康）：成功探测的比例小于等于80%，但高于0%。
         * - critical（异常）：对该源站的所有探测请求均失败。
         * @example `healthy`
         */
        HealthStatus: string;
    }[];
}
