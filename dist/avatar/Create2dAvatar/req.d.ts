export interface Create2dAvatarRequest {
    /**
     * 从虚拟数字人开放平台中获取的TenantId
     * @example `xxxx`
     */
    "TenantId": number;
    /**
     * 人物名称
     * @example `博远`
     */
    "Name": string;
    /**
     * 人物描述
     * @example `朝气蓬勃，富有感染力，适用于播音、传媒广电、企业宣传等场景`
     */
    "Description"?: string;
    /**
     * 人物缩略图URL。
     * - 如果不传，将会截取视频第一帧作为人物缩略图。
     * - 如果传，要求分辨率和原视频分辨率保持一致，格式png，大小<10M。
     * @example `https://virtual-human-assets.oss-cn-beijing.aliyuncs.com/2d_assets/xxx/xxx/xxx.png?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx`
     */
    "Image"?: string;
    /**
     * 人物头像URL。
     * - 要求：尺寸1:1，格式png，大小<10M
     * @example `https://virtual-human-assets.oss-cn-beijing.aliyuncs.com/2d_assets/xxx/xxx/xxx.png?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx`
     */
    "Portrait": string;
    /**
     * 原始视频素材URL，要求：
     * - 格式mov、webm、mp4，针对透明视频格式推荐webm
     * - 视频时长5-10分钟
     * - 分辨率1080p
     * - 大小<10G
     * @example `https://virtual-human-assets.oss-cn-beijing.aliyuncs.com/2d_assets/xxx/xxx/xxx.mov?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx`
     */
    "Video": string;
    /**
     * 原始视频素材是否是透明
     * - true：透明格式，可支持替换背景
     * - false：非透明格式，不支持替换背景
     * @example `true`
     */
    "Transparent": boolean;
    /**
     * 原始视频方向：横竖屏
     * - 1: 竖屏
     * - 2: 横屏
     * @example `1`
     */
    "Orientation": number;
    /**
     * 本次2D形象生成任务成功或失败是否需要事件回调，默认false不回调。具体可参考文档：[数字人回调事件通知](https://help.aliyun.com/document_detail/2261152.html?spm=a2c4g.447644.0.0.406f5876hRJTVU)。
     * @example `false`
     */
    "Callback"?: boolean;
}
