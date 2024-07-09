export interface SplitVideoPartsRequest {
    /**
     * 视频URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `https://viapi-test.oss-cn-shanghai.aliyuncs.com/test-team/ocr/xxxx.mp4`
     */
    "VideoUrl": string;
    /**
     * 拆条模板，当前只支持`live`模板。
     * @example `live`
     */
    "Template"?: string;
    /**
     * 拆条最小长度，单位为秒，用户可以根据实际业务需求进行灵活配置，也可以不配置。
     * @example `10`
     */
    "MinTime"?: number;
    /**
     *  拆条最大长度，单位为秒，用户可以根据实际业务需求进行灵活配置，也可以不配置。
     * @example `20`
     */
    "MaxTime"?: number;
}
