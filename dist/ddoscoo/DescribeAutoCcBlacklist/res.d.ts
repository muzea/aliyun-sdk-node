export interface DescribeAutoCcBlacklistResponse {
    /**
     * 黑名单IP的总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `E78C8472-0B15-42D5-AF22-A32A78818AB2`
     */
    RequestId: string;
    /**
     * 针对DDoS高防实例的黑名单IP列表。
     */
    AutoCcBlacklist: {
        /**
         * 黑名单IP的来源。取值：
         * - **manual**：手动添加
         * - **auto**：自动添加
         * @example `manual`
         */
        Type: string;
        /**
         * DDoS高防实例的IP。
         * @example `192.0.XX.XX`
         */
        DestIp: string;
        /**
         * 黑名单IP的失效时间。时间戳格式，单位：秒。
         * @example `1584093569`
         */
        EndTime: number;
        /**
         * 黑名单IP。
         * @example `47.100.XX.XX`
         */
        SourceIp: string;
    }[];
}
