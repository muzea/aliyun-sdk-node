export interface CreateStreamSnapshotResponse {
    /**
     * 截图文件的Object。
     * @example `photos/live/340200*****100049/ondemand-1639126601767.jpg`
     */
    OssObject: string;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 图片宽度。
     * @example `1280`
     */
    Width: number;
    /**
     * 图片高度。
     * @example `720`
     */
    Height: number;
    /**
     * 截图文件的URL。
     * @example `http://examplebucket.oss-*****.aliyuncs.com/photos/live/340200*****100049/ondemand-1639126601767.jpg`
     */
    Url: string;
    /**
     * 截图时间戳。
     * @example `1639126601767`
     */
    Timestamp: number;
    /**
     * 截图文件的Bucket。
     * @example `examplebucket`
     */
    OssBucket: string;
    /**
     * 图片格式。
     * @example `jpg`
     */
    Format: string;
    /**
     * 截图文件的OSS Endpoint。
     * @example `oss-cn-qingdao.aliyuncs.com`
     */
    OssEndpoint: string;
    /**
     * 流ID。
     * @example `323*****997-cn-qingdao`
     */
    Id: string;
}
