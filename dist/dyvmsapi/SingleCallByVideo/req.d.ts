export interface SingleCallByVideoRequest {
    /**
     * 发送视频通知的外呼号码（被叫显号）。
     * - 如果您使用的外呼号码是公共模式，该参数不填。公共模式详情请参见[公共模式](~~172104~~)。
     * - 如果您使用的外呼号码是专属模式，请传入您的**真实号码**或**虚拟号码**。
     * 您可以登录[语音服务控制台](https://dyvms.console.aliyun.com/number/list/normal)，在**真实号管理**页面查看已购买的**真实号**，在**虚拟号管理**页面查看已创建并绑定真实号的**虚拟号**。
     * @example `0571****5678`
     */
    "CalledShowNumber"?: string;
    /**
     * 接收视频通知的被叫号码。
     * 号码格式：
     * - 手机号码。示例：159****0000。
     * - 固话号码。示例：0571****5678。
     * - 国际区号+号码。示例：85200****00。
     * @example `1590****000`
     */
    "CalledNumber": string;
    /**
     * 语音通知文件的语音ID。
     * 您登录[语音服务控制台](https://dyvms.console.aliyun.com/overview/home)在以下页面获取语音ID，该语音通知文件必须已审核通过。
     * - 在**语音消息**>**语音通知**>**语音通知文件**页面获取**语音ID**。
     * - 在**语音文件管理**>**语音通知文件**页面获取**语音ID**。
     * @example `17d37e58-2a09-419f-9b3d-e7e4b4****dd.wav`
     */
    "VoiceCode": string;
    /**
     * 通知文件的播放次数。取值范围：**1~3**。
     * @example `3`
     */
    "PlayTimes"?: number;
    /**
     * 通知文件播放的音量。取值范围：**0~100**，默认取值**100**。
     * @example `100`
     */
    "Volume"?: number;
    /**
     * 语音文件播放的语速。取值范围：**-500~500**。
     * @example `100`
     */
    "Speed"?: number;
    /**
     * 发起请求时预留给调用方的自定义ID，最终会通过回执消息将此ID带回给调用方。
     * 字符串类型，长度限制为1~15个字符。
     * @example `abcdefgh`
     */
    "OutId"?: string;
    /**
     * 视频通知文件的ID。
     * 您可以在[视频通知文件](https://dyvms.console.aliyun.com/videoFiles/list/notify)页面，查看已审核通过的视频通知文件ID。
     * @example `1120213841979436_20240621103****39_.mp4`
     */
    "VideoCode": string;
}
