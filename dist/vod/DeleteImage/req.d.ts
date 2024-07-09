export interface DeleteImageRequest {
    /**
     * 图片删除操作类型。取值：
     * - **ImageURL**：根据图片URL删除指定图片。
     * - **ImageId**：根据图片ID删除指定图片。
     * - **VideoId**：根据视频ID删除其关联的图片。
     * @example `VideoId`
     */
    "DeleteImageType": string;
    /**
     * 图片地址，为[CreateUploadImage](~~CreateUploadImage~~)接口返回参数`ImageURL`的值。支持传入多个URL，多个URL之间使用半角逗号（,）分隔，最多支持传入20个URL。
     * > 当**DeleteImageType**取值为**ImageURL**时，本参数才可用且必须传入。
     * @example `https://example.aliyundoc.com/image/default/41AE7ADABBE*****.png`
     */
    "ImageURLs"?: string;
    /**
     * 图片ID。支持传入多个ID，多个图片ID之间请使用半角逗号（,）分隔，最多支持传入20个ID。可通过以下方式获取图片ID：
     * - 可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **图片**查看ID。
     * - 调用[CreateUploadImage](~~CreateUploadImage~~)接口获取上传地址和凭证时会返回。
     * - 调用[SearchMedia](~~SearchMedia~~)接口查询图片时会返回。
     * > 当**DeleteImageType**取值为**ImageId**时，本参数才可用且必须传入。
     * @example `bbc65bba53fed90de118a7849****,594228cdd14b4d069fc17a8c4a****`
     */
    "ImageIds"?: string;
    /**
     * 视频ID，仅支持传入单个视频ID。可通过以下方式获取：
     * - 可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看视频ID。
     * - 调用[CreateUploadVideo](~~CreateUploadVideo~~)接口获取上传地址和凭证时会返回。
     * - 调用[SearchMedia](~~SearchMedia~~)接口查询视频时会返回。
     * >当**DeleteImageType**取值为**VideoId**时，本参数才可用且必须传入。
     * @example `eb1861d2c9a8842340e989dd56****`
     */
    "VideoId"?: string;
    /**
     * 要删除的视频关联的图片类型。取值：
     * - **CoverSnapshot**：封面截图。
     * - **NormalSnapshot**：普通截图。
     * - **SpriteSnapshot**：雪碧截图。
     * - **SpriteOriginSnapshot**：雪碧图原始图。
     * - **All**：以上所有类型的图片。取值为非`All`时，支持选择以上多个图片类型，多个取值之间使用半角逗号（,）分隔。
     * >当**DeleteImageType**取值为**VideoId**时，本参数才可用且必须传入。
     * @example `All`
     */
    "ImageType"?: string;
}
