export interface DescribeStreamURLRequest {
    /**
     * 流ID。
     * @example `323*****997-cn-qingdao`
     */
    "Id": string;
    /**
     * 流类型，默认live。取值：
     * - live（直播流）
     * - vod（点播流，例如NVR上的历史流）
     * @example `live`
     */
    "Type"?: string;
    /**
     * 流播放协议。取值：
     * - rtmp
     * - flv
     * - hls
     * @example `rtmp`
     */
    "OutProtocol": string;
    /**
     * 是否需要生成签名URL。取值：
     * - true
     * - false
     * @example `true`
     */
    "Auth"?: boolean;
    /**
     * 播放域名关联的主key，用于生成鉴权URL。
     * > 通过 [DescribeVsDomainConfigs](https://next.api.aliyun.com/document/vs/2018-12-12/DescribeVsDomainConfigs) 接口查询对应的AuthKey信息
     * @example `ocs*****ace`
     */
    "AuthKey"?: string;
    /**
     * URL的过期时长，单位：秒
     * @example `3600`
     */
    "Expire"?: number;
    /**
     * 开始时间，适用于vod流类型。
     * unix时间戳，单位：秒
     * @example `1571639499`
     */
    "StartTime"?: number;
    /**
     * 结束时间，适用于vod流类型。
     * unix时间戳，单位：秒
     * @example `1571649499`
     */
    "EndTime"?: number;
    /**
     * 转码规则名称（需要先绑定转码模板）。
     * @example `sd`
     */
    "Transcode"?: string;
}
