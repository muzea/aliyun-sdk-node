export interface GetMediaResourceIdRequest {
    /**
     * 资源类型。
     * - **1**：文本
     * - **2**：图片。小图片限制在100 KB以内，大图片限制在2 MB以内，图片要求清晰；图片格式支持JPG、JPEG、PNG。
     * - **3**：音频
     * - **4**：视频。视频格式支持MP4。
     * >
     * > - 资源类型为图片时**img_rate**必填。
     * > - 1:1比例：oneToOne
     * > - 16:9比例：sixteenToNine
     * > - 3:1比例：threeToOne
     * > - 48:65比例：fortyEightToSixtyFiv
     * @example `1`
     */
    "ResourceType": number;
    /**
     * 获取的资源地址。
     * @example `oss://alicom-fc-media/1947741454322274/alicom-fc-media/pic/202205191526575398603697152.png`
     */
    "OssKey": string;
    /**
     * 文件大小，单位：Byte。
     * @example `12`
     */
    "FileSize": number;
    /**
     * 扩展字段。
     * > 资源类型为**图片**时必填。
     * @example `{\"img_rate\":\"oneToOne\"}`
     */
    "ExtendInfo"?: string;
    /**
     * 上传资源的描述。
     * @example `图片信息`
     */
    "Memo"?: string;
}
