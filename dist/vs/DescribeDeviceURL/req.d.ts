export interface DescribeDeviceURLRequest {
    /**
     * 设备ID。
     * @example `348*****380-cn-qingdao`
     */
    "Id": string;
    /**
     * 流名。
     * @example `live001`
     */
    "Stream": string;
    /**
     * 流协议。取值：
     * - rtmp
     * - flv
     * - hls
     * > 模式为推流时，仅支持rtmp
     * @example `rtmp`
     */
    "OutProtocol": string;
    /**
     * 流模式。取值：
     * - play（播放）
     * - push（推流）
     * @example `push`
     */
    "Mode"?: string;
    "Type"?: string;
    "Auth"?: boolean;
    /**
     * 鉴权有效时长，单位：秒
     * @example `3600`
     */
    "Expire"?: number;
}
