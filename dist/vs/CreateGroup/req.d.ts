export interface CreateGroupRequest {
    /**
     * 空间名称
     * @example `我的视频监控`
     */
    "Name": string;
    /**
     * 空间描述
     * @example `我的视频监控`
     */
    "Description"?: string;
    /**
     * 空间使用的应用名称，默认取值：live
     * @example `live`
     */
    "App"?: string;
    /**
     * 空间所属区域，即服务中心
     * @example `cn-shanghai`
     */
    "Region"?: string;
    /**
     * 空间使用的接入协议，取值：
     * - gb28181
     * - rtmp
     * @example `rtmp`
     */
    "InProtocol": string;
    /**
     * 空间使用的播放协议，多值用逗号分隔，取值：
     * - flv
     * - hls
     * - rtmp
     * @example `flv,rtmp`
     */
    "OutProtocol"?: string;
    /**
     * 空间使用的推流域名
     * @example `example.aliyundoc.com`
     */
    "PushDomain"?: string;
    /**
     * 空间使用的播流域名
     * @example `demo.aliyundoc.com`
     */
    "PlayDomain"?: string;
    /**
     * 是否启用按需拉流。取值：
     * - false（默认）
     * - true
     * @example `false`
     */
    "LazyPull"?: boolean;
    /**
     * 空间内设备/流状态更新时的回调
     * @example `http://example.com/callback`
     */
    "Callback"?: string;
}
