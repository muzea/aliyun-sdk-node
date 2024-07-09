export interface DescribeDeviceURLResponse {
    /**
     * 流的URL。
     * @example `rtmp://demo.aliyundoc.com/live/live001?auth_key=1639130258-0-0-b2b04fe85ece6*****a6b1a42bc7e`
     */
    Url: string;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * URL过期时间点。
     * unix时间戳，单位：秒
     * @example `1639130258`
     */
    ExpireTime: number;
}
