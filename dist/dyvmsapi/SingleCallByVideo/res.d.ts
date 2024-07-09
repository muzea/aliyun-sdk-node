export interface SingleCallByVideoResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见[API错误码](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `a78278ff-26bb-48ec-805c-26a0f4c102***`
     */
    RequestId: string;
    /**
     * 语音通知或视频通知的唯一ID。
     * 您可以使用此参数，调用[PlayVideoFile](https://help.aliyun.com/zh/vms/developer-reference/api-dyvmsapi-2017-05-25-playvideofile?spm)接口播放视频等操作。
     * 您可以[配置回执消息](https://help.aliyun.com/zh/vms/developer-reference/return-receipt-message-description-and-configuration-process?spm)，获取呼叫记录消息、呼叫中间状态消息、录音记录消息等。
     * @example `116012354148^10281378****`
     */
    CallId: string;
}
