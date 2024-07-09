export interface UploadStreamByURLRequest {
    /**
     * 转码流文件URL。
     * 如果转码流的URL需要鉴权，需要在StreamURL中传入鉴权参数，并确保该URL可以通过公网访问。
     * @example `https://example.com/lesson-01.mp4`
     */
    "StreamURL": string;
    /**
     * 转码流对应的点播媒资ID。
     * @example `ca3a8f6e49*****57b65806709586`
     */
    "MediaId": string;
    /**
     * 视频流清晰度。
     * 取值，详情请参考:  [媒资参数说明-清晰度](~~124671~~)。
     * @example `HD`
     */
    "Definition": string;
    /**
     * 转码流文件扩展名。
     * 扩展名请参见[概述](~~55396~~)中的音频和视频的支持文件格式。
     * 当该参数不为空时，会覆盖StreamURL地址中的文件扩展名。
     * ><notice>若StreamURL地址中不含文件扩展名，该参数必填。></notice>
     * @example `mp4`
     */
    "FileExtension"?: string;
    /**
     * 转码流HDR类型。取值：
     * - HDR
     * - HDR10
     * - HLG
     * - DolbyVision
     * - HDRVivid
     * - SDR+
     * > - 大小写不敏感。
     * > - 非HDR视频该参数为空即可。
     * @example `HDR10`
     */
    "HDRType"?: string;
    /**
     * 用户自定义参数。详情参见[UserData](~~86952~~)。
     * > 此参数中消息回调的使用前提是需要在控制台配置HTTP回调地址和勾选对应的回调事件类型才能使用，否则回调设置不生效。控制台配置HTTP回调的操作，请参考[回调设置](~~86071~~)。
     * @example `{"MessageCallback":{"CallbackURL":"http://aliyundoc.com"}, "Extend":{"localId":"xxx","test":"www"}}`
     */
    "UserData"?: string;
}
