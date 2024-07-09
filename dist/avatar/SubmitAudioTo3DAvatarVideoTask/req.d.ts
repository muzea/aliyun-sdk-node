export interface SubmitAudioTo3DAvatarVideoTaskRequest {
    /**
     * 租户ID，从虚拟数字人开放平台中获取的TenantId
     * @example `xxxx`
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
     * @example `这是一个示例标题`
     */
    "Title": string;
    /**
     * 视频配置
     */
    "VideoInfo"?: {
        /**
         * 生成的视频分辨率，目前支持：
         * - 1：720 * 1280（竖屏）
         * - 2：1280 * 720（横屏）
         * - 3：1080 * 1920（竖屏）
         * - 4：1920 * 1080（横屏）
         * @example `1`
         */
        Resolution: number;
        /**
         * 是否需要透明通道， 默认false
         * - true： 开启透明通道，视频格式可通过AlphaFormat指定，支持webm、mov、mp4
         * - false：不开启透明通道，视频格式为mp4
         * @example `false`
         */
        IsAlpha: boolean;
        /**
         * 有效可访问的url背景图片地址，背景图片的分辨率必须要与生成的视频分辨率保持一致
         * - 目前支持jpg，jpeg，png的图片格式
         * @example `可访问的公网url地址`
         */
        BackgroundImageUrl: string;
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
     * 数字人相关配置
     */
    "AvatarInfo"?: {
        /**
         * 数字人机位
         * - 0: 全身近景机位，默认机位
         * - 1: 头部近景机位
         * - 2: 全身远景机位
         * - 3: 半身近景机位
         * - 4: 半身远景机位
         * - 5: 左边近景机位
         * - 6: 右边近景机位
         * 具体每个机位的效果预览可以参考：[3D数字人视频合成使用指南](https://help.aliyun.com/document_detail/447834.html#9c8a96707515k)
         * @example `0`
         */
        Locate: number;
        /**
         * 数字人角度
         * - 0: 正面，默认角度
         * - 1: 左侧30度
         * - 2: 右侧30度
         * 具体每个角度的效果预览可以参考：[3D数字人视频合成使用指南](https://help.aliyun.com/document_detail/447834.html#a989eb5075t9y)
         * @example `0`
         */
        Angle: number;
        /**
         * 人物code
         * ><warning>目前音频合成功能只支持部分人物：Bonnie、Stella、Daisy，以及基于这三个人物新建的数字人。></warning>
         * @example `CH_xxxxxxx`
         */
        Code: string;
        /**
         * 行业code，默认值：default
         * - default - 默认通用
         * - kefu - 客服行业
         * - live - 直播场景
         * @example `default`
         */
        IndustryCode: string;
    };
    /**
     * 音频的地址url，要求音频时长小于30分钟，采样率16K，单声道，单采样点位深16bit
     * @example `可访问的公网url地址
    `
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
}
