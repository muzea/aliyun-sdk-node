export interface CreateUploadAttachedMediaRequest {
    /**
     * 辅助媒资的标题。规则：
     * - 长度不超过128个字节。
     * - UTF8编码。
     * @example `测试`
     */
    "Title"?: string;
    /**
     * 辅助媒资的类型。取值：
     * - **watermark**：水印。
     * - **subtitle**：字幕。
     * - **material**：素材。
     * @example `watermark`
     */
    "BusinessType": string;
    /**
     * 待上传的辅助媒资源文件的扩展名。取值：
     * - 水印：**png、gif、apng、mov**。
     * - 字幕：**srt、ass、stl、ttml、vtt**。
     * - 素材：**jpg、gif、png、mp4、mat、zip、apk**。
     * @example `png`
     */
    "MediaExt"?: string;
    /**
     * 待上传的辅助媒资的源文件地址。
     * >可不带扩展名；若此处带了扩展名，且此处的扩展名与MediaExt中设置的扩展名不一致，以MediaExt为准。
     * @example `D:\test.png`
     */
    "FileName"?: string;
    /**
     * 文件大小。单位：字节。
     * @example `123`
     */
    "FileSize"?: string;
    /**
     * 标签。规则：
     * - 最多不超过16个标签。
     * - 如需设置多个标签，请使用半角逗号（,）分隔。
     * - 单个标签不超过32个字符或汉字。
     * - UTF-8编码。
     * @example `tag1,tag2`
     */
    "Tags"?: string;
    /**
     * 存储地址。可通过以下方式获取：
     * 登录[点播控制台](https://vod.console.aliyun.com)，选择**配置管理** > **媒资管理配置** > **存储管理**查看存储地址。
     * > 若不传此参数，则辅助媒资上传到默认的存储地址上；若传入此参数，则辅助媒资上传到该指定的存储地址上。
     * @example `out-****.oss-cn-shanghai.aliyuncs.com`
     */
    "StorageLocation"?: string;
    /**
     * 媒资描述。规则：
     * - 长度不超过1024个字节。
     * - UTF-8编码。
     * @example `uploadTest`
     */
    "Description"?: string;
    /**
     * 自定义设置，为JSON字符串，支持消息回调、上传加速等设置。更多详情，请参见[UserData](~~86952#section-6fg-qll-v3w~~)。
     * > - 此参数中消息回调的使用前提是需要在控制台配置HTTP回调地址和勾选对应的回调事件类型才能使用，否则回调设置不生效。控制台配置HTTP回调的操作，请参考[回调设置](~~86071~~)。
     * > - 如需使用上传加速功能，请提交工单申请开通，更多信息，请参见[上传相关说明](~~55396~~)。关于如何提交工单，请参见[联系我们](~~464625~~)。
     * @example `{"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"},"Extend":{"localId":"xxx","test":"www"}}`
     */
    "UserData"?: string;
    /**
     * 分类ID。多个ID之间使用半角逗号（,）分隔。最多支持5个。可通过以下方式获取：
     * - 登录[点播控制台](https://vod.console.aliyun.com)，选择**配置管理** > **媒资管理配置** > **分类管理**查看分类ID。
     * - 调用[AddCategory](~~AddCategory~~)接口创建分类时会返回。
     * - 调用[GetCategories](~~GetCategories~~)接口查询分类时会返回。
     * @example `1298****,0813****`
     */
    "CateIds"?: string;
    /**
     * 应用ID。默认取值：**app-1000000**。若已开通多应用体系，传入应用ID，可将辅助媒资上传到指定应用下。更多信息，请参见[多应用](~~113600~~)。
     * @example `app-****`
     */
    "AppId"?: string;
}
