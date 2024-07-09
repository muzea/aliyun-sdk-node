export interface ModifyGroupRequest {
    /**
     * 空间ID。
     * @example `32388487739092994-cn-qingdao`
     */
    "Id": string;
    /**
     * 空间名称。
     * @example `myGroup`
     */
    "Name"?: string;
    /**
     * 空间描述。
     * @example `用于测试使用`
     */
    "Description"?: string;
    /**
     * 空间所属区域，即服务中心。
     * @example `cn-qingdao`
     */
    "Region"?: string;
    /**
     * 空间使用的接入协议。取值：
     * - gb28181
     * - rtmp
     * @example `gb28181`
     */
    "InProtocol"?: string;
    /**
     * 空间使用的播放协议，多值用逗号分隔。取值：
     * - flv
     * - hls
     * - rtmp
     * @example `flv,rtmp,hls`
     */
    "OutProtocol"?: string;
    /**
     * 空间是否启用。
     * @example `true`
     */
    "Enabled"?: boolean;
    /**
     * 空间使用的推流域名。（仅限于rtmp接入的空间）
     * @example `mypush.com`
     */
    "PushDomain"?: string;
    /**
     * 空间使用的播流域名。
     * @example `myplay.com`
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
     * 空间内设备/流状态更新时的回调。
     * @example `http://example.com/callback`
     */
    "Callback"?: string;
}
