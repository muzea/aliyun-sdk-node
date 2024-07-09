export interface RegisterMediaInfoRequest {
    /**
     * 待注册的媒资在相应系统中的地址，一经注册不可更改，并与IMS的mediaId绑定。
     * - OSS地址，支持两种格式。
     * http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
     * oss://example-bucket/example.mp4 （此格式默认oss region与服务接入区域一致）
     * - VOD媒资
     * vod://\*\*\*20b48fb04483915d4f2cd8ac****
     * @example `http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4  或  vod://****20b48fb04483915d4f2cd8ac****`
     */
    "InputURL": string;
    /**
     * 媒资媒体类型。取值范围：
     * - "image" 图片
     * - "video" 视频
     * - "audio" 音频
     * - "text" 文字
     * 此字段建议用户按需填写。当InputURL字段是OSS URL时，也支持按照文件后缀自动判断媒资类型（仅限图片、视频、音频文件后缀），对应关系见[文件格式](https://help.aliyun.com/document_detail/466207.html)。
     * @example `video`
     */
    "MediaType"?: string;
    /**
     * 媒资业务类型。取值范围：
     * - "subtitles" 字幕
     * - "watermark" 水印
     * - "opening" 片头/开场
     * - "ending" 片尾
     * - "general" 通用
     * @example `opening`
     */
    "BusinessType"?: string;
    /**
     * 标题，若不提供，根据日期自动生成默认title。
     * - 长度不超过128字节。
     * - UTF8编码。
     * @example `defaultTitle`
     */
    "Title"?: string;
    /**
     * 内容描述。
     * - 长度不超过1024字节
     * - UTF8编码。
     * @example `defaultDescription`
     */
    "Description"?: string;
    /**
     * 标签。
     * - 最多不超过16个标签。
     * - 多个用逗号分隔。
     * - 单个标签不超过32字节。
     * - UTF8编码。
     * @example `tag1,tag2`
     */
    "MediaTags"?: string;
    /**
     * 封面地址。
     * - 长度不超过128字节。
     * - UTF8编码。
     * @example `http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.png`
     */
    "CoverURL"?: string;
    /**
     * 用户数据。支持自定义回调地址配置，配置说明可参考[配置剪辑完成时的回调](https://help.aliyun.com/document_detail/451631.html)
     * - 长度不超过1024字节。
     * - UTF8编码。
     * - Json 格式
     * @example `{"NotifyAddress":"http://xx.xx.xxx"} 或{"NotifyAddress":"https://xx.xx.xxx"} 或{"NotifyAddress":"ice-callback-demo"}`
     */
    "UserData"?: string;
    /**
     * 是否覆盖已注册媒资，默认false。
     * -true，如果inputUrl已注册，删除原有媒资并注册新媒资；
     * -false, 如果inputUrl已注册则不予注册新媒资，暂不支持重复的inputUrl。
     * @example `true`
     */
    "Overwrite"?: boolean;
    /**
     * 客户端token，32位UUID，保证请求幂等性。
     * @example `****0311a423d11a5f7dee713535****`
     */
    "ClientToken"?: string;
    /**
     * 注册配置。
     * 默认为媒资生成雪碧图，如不需要可以手动设置NeedSprite字段为false。
     * 默认生成截图，如不需要可以手动设置NeedSnapshot字段为false。
     * @example `{
          "NeedSprite": "false"
    }`
     */
    "RegisterConfig"?: string;
    /**
     * 分类ID。
     * @example `3048`
     */
    "CateId"?: number;
    /**
     * 工作流ID
     * @example `******b4fb044839815d4f2cd8******`
     */
    "WorkflowId"?: string;
    /**
     * 自定义ID，仅支持小写字母、大写字母、数字、横线、下划线，长度6-64位。需保证用户维度唯一。
     * @example `123-123`
     */
    "ReferenceId"?: string;
    /**
     * 智能标签模板。取值：
     * - S00000101-300080：包含NLP内容理解功能的系统模板
     * 配置该字段后，媒资注册完成会自动发起智能标签分析任务，相关计费项请参考 [智能标签标准版计费](https://help.aliyun.com/zh/ims/media-ai-billing?spm=a2c4g.11186623.0.0.3147392dWwlSjL#p-k38-3rb-dug)。
     * @example `S00000101-300080`
     */
    "SmartTagTemplateId"?: string;
}
