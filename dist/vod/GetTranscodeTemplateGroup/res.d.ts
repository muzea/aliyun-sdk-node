export interface GetTranscodeTemplateGroupResponse {
    /**
     * 请求ID。
     * @example `6730AC93-7B12-4B*****7F-49EE1FE8BC49`
     */
    RequestId: string;
    /**
     * 转码模板组数据。
     */
    TranscodeTemplateGroup: {
        /**
         * 模板组的创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2018-12-12T10:20:51Z`
         */
        CreationTime: string;
        /**
         * 是否是默认模板组。取值：
         * - **Default**：默认模板组。
         * - **NotDefault**：非默认模板组。
         * @example `NotDefault`
         */
        IsDefault: string;
        /**
         * 应用ID。
         * @example `app-****`
         */
        AppId: string;
        /**
         * 转码模板组ID。
         * @example `a59b11f697c716*****6ae1502142d0`
         */
        TranscodeTemplateGroupId: string;
        /**
         * 模板组的名称。
         * @example `test`
         */
        Name: string;
        /**
         * 模板组的修改时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2018-12-12T11:20:51Z`
         */
        ModifyTime: string;
        /**
         * 模板组是否处于锁定状态。取值：
         * - **Disabled**：未锁定
         * - **Enabled**：锁定
         * @example `Enabled`
         */
        Locked: string;
        /**
         * 转码模板配置信息列表。
         */
        TranscodeTemplateList: {
            /**
             * 模板类型，取值：
             * - **Normal**（默认）：正常转码模板。该类型模板不能设置PackageSetting参数。
             * - **VideoPackage**：视频流打包模板。该类型模板会先转码，后构建自适应码流，且必须要配置PackageSetting参数。
             * - **SubtitlePackage**：字幕打包模板。该类型模板不会转码，仅将对应字幕信息构建到自适应码率输出文件中，且必须要设置PackageSetting参数。但该类型模板不能在模板组中单独存在，需要与VideoPackage类型模板一同配置（一个模板组仅能配置一个该类型模板）。
             * @example `Normal`
             */
            Type: string;
            /**
             * 视频流转码配置参数（JSON字符串）。
             * @example `{"Codec":"H.264","Bitrate":"900","Width":"960","Remove":"false","Fps":"30"}`
             */
            Video: string;
            /**
             * 条件转码参数。如需要根据源片码率、分辨率进行基本逻辑判断再输出转码视频，则可设置该参数 （JSON字符串）。
             * @example `{"IsCheckReso":"true","IsCheckResoFail":"false","IsCheckVideoBitrate":"false","IsCheckVideoBitrateFail":"false","IsCheckAudioBitrate":"false","IsCheckAudioBitrateFail":"false"}`
             */
            TransConfig: string;
            /**
             * 视频旋转标参数。控制画面的旋转角度，例如：设置180，则视频画面将上下颠倒。取值范围：`[0,360]`。
             * @example `90`
             */
            Rotate: string;
            /**
             * 转码模板ID。
             * @example `696d29a11erc057*****a3acc398d02f4`
             */
            TranscodeTemplateId: string;
            /**
             * 转码模板名称。
             * @example `test`
             */
            TemplateName: string;
            /**
             * 转码加密配置信息。
             * @example `"EncryptType":"Private"`
             */
            EncryptSetting: string;
            /**
             * 音频流转码配置参数（JSON字符串）。
             * @example `{"Codec":"AAC","Remove":"false","Bitrate":"44","Samplerate":"32000","Channels":"2","Profile":"aac_low"}`
             */
            Audio: string;
            /**
             * 自定义转码输出路径。
             * @example `{MediaId}/transcoce_1`
             */
            TranscodeFileRegular: string;
            /**
             * 封装音视频码流的容器格式（JSON字符串）。
             * @example `"Format":"m3u8"`
             */
            Container: string;
            /**
             * 视频裁剪配置（JSON字符串）。例如：需要截取视频中的5s内容，用于生成一个新的视频，则可设置该参数。
             * @example `{"TimeSpan":{"Seek":"1","Duration":"5"}`
             */
            Clip: string;
            /**
             * 普通转码模板清晰度标记：
             * - **LD**（流畅）
             * - **SD**（标清）
             * - **HD**（高清）
             * - **FHD**（超清）
             * - **OD**（原画，即转封装）
             * - **2K**
             * - **4K**
             * - **SQ**（普通音质）
             * - **HQ**（高音质）
             * 窄带高清1.0内置转码模板清晰度标记：
             * - **LD-NBV1**（流畅）
             * - **SD-NBV1**（标清）
             * - **HD-NBV1**（高清）
             * - **FHD-NBV1**（超清）
             * - **2K-NBV1**
             * - **4K-NBV1**
             * > - 所有转码模板不支持清晰度标记修改。
             * > - 窄带高清1.0转码模板音视频分辨率、码率等参数为系统内置，不支持修改。
             * > - 窄带高清1.0转码模板创建只支持FLV、M3U8(HLS)、MP4格式。
             * @example `SD`
             */
            Definition: string;
            /**
             * 打包配置。仅支持HLS自适应码流打包、DASH打包（JSON字符串）。
             * @example `"PackageType":"HLSPackage","PackageConfig":{   "BandWidth":"900000"  }`
             */
            PackageSetting: string;
            /**
             * 字幕配置 （JSON字符串）。
             * @example `[{"SubtitleUrl":"http://outin-test.oss-cn-shanghai.aliyuncs.com/subtitles/c737fece-14f1-4364-b107-d5f7f8edde0e.ass","CharEncode":"utf-8"}]`
             */
            SubtitleList: string;
            /**
             * 转码的分片设置参数。HLS必传（JSON字符串）。
             * @example `"Segment": { "Duration":"6" }`
             */
            MuxConfig: string;
            /**
             * 关联的图文水印模板ID。
             */
            WatermarkIds: string[];
            /**
             * 溯源水印信息。
             * @example `{
                "Enable": true
            }`
             */
            TraceMark: string;
            /**
             * 版权水印信息。
             * @example `{
                "Content": "测试版权水印文案"
            }`
             */
            CopyrightMark: string;
        }[];
    };
}
