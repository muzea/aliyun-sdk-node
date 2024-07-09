export interface DescribeDestinationPortEventResponse {
    /**
     * 本次调用请求的 ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `9E7F6B2C-03F2-462F-9076-B782CF0DD502`
     */
    RequestId: string;
    /**
     * 端口列表。
     */
    PortList: {
        /**
         * 目的端口。
         * @example `80`
         */
        DstPort: string;
        /**
         * 目的端口的请求包数量。
         * @example `8760950`
         */
        InPkts: number;
    }[];
}
