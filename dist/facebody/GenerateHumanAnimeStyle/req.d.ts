export interface GenerateHumanAnimeStyleRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * 图片格式要求：
     * - 图像格式：JPG、JPEG、PNG。
     * - 图像大小：不超过3 MB。
     * - 图像分辨率：大于32×32像素，小于2000×2000像素。最长边小于等于1999像素，人脸占比不低于60×60像素。
     * - 支持有单人或多人的人脸清晰正面照，最大人脸数目限制5，人脸朝向在上下左右45度以内。
     * - URL地址中不能包含中文字符。
     * > 图像内容：当图像分辨率超过最大限制时，请先将图片进行缩放，调整图片大小，具体请参见[图片缩放](~~44688~~)。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/GenerateHumanAnimeStyle/GenerateHumanAnimeStyle8.png`
     */
    "ImageURL": string;
    /**
     * 卡通效果配置参数。取值如下：
     * - anime：日漫风
     * - 3d：3D特效
     * - handdrawn：手绘风
     * - sketch：铅笔画
     * - artstyle：艺术特效
     * - claborate  ：国画工笔画
     * - hongkong  ：港漫风
     * - comic：漫画风格
     * - animation3d：动画3D
     * @example `anime`
     */
    "AlgoType"?: string;
}
