export interface DescribeAutoCcWhitelistResponse {
    /**
     * 白名单IP的总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 本次请求的ID。
     * @example `F09D085E-5E0F-4FF2-B32E-F4A644049162`
     */
    RequestId: string;
    /**
     * 针对DDoS高防实例的白名单IP列表。
     */
    AutoCcWhitelist: {
        /**
         * 白名单IP类型。取值：
         * - **manual**：手动添加
         * - **auto**：自动添加
         * @example `manual`
         */
        Type: string;
        /**
         * DDoS高防实例的IP。
         * @example `203.***.***.117`
         */
        DestIp: string;
        /**
         * 白名单IP的失效时间，单位：秒。**0**表示永久生效。
         * @example `0`
         */
        EndTime: number;
        /**
         * 白名单IP。
         * @example `2.2.2.2`
         */
        SourceIp: string;
    }[];
}
