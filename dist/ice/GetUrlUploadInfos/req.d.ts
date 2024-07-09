export interface GetUrlUploadInfosRequest {
    /**
     * 上传任务ID（JobId）列表。由一个或多个JobId组成，JobId为通过[UploadMediaByURL](~~86311~~)接口上传时，返回参数JobId的值。
     * - 最多支持10个ID。
     * - 多个ID之间使用半角逗号（,）分隔。
     * > JobIds和UploadURLs必须指定一个，二者同时传入时只处理JobIds。
     * @example `df2ac80b481346daa1db6a7c40edc7f8`
     */
    "JobIds"?: string;
    /**
     * 上传视频源文件URL列表。多个URL之间使用半角逗号（,）分隔，最多支持10个。
     * > - 使用前，先进行URL编码。
     * > - 如果同一URL视频多次上传，建议传入单个URL进行查询。
     * > - JobIds和UploadURLs必须指定一个，二者同时传入时只处理JobIds。
     * @example `https://media.w3.org/2010/05/sintel/trailer.mp4`
     */
    "UploadURLs"?: string;
}
