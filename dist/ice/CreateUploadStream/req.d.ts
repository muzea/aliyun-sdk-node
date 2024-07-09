export interface CreateUploadStreamRequest {
    /**
     * 媒资ID。
     * @example `****20b48fb04483915d4f2cd8ac****`
     */
    "MediaId"?: string;
    /**
     * 视频流清晰度定义。取值：
     * - FD：流畅。
     * - LD：标清。
     * - SD：高清。
     * - HD：超清
     * - OD：原画。
     * - 2K：2K。
     * - 4K：4K。
     * - SQ：普通音质。
     * - HQ：高音质。
     * @example `HD`
     */
    "Definition"?: string;
    /**
     * 媒体文件扩展名。
     * @example `MP4`
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
     * 用户自定义参数。
     * @example `{"MessageCallback":{"CallbackURL":"http://aliyundoc.com"}, "Extend":{"localId":"xxx","test":"www"}}`
     */
    "UserData"?: string;
}
