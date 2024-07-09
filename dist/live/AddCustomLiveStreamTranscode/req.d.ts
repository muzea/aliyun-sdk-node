export interface AddCustomLiveStreamTranscodeRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "Domain": string;
    /**
     * 播流所属应用名称。
     * @example `liveApp****`
     */
    "App": string;
    /**
     * 用户KMS主密钥ID。
     * @example `afce5722-81d2-43c3-9930-7601da11****`
     */
    "KmsKeyID"?: string;
    /**
     * 用户KMS主账号ID。
     * @example `25346073170691****`
     */
    "KmsUID"?: string;
    /**
     * 换Key周期。取值范围：60~3600，单位：秒。
     * @example `3600`
     */
    "KmsKeyExpireInterval"?: string;
    /**
     * 转码模板自定义名称。
     * > 支持数字、大小写字母或短横线（-），且字段必须以大小写字母或数字开头，不能与标准的转码模板命名重复。
     * @example `LiveCusTranscode****`
     */
    "Template": string;
    /**
     * 自定义转码模版类型。取值：
     * - **h264**：自定义H264标准模版。
     * - **h264-nbhd**：自定义H264窄带高清™模版。
     * - **h265**：自定义H265标准模版。
     * - **h265-nbhd**：自定义H265窄带高清模版。
     * - **audio**：纯音频模板。
     * >**TemplateType**取值为视频类型时（例如**h264**、**h264-nbhd**、**h265**或 **h265-nbhd**），请求参数**Height**、**Width**、**FPS**和**VideoBitrate**的值必须填写。
     * @example `h264`
     */
    "TemplateType": string;
    /**
     * 转码视频高度。单位：像素。取值：
     * 需要同时满足如下三个条件：
     * - **Height ≥ 100**：视频的高需要不小于100像素。
     * - **max（Height,Width）≤ 2560**：视频的宽、高中较大的一个最大不能大于2560。
     * - **min（Height,Width）≤ 1440**：视频的宽、高中较小的一个最大不能大于1440。
     * >265窄带高清模板不得超过1280×720。
     * @example `720`
     */
    "Height"?: number;
    /**
     * 转码视频宽度。单位：像素。取值：
     * 需要同时满足如下三个条件：
     * - **Width ≥ 100**：视频的宽需要不小于100像素。
     * - **max（Height,Width）≤ 2560**：视频的宽、高中较大的一个最大不能大于2560。
     * - **min（Height,Width）≤ 1440**：视频的宽、高中较小的一个最大不能大于1440。
     * >265窄带高清模板不得超过1280×720。
     * @example `576`
     */
    "Width"?: number;
    /**
     * 转码视频帧率。单位：FPS，取值：**1~60**。
     * @example `30`
     */
    "FPS"?: number;
    /**
     * 转码视频比特率。单位：kbps，取值：**1~6000**。
     * > 转码视频会尽量接近您所设定的比特率，但转码视频的实际比特率不能保证和您所设定的完全一致，尤其是当您设定的比特率过大或过小时。
     * @example `720`
     */
    "VideoBitrate"?: number;
    /**
     * 转码音频比特率。单位：kbps，取值：**1~1000**。
     * @example `512`
     */
    "AudioBitrate"?: number;
    /**
     * 视频GOP（Group of Picture）。单位：帧，取值：**1~3000**。
     * @example `1`
     */
    "Gop"?: string;
    /**
     * 编码级别。视频支持的一组特定的编码功能，一般值越大得到的画面质量越好，同时编解码消耗的资源也越高。取值：
     * - **1**：baseline（适合移动设备）。
     * - **2**：main（适合标准分辨率设备）。
     * - **3**：high（适合高分辨率设备）。
     * @example `2`
     */
    "Profile"?: number;
    /**
     * 音频编码。取值：
     * - **aac_low**
     * - **aac_he**
     * - **aac_he_v2**
     * - **aac_ld**
     * @example `aac_low`
     */
    "AudioProfile"?: string;
    /**
     * 音频编码格式。取值：
     * - **AAC**
     * - **MP3**
     * @example `AAC`
     */
    "AudioCodec"?: string;
    /**
     * 音频采样率。取值：**22050~96000**。
     * ><notice>如果AudioProfile取值为**aac_ld**，则采样率不能超过44100。
     * ></notice>
     * @example `96000`
     */
    "AudioRate"?: number;
    /**
     * 音频声道数。取值
     * - **1**：单声道。
     * - **2**：双声道。
     * @example `2`
     */
    "AudioChannelNum"?: number;
    "Lazy"?: string;
    /**
     * 加密配置。JSON格式，各字段说明如下：
     * - EncryptType：加密类型。固定取值aliyun。
     * - KmsKeyID：用户KMS主密钥ID。
     * - KmsKeyExpireInterval：换Key周期。取值范围：60~3600，单位：秒。
     * @example `{"EncryptType": "aliyun", "KmsKeyID":"afce5722-81d2-43c3-9930-7601da11****","KmsKeyExpireInterval":"3600"}`
     */
    "EncryptParameters"?: string;
    "ResWithSource"?: string;
    "FpsWithSource"?: string;
    "BitrateWithSource"?: string;
    "ExtWithSource"?: string;
}
