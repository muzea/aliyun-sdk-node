export interface UpdateVideoInfoRequest {
    /**
     * 音/视频ID。可通过以下方式获取：
     * - 通过控制台上传的视频，可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看音/视频ID。
     * - 通过[获取视频上传地址和凭证](~~55407~~)接口获取上传地址和凭证时，音/视频ID为返回参数VideoId的值。
     * - 视频上传后，可通过[搜索媒体信息](~~86044~~)接口查询音/视频ID，为请求后返回参数VideoId的值。
     * @example `2deda93265312baf9b0ed810d****`
     */
    "VideoId": string;
    /**
     * 音/视频标题。
     * - 长度不超过128个字节。
     * - UTF-8编码。
     * @example `阿里云VOD视频标题`
     */
    "Title"?: string;
    /**
     * 标签。
     * - 单个标签不超过32字节。最多不超过16个标签。
     * - 多个标签之间用半角逗号（,）分隔。
     * - UTF-8编码。
     * @example `标签1,标签2`
     */
    "Tags"?: string;
    /**
     * 音/视频描述。
     * - 长度不超过1024个字节。
     * - UTF-8编码。
     * @example `阿里云视频描述`
     */
    "Description"?: string;
    /**
     * 音/视频封面URL地址。
     * @example `https://example.aliyundoc.com/****.jpg`
     */
    "CoverURL"?: string;
    /**
     * 分类ID。可通过以下方式获取：
     * - 登录[点播控制台](https://vod.console.aliyun.com)，选择**配置管理** > **媒资管理配置** > **分类管理**查看分类ID。
     * - 通过[创建分类](~~56401~~)接口创建分类时，分类ID为返回参数CateId的值。
     * - 通过[获取分类及子分类](~~56406~~)接口查询分类时，为请求后返回参数CateId的值。
     * @example `384761111`
     */
    "CateId"?: number;
}
