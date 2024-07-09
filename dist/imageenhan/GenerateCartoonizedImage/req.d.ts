export interface GenerateCartoonizedImageRequest {
    /**
     * 输入图像的URL链接。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `https://viapi-test.oss-cn-shanghai.aliyuncs.com/test-team/xxxxx.jpg`
     */
    "ImageUrl": string;
    /**
     * 该字段已废弃。
     * @example `null`
     */
    "ImageType"?: string;
    /**
     * 卡通效果。取值如下：
     * - 0：复古漫画（默认）
     * - 1：3D童话
     * - 2：二次元
     * - 3：小清新
     * - 4：未来科技
     * - 5：国画古风
     * - 6:  将军百战
     * - 7:  炫彩卡通
     * - 8：清雅国风
     * @example `0`
     */
    "Index": string;
}
