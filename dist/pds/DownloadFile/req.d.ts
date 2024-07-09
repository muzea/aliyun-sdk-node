export interface DownloadFileRequest {
    "domain_id": string;
    /**
     * 分享id。 如果通过分享操作文件，请携带`x-share-token header`鉴权并传递此字段，此时`drive_id`无效。否则请使用`aksk`或者`access_token`方式鉴权，并传递`drive_id`字段。 `share_id`和`drive_id`两者必须有一个字段赋值。
     * @example `7JQX1FswpQ8`
     */
    "share_id"?: string;
    /**
     * 空间id
     * @example `1`
     */
    "drive_id"?: string;
    /**
     * 文件id
     * @example `9520943DC264`
     */
    "file_id": string;
    /**
     * 图片处理样式，设置后会跳转至处理后的缩略图地址
     * @example `image/resize,m_fill,h_128,w_128,limit_0`
     */
    "image_thumbnail_process"?: string;
    /**
     * 视频处理样式，设置后会跳转至处理后的缩略图地址
     * @example `video/snapshot,t_7000,f_jpg,w_800,h_600,m_fast`
     */
    "video_thumbnail_process"?: string;
    /**
     * 文档处理样式，设置后会跳转至处理后的缩略图地址
     * @example `image/resize,m_lfit,w_256,limit_0/format,jpg|image/format,webp`
     */
    "office_thumbnail_process"?: string;
}
