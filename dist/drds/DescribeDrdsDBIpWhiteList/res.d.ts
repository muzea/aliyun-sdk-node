export interface DescribeDrdsDBIpWhiteListResponse {
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `017453B9-0001-4745-87BF-DD612D850ED0`
     */
    RequestId: string;
    IpWhiteList: {
        Ip: string[];
    };
}
