export interface AddMediaRequest {
    /**
     * 输入文件的路径，可以通过MPS或OSS控制台获取。详细触发规则请参见下文中**工作流触发匹配规则**。
     * - 仅支持OSS HTTP地址，不支持CDN地址和HTTPS地址。
     * - 不超过3200字节。
     * - URL遵循RFC 2396（UTF-8编码，并进行URLEncode）。更多信息，请参见[URLEncode说明](~~423796~~)。
     * @example `http://bucket.oss-cn-hangzhou.aliyuncs.com/A/B/C/test.mp4`
     */
    "FileURL": string;
    /**
     * 媒体标题。
     * - 长度限制不超过128个字节。
     * - UTF-8编码。
     * @example `mytest`
     */
    "Title"?: string;
    /**
     * 描述。
     * - 长度限制不超过1024个字节。
     * - UTF-8编码。
     * @example `A test video`
     */
    "Description"?: string;
    /**
     * 封面URL。即您需要设置的封面的存储地址，可以通过**MPS控制台** > **工作流管理** > **媒体Bucket**或**OSS控制台** > **我的访问路径**获取。
     * - 不超过3200字节。
     * - URL遵循RFC 2396（UTF-8编码，并进行URLEncode）。更多信息，请参见[URLEncode说明](~~423796~~)。
     * @example `http://bucket.oss-cn-hangzhou.aliyuncs.com/example/1.png`
     */
    "CoverURL"?: string;
    /**
     *  标签列表。
     * > 媒体处理中，每个媒体的每个标签都是独立的，可以通过搜索媒体库来查找所有设置了相同标签的媒体。
     * - 用半角逗号（,）分隔，不超过16个标签。
     * - 单个标签不能超过32个字节。
     * - UTF-8编码。
     * @example `tag1,tag2`
     */
    "Tags"?: string;
    /**
     * 媒体工作流ID。可通过MPS控制台或[新增媒体工作流](~~44437~~)接口获取。
     * @example `07da6c65da7f458997336e0de192****`
     */
    "MediaWorkflowId"?: string;
    /**
     * 媒体工作流用户自定义数据。
     * - 不超过1024字节。
     * - UTF-8编码。
     * @example `test`
     */
    "MediaWorkflowUserData"?: string;
    /**
     * 是否检查指定的工作流支持输入路径。此处建议您选择检查（true），避免因路径出错而导致的错误。取值：
     * - **true**：检查
     * - **false**：不检查
     * @example `false`
     */
    "InputUnbind"?: boolean;
    /**
     * 媒体所属类目ID。不允许为负数。
     * @example `123`
     */
    "CateId"?: number;
    /**
     * 覆盖参数。
     * - 示例1：HLS打包字幕覆盖`{“WebVTTSubtitleOverrides”,[{“RefActivityName”:”subtitleNode”,”WebVTTSubtitleURL”:”http://test.oss-cn-hangzhou.aliyuncs.com/example1.vtt"}]}`。
     * - 示例2：DASH打包字幕覆盖` {“subtitleTransNodeName”:{“InputConfig”:{“Format”:”stl”,”InputFile”:{“URL”:”http://subtitleBucket.oss-cn-hangzhou.aliyuncs.com/package/example/CENG.stl"}}}}`。
     * @example `{“subtitleTransNodeName”:{“InputConfig”:{“Format”:”stl”,”InputFile”:{“URL”:”http://exampleBucket.oss-cn-hangzhou.aliyuncs.com/package/example/CENG.stl"}}}}`
     */
    "OverrideParams"?: string;
}
