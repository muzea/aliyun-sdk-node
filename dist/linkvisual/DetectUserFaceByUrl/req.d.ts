export interface DetectUserFaceByUrlRequest {
    /**
     * 待检测的图片URL，目前仅支持JPEG格式的图片。
     * @example `http://xxx.xxx.com/xxx/face/1.jpg`
     */
    "FacePicUrl": string;
}
