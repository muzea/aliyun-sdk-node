export interface CreateLivePrivateLineRequest {
    /**
     * 主播流域名。
     * @example `demo.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 应用名称。
     * @example `live`
     */
    "AppName": string;
    /**
     * 直播流名称。
     * @example `testStream`
     */
    "StreamName": string;
    /**
     * 直播中心，取值：cn-beijing、cn-shanghai、cn-shenzhen、cn-qingdao、ap-northeast-1、ap-southeast-5、eu-central-1、ap-southeast-1、ap-south-1，分别表示位于北京、上海、深圳、青岛、日本、印尼、德国、新加坡、印度的直播中心。
     * @example `cn-shanghai`
     */
    "VideoCenter": string;
    /**
     * 加速类型，取值：
     * - play：播流加速。
     * - publish：推流加速。
     * @example `play`
     */
    "AccelerationType": string;
    /**
     * 加速通道。
     * @example `ap-southeast-1`
     */
    "AccelerationArea": string;
    /**
     * 是否复用已有加速通道，取值：
     * - yes：复用已有加速通道。
     * - no：新建加速通道。
     * @example `no`
     */
    "Reuse": string;
    /**
     * 加速带宽，单位：Mbps。当Reuse为no时必填。
     * @example `200`
     */
    "MaxBandwidth"?: string;
    /**
     * 复用的加速通道。当Reuse为yes时必填。
     * @example `ga-bp1iovsdpf01ym9su****`
     */
    "InstanceId"?: string;
}
