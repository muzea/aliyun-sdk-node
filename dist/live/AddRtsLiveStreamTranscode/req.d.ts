export interface AddRtsLiveStreamTranscodeRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "Domain": string;
    /**
     * 播流所属应用名称。取值要求：
     * - 该字段必须由大小写字母、数字、下划线（_）或短横线（-）组成。
     * - 这些字符不必全含，建议取值大于3个字符，且字段的开头必须是字母（大小写）或数字。
     * @example `aliyun-test`
     */
    "App": string;
    /**
     * 转码模板自定义名称。取值要求：
     * - 该字段必须由大小写字母、数字、下划线（_）或短横线（-）组成。
     * - 这些字符不必全含，建议取值大于3个字符，且字段的开头必须是字母（大小写）或数字。
     * >不能与标准的转码模板命名重复。
     * @example `ld`
     */
    "Template": string;
    /**
     * 自定义转码模版类型。目前支持：
     * 如果选择h264或h264-nbhd或h264-origin类型，必须同时设置请求参数Height，Width，FPS，VideoBitrate和DeleteBframes。
     * - **h264**：自定义H264标准模版。
     * - **h264-nbhd**：自定义H264窄带高清™模版。
     * - **h264-origin**：原画H264标准模版，转码参数尽量保持和片源相同。
     * - **audio**：纯音频转码模板，转码出来文件只有声音没有图像。如果选择audio类型，必须同时设置请求参数AudioBitrate。
     * @example `h264`
     */
    "TemplateType": string;
    /**
     * 转码视频高度。单位：像素。取值：
     * ><notice>当TemplateType（自定义转码模版类型）设为h264或h264-nbhd或h264-origin时，本参数必填。
     * ></notice>
     * 需要**同时**满足如下三个条件：
     * - **Height ≥ 100**：视频的高需要不小于100像素。
     * - **max（Height,Width）≤ 2560**：视频的宽、高中较大的一个最大不能大于2560。
     * - **min（Height,Width）≤ 1440**：视频的宽、高中较小的一个最大不能大于1440。
     * 例如：1560×1560（正方形视频）是不合法的。
     * >原画模板由于需要保持片源的信息，分辨率最高支持到4K。
     * @example `1280`
     */
    "Height"?: number;
    /**
     * 转码视频宽度。单位：像素。取值：
     * ><notice>当TemplateType（自定义转码模版类型）设为h264或h264-nbhd或h264-origin时，本参数必填。
     * ></notice>
     * 需要同时满足如下三个条件：
     * - **Width≥ 100**：视频的宽需要不小于100像素。
     * - **max（Height,Width）≤ 2560**：视频的宽、高中较大的一个最大不能大于2560。
     * - **min（Height,Width）≤ 1440**：视频的宽、高中较小的一个最大不能大于1440。
     * 例如：1560×1560（正方形视频）是不合法的。
     * >原画模板由于需要保持片源的信息，分辨率最高支持到4K。
     * @example `720`
     */
    "Width"?: number;
    /**
     * 转码视频帧率。单位：FPS。取值：**1**~**60**。
     * ><notice>当TemplateType（自定义转码模版类型）设为h264或h264-nbhd或h264-origin时，本参数必填。
     * ></notice>
     * @example `30`
     */
    "FPS"?: number;
    /**
     * 转码视频比特率。单位：kbps。取值：**1**~**6000**。
     * ><notice>当TemplateType（自定义转码模版类型）设为h264或h264-nbhd或h264-origin时，本参数必填。
     * ></notice>
     * >转码视频会尽量接近您所设定的比特率，但转码视频的实际比特率不能保证和您所设定的完全一致，尤其是当您设定的比特率过大或过小时。
     * @example `2000`
     */
    "VideoBitrate"?: number;
    /**
     * 转码音频比特率。
     * 单位：kbps。取值：**1**~**1000**。
     * ><notice>当TemplateType（自定义转码模版类型）设为audio时，本参数必填。
     * ></notice>
     * @example `128`
     */
    "AudioBitrate"?: number;
    /**
     * 视频GOP（Group of Picture）。主要用于控制关键帧间隔。单位：秒。取值：**1**~**3**。
     * @example `2`
     */
    "Gop"?: string;
    /**
     * 是否使用B帧进行转码。取值：
     * ><notice>当TemplateType（自定义转码模版类型）设为h264或h264-nbhd或h264-origin时，本参数必填。
     * ></notice>
     * - **true**：转码后的视频无B帧。
     * - **false**：包含B帧，默认包含B帧。
     * >  不传参数时默认为**false**。
     * @example `false`
     */
    "DeleteBframes"?: boolean;
    /**
     * 音频转码是否使用opus进行转码（主要用户兼容原生webrtc问题）。取值：
     * - **true**：音频转码为opus格式。
     * - **false**：不使用opus格式转码。
     * > 不传参数时默认为**false**。
     * @example `true`
     */
    "Opus"?: boolean;
    /**
     * 编码级别。视频支持的一组特定的编码功能，一般值越大得到的画面质量越好，同时编解码消耗的资源也越高。取值：
     * - **1**：baseline（适合移动设备）。
     * - **2**：main（适合标准分辨率设备）。
     * - **3**：high（适合高分辨率设备）。
     * @example `2`
     */
    "Profile"?: number;
    /**
     * 音频编码级别。取值：
     * - **aac_low**。
     * - **aac_he**。
     * - **aac_he_v2**。
     * - **aac_ld**。
     * @example `aac_low`
     */
    "AudioProfile"?: string;
    /**
     * 音频编码器。取值：
     * - **aac**。
     * - **mp3**。
     * >如果要使用opus编码，把Opus选项参数置为true即可。
     * @example `aac`
     */
    "AudioCodec"?: string;
    /**
     * 音频采样率。取值：**22050~96000**，其中44100比较常用。单位：Hz。
     * >如果音频编码AudioProfile是aac_ld，则采样率不能超过44100。
     * @example `44100`
     */
    "AudioRate"?: number;
    /**
     * 音频声道数。取值：
     * - **1** ：单声道。
     * - **2**：立体声。
     * @example `2`
     */
    "AudioChannelNum"?: number;
    /**
     * 是否开启强制转码。取值：
     * - **yes**：延迟转码。
     * - **no**：强制转码。
     * @example `no`
     */
    "Lazy"?: string;
}
