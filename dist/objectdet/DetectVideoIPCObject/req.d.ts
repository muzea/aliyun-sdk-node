export interface DetectVideoIPCObjectRequest {
    /**
     * 视频文件URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/objectdet/DetectVideoIPCObject/DetectVideoIPCObject1.mp4`
     */
    "VideoURL": string;
    /**
     * 视频实际开始时间的时间戳。例如视频开始时间是2021年8月16日12:00，对应时间戳为1629086400。
     * @example `1629086400`
     */
    "StartTimestamp"?: number;
    /**
     * 是否回调消息过滤。
     * - true：如果输入的视频中检测到有目标，才会执行回调，否则不执行。
     * - false: 无论是否检测到有目标，都执行回调。
     * @example `true`
     */
    "CallbackOnlyHasObject"?: boolean;
}
