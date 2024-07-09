export interface CreateUploadVideoRequest {
    /**
     * 自定义视频封面的URL地址。
     * @example `https://example.aliyundoc.com/image/D22F553TEST****.jpeg`
     */
    "CoverURL"?: string;
    /**
     * 上传完成后，在点播中展示的音/视频描述。
     * - 长度不超过1024个字符。
     * - UTF-8编码。
     * @example `UploadTest`
     */
    "Description"?: string;
    /**
     * 待上传的音/视频源文件地址。
     * - 必须带扩展名，且扩展名不区分大小写。
     * - 支持的扩展名，请参见[上传概述](~~55396~~)。
     * @example `D:\video_01.mp4`
     */
    "FileName": string;
    /**
     * 待上传的音/视频源文件的大小。单位：字节。
     * @example `123`
     */
    "FileSize"?: number;
    /**
     * 上传完成后，在点播中展示的音/视频标题。
     * - 长度不超过128个字符。
     * - UTF-8编码。
     * @example `UploadTest`
     */
    "Title": string;
    /**
     * 分类ID。可通过以下方式获取：
     * - 登录[点播控制台](https://vod.console.aliyun.com)，选择**配置管理** > **媒资管理配置** > **分类管理**查看分类ID。
     * - 通过[AddCategory](~~AddCategory~~)接口创建分类时，分类ID为返回参数CateId的值。
     * - 通过[GetCategories](~~GetCategories~~)接口查询分类时，为请求后返回参数CateId的值。
     * @example `100036****`
     */
    "CateId"?: number;
    /**
     * 音/视频标签。
     * - 最多不超过16个标签。
     * - 如需设置多个音/视频标签，请使用半角逗号（,）分隔。
     * - 单个标签不超过32个字符或汉字。
     * - UTF-8编码。
     * @example `tag1,tag2`
     */
    "Tags"?: string;
    /**
     * 自定义设置。为JSON字符串，支持消息回调、上传加速等设置。更多信息，请参见[UserData](~~86952~~)。
     * > - 此参数中消息回调的使用前提是需要在控制台配置HTTP回调地址和勾选对应的回调事件类型才能使用，否则回调设置不生效。控制台配置HTTP回调的操作，请参考[回调设置](~~86071~~)。
     * > - 如需使用上传加速功能，您需要[填写宜搭信息](https://yida.alibaba-inc.com/o/ticketapply)申请开通，更多信息，请参见[上传相关说明](~~55396~~)。
     * @example `{"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"},"Extend":{"localId":"*****","test":"www"}}`
     */
    "UserData"?: string;
    /**
     * 转码模板组ID。可通过以下方式获取：
     * - 登录[点播控制台](https://vod.console.aliyun.com)，选择**配置管理** > **媒体处理配置** > **转码模板组**查看转码模板组ID。
     * - 通过[创建转码模板组](~~102665~~)接口创建转码模板组时，转码模板组ID为返回参数TranscodeTemplateGroupId的值。
     * - 通过[查询转码配置列表](~~102669~~)接口查询转码模板组时，为请求后返回参数TranscodeTemplateGroupId的值。
     * >- 如果同时传递了WorkflowId和TemplateGroupId，以WorkflowId为准。
     * >- 若不传入本参数，则按默认的转码模板组进行转码；若传入了转码模板组ID时，则按指定的模板组进行转码。
     * >- 若设置为系统内置的**不转码**模板组，则音视频上传后，仅有[视频上传完成 ](~~55630~~)的事件通知，没有[单个清晰度转码完成](~~55636~~)的事件通知。
     * >- 为确保正常播放，当设置为系统内置的**不转码**模板组，则视音频上传完成后，仅以下格式支持不转码直接播放：MP4、FLV、MP3、M3U8、WEBM，其他格式仅支持存储（关注FileName的扩展名）；若使用阿里云播放器播放，则版本须为3.1.0或以上。
     * @example `405477f9e214d19ea2c7c854****`
     */
    "TemplateGroupId"?: string;
    /**
     * 工作流ID。可登录[点播控制台](https://vod.console.aliyun.com)，选择**配置管理** > **媒体处理配置** > **工作流管理**查看工作流ID。
     * > 如果同时传递了WorkflowId和TemplateGroupId，以WorkflowId为准。使用说明，请参见[工作流](~~115347~~)。
     * @example `613efff3887ec34af685714cc461****`
     */
    "WorkflowId"?: string;
    /**
     * 存储地址。可通过以下方式获取：
     * 登录[点播控制台](https://vod.console.aliyun.com)，选择**配置管理** > **媒资管理配置** > **存储管理**查看存储地址。
     * > 若不传此参数，则音视频文件上传到默认的存储地址上；若传入此参数，则音视频文件上传到该指定的存储地址上。
     * @example `out-****.oss-cn-shanghai.aliyuncs.com`
     */
    "StorageLocation"?: string;
    /**
     * 应用ID。默认取值：**app-1000000**。更多信息，请参见[多应用](~~113600~~)。
     * @example `app-1000000`
     */
    "AppId"?: string;
}
