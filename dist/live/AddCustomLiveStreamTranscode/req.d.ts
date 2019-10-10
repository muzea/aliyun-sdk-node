interface AddCustomLiveStreamTranscodeRequest {
    /**
    * 所属区域。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 直播流所属应用名称。
    * 可包含数字、大小写字母、下划线("_")或短横线("-")。
    * @example `AppName`
    */ "App": string;
    /**
    * 转码模板自定义名称。
    * 取值要求：数字、大小写字母或短横线("-")。
    * <note>不能与标准的转码模板命名重复。</note>
    * @example `LDtest`
    */ "Template": string;
    /**
    * 自定义转码模版类型。目前支持：
    * - **h264**(自定义H264标准模版)
    * - **h264-nbhd**(自定义H264窄带高清™模版)
    * - **h265** (自定义H265标准模版)
    * - **h265-nbhd** (自定义H265窄带高清模版)
    * - **audio纯音频模板**
    * @example `h264`
    */ "TemplateType": string;
    "OwnerId"?: number;
    /**
    * 您的加速域名。
    * @example `live.aliyunlive.com`
    */ "Domain": string;
    /**
    * 转码视频宽度。
    * - 取值范围：Width≥ 100
    * - max(Height,Width) ≤ 2560
    * - min(Height,Width) ≤ 1440
    * <note>265窄带高清模板不得超过1280*720</note>
    * @example `720`
    */ "Height"?: number;
    /**
    * 转码视频宽度。
    * - 取值要求：Width ≥ 100
    * - max(Height,Width) ≤ 2560
    * - min(Height,Width) ≤ 1440
    * <note>265窄带高清模板不得超过1280*720</note>
    * @example `576`
    */ "Width"?: number;
    /**
    * 转码视频帧率。单位：fps，取值范围：1~60。
    * @example `30`
    */ "FPS"?: number;
    /**
    * 转码视频比特率。单位：kbps，取值范围：1~6000。
    * <note>转码视频会尽量接近您所设定的比特率, 但转码视频的实际比特率不能保证和您所设定的完全一致, 尤其是当您设定的比特率过大或过小时。</note>
    * @example `720`
    */ "VideoBitrate"?: number;
    /**
    * 转码音频比特率。单位: kbps，取值范围：1 ≤AudioBitrate ≤ 1000。
    * @example `512`
    */ "AudioBitrate"?: number;
    /**
    * 视频GOP。单位: 帧，取值要求：1 ≤ Gop ≤ 3000。
    * @example `1`
    */ "Gop"?: string;
    /**
    * 视频GOP。取值：
    * - **1**：baseline
    * - **2**：main
    * - **3**：high
    * @example `2`
    */ "Profile"?: number;
    /**
    * 音频编码Profile。可选值
    * - aac_low
    * - aac_he
    * - aac_he_v2
    * - aac_ld，采样率不能超过44100
    * @example `aac_low`
    */ "AudioProfile"?: string;
    /**
    * 音频编码器。可选值：**aac** | **mp3**。
    * @example `aac`
    */ "AudioCodec"?: string;
    /**
    * 音频采样率。取值：**22050~96000**。
    * >如果是 aac_ld, 则采样率不能超过44100
    * @example `96000`
    */ "AudioRate"?: number;
    /**
    * 音频声道数。可选值：**1** | **2** 。
    * @example `2`
    */ "AudioChannelNum"?: number;
}
export { AddCustomLiveStreamTranscodeRequest };