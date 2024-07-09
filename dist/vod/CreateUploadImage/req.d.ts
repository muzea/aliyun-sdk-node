export interface CreateUploadImageRequest {
    /**
     * 图片标题。规则：
     * - 长度不超过128个字符。
     * - UTF-8编码。
     * @example `mytitle`
     */
    "Title"?: string;
    /**
     * 图片类型。取值：
     * - **default**（默认）：普通图片
     * - **cover**：视频封面图
     * > 点播控制台目前仅支持对**default**类型的图片进行查看和管理。
     * @example `default`
     */
    "ImageType": string;
    /**
     * 待上传的图片源文件的扩展名。取值：
     * - **png**（默认）
     * - **jpg**
     * - **jpeg**
     * - **gif**
     * - **heic**
     * - **webp**
     * @example `png`
     */
    "ImageExt"?: string;
    /**
     * 待上传的图片源文件地址。
     * >可不带扩展名；若此处带了扩展名，且此处的扩展名与`ImageExt`中设置的扩展名不一致，以`ImageExt`为准。
     * @example `D:\picture_01`
     */
    "OriginalFileName"?: string;
    /**
     * 图片标签。规则：
     * - 单个标签不超过32个字符。
     * - 最多不超过16个标签。
     * - 多个标签之间，请使用半角逗号（,）分隔。
     * - UTF-8编码。
     * @example `测试`
     */
    "Tags"?: string;
    /**
     * 存储地址。可通过以下方式获取：
     * 登录[点播控制台](https://vod.console.aliyun.com)，选择**配置管理** > **媒资管理配置** > **存储管理**查看存储地址。
     * > 若不传此参数，则图片上传到默认的存储地址上；若传入此参数，则图片上传到该指定的存储地址上。
     * @example `outin-****..oss-cn-shanghai.aliyuncs.com`
     */
    "StorageLocation"?: string;
    /**
     * 分类ID。可通过以下方式获取：
     * - 登录[点播控制台](https://vod.console.aliyun.com)，选择**配置管理** > **媒资管理配置** > **分类管理**查看分类ID。
     * - 通过[AddCategory](~~AddCategory~~)接口创建分类时，分类ID为返回参数CateId的值。
     * - 通过[GetCategories](~~GetCategories~~)接口查询分类时，为请求后返回参数CateId的值。
     * @example `100036****`
     */
    "CateId"?: number;
    /**
     * 自定义设置，为JSON字符串，支持消息回调、上传加速等设置。详情参见[UserData](~~86952~~)。
     * > - 此参数中消息回调的使用前提是需要在控制台配置HTTP回调地址和勾选对应的回调事件类型才能使用，否则回调设置不生效。控制台配置HTTP回调的操作，请参考[回调设置](~~86071~~)。
     * > - 如需使用上传加速功能，请提交工单申请开通，更多信息，请参见[上传相关说明](~~55396~~)。关于如何提交工单，请参见[联系我们](~~464625~~)。
     * @example `{"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"},"Extend":{"localId":"xxx","test":"www"}}`
     */
    "UserData"?: string;
    /**
     * 图片描述。
     * - 长度不超过1024个字符。
     * - UTF-8编码。
     * @example `图片上传测试`
     */
    "Description"?: string;
    /**
     * 应用ID。默认取值：**app-1000000**。若已开通多应用体系，传入应用ID，可将图片上传到指定应用下。更多信息，请参见[多应用](~~113600~~)。
     * @example `app-1000000`
     */
    "AppId"?: string;
}
