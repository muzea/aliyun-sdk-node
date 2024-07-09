export interface DescribeLivePrivateLineAvailGARequest {
    /**
     * 主播流域名。
     * @example `demo.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 应用名称。
     * @example `live`
     */
    "AppName"?: string;
    /**
     * 直播流名称。
     * @example `testStream`
     */
    "StreamName"?: string;
    /**
     * 加速通道。
     * @example `ap-southeast-1`
     */
    "AccelerationArea"?: string;
    /**
     * 直播中心，取值：cn-beijing、cn-shanghai、cn-shenzhen、cn-qingdao、ap-northeast-1、ap-southeast-5、eu-central-1、ap-southeast-1、ap-south-1，分别表示位于北京、上海、深圳、青岛、日本、印尼、德国、新加坡、印度的直播中心。
     * @example `cn-shanghai`
     */
    "VideoCenter"?: string;
    /**
     * 查询全球加速实例，取值：
     * - yes：查询全球加速实例状态。
     * - no：查询全球加速实例和直播链路的绑定详情。
     * @example `no`
     */
    "IsGaInstance": string;
}
