export interface DescribeLiveStreamTranscodeInfoResponse {
    /**
     * 请求ID。
     * @example `62136AE6-7793-45ED-B14A-60D19A9486D3`
     */
    RequestId: string;
    DomainTranscodeList: {
        /**
         * 转码配置信息。
         */
        DomainTranscodeInfo: {
            /**
             * 应用名称。
             * @example `liveApp****`
             */
            TranscodeApp: string;
            /**
             * 转码模版。取值：
             * - **标准质量模板**：
             *     - **lld**：流畅。
             *
             *     - **lsd**：标清。
             *
             *     - **lhd**：高清。
             *
             *     - **lud** ：超清。
             * - **窄带高清™转码模板**：
             *     - **ld**：流畅。
             *
             *     - **sd**：标清。
             *
             *     - **hd**：高清。
             *
             *     - **ud**：超清。
             * @example `lld`
             */
            TranscodeTemplate: string;
            /**
             * 是否开启强制转码。取值：
             * - **true**：延迟转码。
             * - **false**：强制转码。
             * @example `true`
             */
            IsLazy: boolean;
            /**
             * 主播流域名。
             * @example `example.com`
             */
            TranscodeName: string;
            /**
             * 自定义转码配置。
             */
            CustomTranscodeParameters: {
                /**
                 * 码率随源配置。
                 * @example `{\"UpLimit\":2500,\"LowerLimit\":800,\"Factor\":1}`
                 */
                BitrateWithSource: any;
                /**
                 * 视频的编码等级。取值：
                 * - **baseline**：适合移动设备。
                 * - **main**：适合标准分辨率设备。
                 * - **high**：适合高分辨率设备。
                 * @example `high`
                 */
                VideoProfile: string;
                /**
                 * 转码音频比特率。单位：kbps，取值范围：**1~1000**。
                 * @example `64`
                 */
                AudioBitrate: number;
                /**
                 * 转码视频高度。
                 * @example `1200`
                 */
                Height: number;
                /**
                 * 低延时的标签。固定取值**true**。
                 * > 当转码为低延时转码时，才返回此参数。
                 * @example `true`
                 */
                RtsFlag: string;
                /**
                 * 自定义转码模版类型。取值：
                 * - **h264**：自定义H264标准模版。
                 * - **h264-nbhd**：自定义H264窄带高清™模版。
                 * - **h265**：自定义H265标准模版。
                 * - **h265-nbhd**：自定义H265窄带高清模版。
                 * - **audio**：纯音频模板。
                 * @example `h264`
                 */
                TemplateType: string;
                /**
                 * 去B帧。固定取值：**0**。
                 * @example `0`
                 */
                Bframes: string;
                /**
                 * 其他随源配置。
                 * @example `{\"KeyFrameOpen\":\"yes\",\"Copyts\":\"yes\",\"SeiMode\":1}`
                 */
                ExtWithSource: any;
                /**
                 * 音频采样率。取值：**22050~96000**。
                 * >如果AudioProfile取值为**aac_ld**，则采样率不能超过44100。
                 * @example `44100`
                 */
                AudioRate: number;
                /**
                 * 帧率随源配置。
                 * @example `{\"UpLimit\":60,\"LowerLimit\":1}`
                 */
                FpsWithSource: any;
                /**
                 * 音频编码格式。
                 * @example `ACC`
                 */
                AudioCodec: string;
                /**
                 * 转码视频帧率。单位：FPS。
                 * @example `15`
                 */
                FPS: number;
                /**
                 * 视频GOP（Group of Picture）。单位：帧，取值范围：**1~3000**。
                 * @example `10`
                 */
                Gop: string;
                /**
                 * 转码视频宽度。
                 * @example `1000`
                 */
                Width: number;
                /**
                 * 转码视频比特率。单位：kbps。
                 * @example `3000`
                 */
                VideoBitrate: number;
                /**
                 * 音频声道数。取值：
                 * - **1**：单声道。
                 * - **2**：双声道。
                 * @example `2`
                 */
                AudioChannelNum: number;
                /**
                 * 音频编码等级。取值：
                 * - **aac_low**
                 * - **aac_he**
                 * - **aac_he_v2**
                 * - **aac_ld**
                 * @example `aac_low`
                 */
                AudioProfile: string;
                /**
                 * 分辨率随源配置。
                 * @example `{\"Type\":\"short\",\"Value\":\"1080\"}`
                 */
                ResWithSource: any;
            };
            /**
             * 加密配置。
             */
            EncryptParameters: {
                /**
                 * 加密类型。固定取值**aliyun**。
                 * @example `aliyun`
                 */
                EncryptType: string;
                /**
                 * 用户KMS主密钥ID。
                 * @example `afce5722-81d2-43c3-9930-7601da11****`
                 */
                KmsKeyID: string;
                /**
                 * 换Key周期。取值范围：**60~3600**，单位：秒。
                 * @example `3600`
                 */
                KmsKeyExpireInterval: string;
            };
        }[];
    };
}
