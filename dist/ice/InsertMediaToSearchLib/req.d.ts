export interface InsertMediaToSearchLibRequest {
    /**
     * 搜索库名称。默认值ims-default-search-lib。
     * @example `test1`
     */
    "SearchLibName"?: string;
    /**
     * 媒资ID。具有唯一性，不填会自动生成。
     * @example `411bed50018971edb60b0764a0ec6***`
     */
    "MediaId"?: string;
    /**
     * 媒资类型。默认值video。
     * - video视频
     * - image图片
     * - audio音频
     * @example `video`
     */
    "MediaType"?: string;
    /**
     * 需要入库的视频、音频或图片文件的地址。
     * 说明：
     * 请确认您的文件名正确且所在Bucket与接口调用地域一致，否则可能导致找不到文件或接口调用失败。
     * OSS地址：oss://[Bucket名称]/[文件路径]，例如oss://[example-bucket-****]/[object_path-****]。
     * HTTP地址：公网可下载的地址，例如http://example-test-****.mp4。
     * @example `http://example-test-****.mp4`
     */
    "Input": string;
    /**
     * 媒资信息消息体。
     * @example `{}`
     */
    "MsgBody"?: string;
}
