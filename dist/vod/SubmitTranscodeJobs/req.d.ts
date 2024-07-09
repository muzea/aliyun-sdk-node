export interface SubmitTranscodeJobsRequest {
    /**
     * 视频ID。可通过以下方式获取：
     * - 通过控制台上传的视频，可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看视频ID。
     * - 通过[CreateUploadVideo](~~55407~~)接口上传视频时，视频ID为返回参数VideoId的值。
     * - 视频上传后，可通过[SearchMedia](~~86044~~)接口查询视频ID，为请求后返回参数VideoId的值。
     * @example `142710f878bd42508932f660d7b1****`
     */
    "VideoId"?: string;
    /**
     * 视频转码时使用的转码组ID。使用指定的模板组进行转码，您可以登录[点播控制台](https://vod.console.aliyun.com)，选择**配置管理** >**媒体处理配置** > **转码模板组**查看模版组ID。
     * @example `0e408c803baf658ee637790c5d9f****`
     */
    "TemplateGroupId": string;
    /**
     * 管道ID。
     * @example `d3e680e618708erf45fbf2cae7c****`
     */
    "PipelineId"?: string;
    /**
     * 加密配置，为JSON字符串，只有使用HLS标准加密时才需要此参数。
     * > - [EncryptConfig](~~86952~~)结构体中**CipherText**参数必须为通过[GenerateKMSDataKey](~~455051~~)生成的AES_128密文密钥，否则标准加密转码失败。标准加密接入流程，请参见[HLS标准加密](~~68612~~)。
     * > - 无论标准加密、私有加密，**TemplateGroupId**对应的模板数据，必须都勾选HLS加密选项，否则不加密。
     * @example `{"CipherText":"ZjJmZGViNzUtZWY1Mi00Y2RlLTk3****", "DecryptKeyUri":"http://demo.aliyundoc.com?CipherText=ZjJmZGViNzUtZWY1Mi00Y2RlLTk3****","KeyServiceType":"KMS"}`
     */
    "EncryptConfig"?: string;
    /**
     * 覆盖参数（JSON字符串），支持对转码模板关联的指定图片水印文件、文字水印内容、字幕文件地址以及字幕文件编码格式的覆盖。参数结构详情，请参见[OverrideParams](~~98618~~)。
     * @example `{"Watermarks":[{"WatermarkId":"af2afe4761992c47dae973374****","FileUrl":"http://developer.aliyundoc.com/image/image.png"},{"WatermarkId":"e8e5b8038d7ada85b376c2707****","Content":"watermark test"}]}`
     */
    "OverrideParams"?: string;
    /**
     * 当前发起的转码作业在所有排队作业中的优先级。
     * - 取值范围：**1**~**10**。
     * - 最高优先级：**10**。
     * - 默认值：**6**。
     * > Priority参数只影响当前发起的转码作业在所有排队状态作业中的优先级，但不影响已经转码处理中的任务优先级。
     * @example `6`
     */
    "Priority"?: string;
    /**
     * 自定义设置。为JSON字符串，支持消息回调等设置。具体详情，请参见[UserData](~~86952~~)。
     * > 此参数中消息回调的使用前提是需要在控制台配置HTTP回调地址和勾选对应的回调事件类型才能使用，否则回调设置不生效。
     * @example `{"Extend":{"localId":"****","test":"***"}}`
     */
    "UserData"?: string;
}
