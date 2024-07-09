export interface SubmitAudioTo2DAvatarVideoTaskRequest {
    /**
     * 租户ID，从虚拟数字人开放平台中获取的TenantId
     * @example `20516`
     */
    "TenantId": number;
    /**
     * App信息，代表一个业务配置
     */
    "App": {
        /**
         * App ID。在开发者中心-实例管理页面获取对应的appId，[参考文档](https://help.aliyun.com/document_detail/479093.html?spm=a2c4g.447644.0.0.406f66c95dI2Ee#6a48daa1ee899)。
         * @example `3d95xx946a`
         */
        AppId: string;
    };
    /**
     * 提交的视频合成的任务标题，最长不超过32个字符
     * @example `常吃的皮蛋一般是由哪一种蛋加工而成的？`
     */
    "Title": string;
    /**
     * 视频配置
     */
    "VideoInfo"?: {
        /**
         * 是否需要透明通道， 默认false
         * - true： 开启透明通道，视频格式可通过AlphaFormat指定，支持webm、mov、mp4
         * - false：不开启透明通道，视频格式为mp4
         * @example `false`
         */
        IsAlpha: boolean;
        /**
         * 有效可访问的url背景图片地址；
         * 背景图片的分辨率必须要与生成的视频分辨率保持一致；
         * 目前支持jpg，jpeg，png的图片格式
         * @example `可访问的公网url地址`
         */
        BackgroundImageUrl: string;
        /**
         * 生成的视频分辨率，不同人物支持不同分辨率：
         * - 3：1080 * 1920（竖屏）博远、柏翰、凡宇、馨馨
         * - 4：1920 * 1080（横屏）小纯
         * 自定义人物默认与原视频分辨率一致
         * @example `3`
         */
        Resolution: number;
        /**
         * 透明通道格式 ，默认值1
         * - 1：webm
         * - 2：mov
         * - 3：mp4
         * ><notice>当isAlpha为false时，该字段忽略。mov格式的透明视频文件大小会非常大，不推荐使用，建议使用webm或者mp4。></notice>
         * @example `1`
         */
        AlphaFormat: number;
    };
    /**
     * 数字人形象相关配置。
     */
    "AvatarInfo"?: {
        /**
         * 数字人形象code，从虚拟数字人开放平台-2D资产页面获取，不传则使用应用配置的默认形象。
         * @example `CH_2d_xxxxxxx`
         */
        Code: string;
        /**
         * 数字人图层相对于画面左上角横轴像素偏移量，原始状态默认为0
         * @example `0`
         */
        X: number;
        /**
         * 数字人图层相对于画面左上角纵轴像素偏移量，原始状态默认为0
         * @example `0`
         */
        Y: number;
        /**
         * 数字人图层宽度
         * @example `数字人底板视频为横屏：1920
        数字人底板视频为竖屏：1080`
         */
        Width: number;
        /**
         * 数字人图层高度
         * @example `数字人底板视频为横屏：1080
        数字人底板视频为竖屏：1920`
         */
        Height: number;
    };
    /**
     * 音频相关配置。
     */
    "AudioInfo"?: {
        /**
         * 输出音频采样率（单位: Hz）。
         * @example `16000`
         */
        SampleRate: number;
    };
    /**
     * 音频的地址url，要求音频时长小于30分钟，采样率16K，单声道，单采样点位深16bit
     * @example `可访问的公网url地址`
     */
    "Url": string;
    /**
     * 本次视频合成任务是否需要事件回调，默认false不回调。平台支持在任务开始和任务结束时进行事件回调，具体可参考文档：[数字人回调事件通知](https://help.aliyun.com/document_detail/2261152.html?spm=a2c4g.447644.0.0.406f5876hRJTVU)。
     * @example `false`
     */
    "Callback"?: boolean;
    /**
     * 回调时需要透传的一些参数，json格式字符串，callback=false时不生效。
     * @example `{
          "xxx": "xxx"
    }`
     */
    "CallbackParams"?: string;
    /**
     * 一些扩展参数。
     * @example `{"xxx": "xxx"}`
     */
    "ExtParams"?: string;
}
