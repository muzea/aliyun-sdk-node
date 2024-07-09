export interface MergeVideoFaceRequest {
    /**
     * 输入视频的URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videoenhan/MergeVideoFace/MergeVideoFace1.mp4`
     */
    "VideoURL": string;
    /**
     * 替换后的人脸参考图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * 输入限制：
     * - 图像格式：JPEG、JPG、PNG。
     * - 图像分辨率：大于等于128×128像素，小于等于4000×4000像素。
     * - 图像大小：不大于20 MB。
     * - URL地址不能包含中文字符。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/videoenhan/MergeVideoFace/MergeVideoFace-pic1.png`
     */
    "ReferenceURL": string;
    /**
     * 是否添加水印。取值范围如下：
     * - True（默认）：添加水印。
     * - False：不添加水印。
     * @example `True`
     */
    "AddWatermark"?: boolean;
    /**
     * 是否开启人脸美颜增强。取值范围如下：
     * - False（默认）：不开启人脸美颜增强。
     * - True：开启人脸美颜增强。
     * @example `False`
     */
    "Enhance"?: boolean;
    /**
     * 水印类型。取值范围如下：
     * - EN（默认）：英文水印。
     * - CN：中文水印。
     * @example `EN`
     */
    "WatermarkType"?: string;
}
