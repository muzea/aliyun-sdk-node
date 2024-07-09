export interface DescribeNodeCidrListRequest {
    /**
     * DBS地域，可通过调用[DescribeRegions](~~437238~~)接口查看DBS支持地域。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
     */
    "ClientToken"?: string;
}
