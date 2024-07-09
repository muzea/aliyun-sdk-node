export interface MergeImageFaceRequest {
    /**
     * 人脸模板的模板ID。
     * > 需要先上传模版，具体操作，请参见[图像人脸融合模板增加](~~203512~~)。
     * @example `6cd509ea-54fa-4730-8e9d-c94cadcda048`
     */
    "TemplateId": string;
    /**
     * 待融合的人脸照片，仅在模板图为单人场景下使用。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * 输入限制：
     * - 图像格式：JPG、JPEG、PNG。
     * - 图像大小：不超过20 MB。
     * - 图像分辨率：大于等于128×128像素，小于等于2000×2000像素，最长边小于等于2000像素。
     * - URL地址中不能包含中文字符。
     * > - 当图像分辨率超过最大限制时，请先将图片进行缩放，调整图片大小，具体请参见[图片缩放](~~44688~~)。
     * - **ImageURL**与**MergeInfos**二选一。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/MergeImageFace/MergeImageFace-1.png`
     */
    "ImageURL"?: string;
    /**
     * 提供两版模型，分别支持脸型适配（v1）与非脸型适配（v2）的效果，具有一定区分度。默认值为v1（脸型适配版本）。
     * @example `v1`
     */
    "ModelVersion"?: string;
    /**
     * 是否添加水印。取值范围如下：
     * - False（默认）：不添加水印。
     * - True：添加水印。
     * @example `False`
     */
    "AddWatermark"?: boolean;
    /**
     * 水印类型。取值范围如下：
     * - EN（默认）：英文水印。
     * - CN：中文水印。
     * @example `EN`
     */
    "WatermarkType"?: string;
    "MergeInfos"?: {
        /**
         * 多脸模板对应的某个人脸的子ID。
         * @example `6cd509ea-54fa-4730-8e9d-c94cadcda048_0`
         */
        TemplateFaceID: string;
        /**
         * 该人脸待替换的图像URL。
         * @example `http://invi-label.oss-cn-shanghai.aliyuncs.com/label/temp/faceswap/ref/ref.jpg`
         */
        ImageURL: string;
    }[];
}
