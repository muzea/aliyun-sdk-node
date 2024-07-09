export interface DescribeIpWhitelistResponse {
    /**
     * 请求ID。
     * @example `070CAB1F-0F38-4EA8-8FD9-CA129F22409D`
     */
    RequestId: string;
    IpList: {
        IP: string[];
    };
}
