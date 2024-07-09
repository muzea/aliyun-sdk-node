export interface GetTransitRouterFlowTopNResponse {
    /**
     * 请求ID。
     * @example `D5E98683-355B-5867-8D3D-A24755F6895B`
     */
    RequestId: string;
    /**
     * 跨域流量详情排名列表。
     */
    TransitRouterFlowTopN: {
        /**
         * 账号ID。
         * @example `118639953821****`
         */
        AccountId: string;
        /**
         * CEN实例ID。
         * @example `cen-ia8kw1zjv4hyal****`
         */
        CenId: string;
        /**
         * 本端地域，即**ThisIp**所在地域。
         * @example `cn-shanghai`
         */
        ThisRegion: string;
        /**
         * 本端IP地址。
         * @example `1.8.XX.XX`
         */
        ThisIp: string;
        /**
         * 本端端口号。
         * @example `80`
         */
        ThisPort: string;
        /**
         * 目的地域，即**OtherIp**所在地域。
         * @example `ap-southeast-1`
         */
        OtherRegion: string;
        /**
         * 对端IP地址。
         * @example `47.216.XX.XX`
         */
        OtherIp: string;
        /**
         * 对端端口号。
         * @example `53470`
         */
        OtherPort: string;
        /**
         * 协议号。
         * @example `6`
         */
        Protocol: string;
        /**
         * 开始时间。
         * @example `2023-01-31T05:40:00Z`
         */
        StartTime: string;
        /**
         * 结束时间。
         * @example `2023-01-31T06:40:00Z`
         */
        EndTime: string;
        /**
         * 指定时间段内的包数总和。
         * @example `88`
         */
        Packets: number;
        /**
         * 指定时间段内的流量总和。
         * @example `188`
         */
        Bytes: number;
        /**
         * CEN带宽包ID。
         * @example `cenbwp-ia8kw1zjv4hyal****`
         */
        BandwithPackageId: string;
    }[];
}
