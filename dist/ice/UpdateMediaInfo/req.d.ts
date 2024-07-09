export interface UpdateMediaInfoRequest {
    /**
     * 媒资Id，若为空，则必须有已在IMS内容库中注册过的InputURL。
     * @example `****20b48fb04483915d4f2cd8ac****`
     */
    "MediaId"?: string;
    /**
     * 待注册的媒资在相应系统中的地址，一经注册不可更改，并与IMS的mediaId绑定。
     * \- OSS地址，支持两种格式
     * 1.http(s)://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
     * 2.oss://example-bucket/example.mp4 此格式默认oss region与服务接入区域一致
     * @example `http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4`
     */
    "InputURL"?: string;
    /**
     * 媒资业务类型。取值范围：
     * - "subtitles" 字幕
     * - "watermark" 水印
     * - "opening" 片头/开场
     * - "ending" 片尾
     * - "general" 通用
     * @example `video`
     */
    "BusinessType"?: string;
    /**
     * 标题。
     * - 长度不超过128字节。
     * - UTF8编码。
     * @example `defaultTitle`
     */
    "Title"?: string;
    /**
     * 内容描述。
     * - 长度不超过1024字节。
     * - UTF8编码。
     * @example `defaultDescription`
     */
    "Description"?: string;
    /**
     * 分类。
     * - 长度不超过64字节。
     * - UTF8编码。
     * @example `defaultCategory`
     */
    "Category"?: string;
    /**
     * 标签。
     * - 最多不超过16个标签。
     * - 多个用逗号分隔。
     * - 单个标签不超过32字节。
     * - UTF8编码。
     * @example `updateTags1,updateTags2`
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
     * 用户数据，最大1024字节。
     * @example `userData`
     */
    "UserData"?: string;
    /**
     * 默认为false，取值：
     * - appendTags = true，以追加的模式更新MediaTags字段。
     * - appendTags = false，以覆盖的模式更新MediaTags字段。
     * @example `true`
     */
    "AppendTags"?: boolean;
    /**
     * 分类ID
     * @example `3048`
     */
    "CateId"?: number;
    /**
     * 自定义ID，仅支持小写字母、大写字母、数字、横线、下划线，长度6-64位。需保证用户维度唯一。
     * @example `123-123`
     */
    "ReferenceId"?: string;
}
