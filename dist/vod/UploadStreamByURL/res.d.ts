export interface UploadStreamByURLResponse {
    /**
     * 请求ID。
     * @example `7AE96389-DF1E-598D-816B-7B40F13B4620`
     */
    RequestId: string;
    /**
     * 转码流JobId。可以作为[GetURLUploadInfos](~~106830~~)接口的请求参数。
     * 点播使用JobId唯一标识一个转码流文件。详情请参考：[基本数据-PlayInfo视频播放信息](~~52839~~)。
     * @example `e304b34fb3d959f92baef97b6496****`
     */
    StreamJobId: string;
    /**
     * 转码流OSS文件地址。
     * @example `http://outin-31059bcee7810a200163e1c8dba****.oss-cn-shanghai.aliyuncs.com/lesson-01.mp4`
     */
    FileURL: string;
    /**
     * 转码流输入URL地址。可以作为[GetURLUploadInfos](~~106830~~)接口的请求参数。
     * @example `https://example.com/lesson-01.mp4`
     */
    SourceURL: string;
}
