export interface GetPlayInfoResponse {
    /**
     * 请求ID。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 媒资信息。
     */
    MediaBase: {
        /**
         * 创建时间。
         * @example `2021-09-22T10:07:31+08:00`
         */
        CreationTime: string;
        /**
         * 资源状态。取值范围：
         * \- Init（初始状态：源文件未就绪）
         * \- Preparing（源文件准备中：比如上传中或者剪辑合成中）
         * \- PrepareFail（源文件准备失败：比如获取源文件信息失败）
         * \- Normal（正常：源文件已就绪）
         * @example `Normal`
         */
        Status: string;
        /**
         * 媒资ID。
         * @example `2eea77a61c7b4ddd95bec34a6f65b***`
         */
        MediaId: string;
        /**
         * 封面URL。
         * @example `https://***.oss-cn-shanghai.aliyuncs.com/cover/281c64d6-b5fb-4c57-97cd-84da56a8b151_large_cover_url.jpg`
         */
        CoverURL: string;
        /**
         * 标题。
         * @example `testTitle`
         */
        Title: string;
        /**
         * 媒体文件类型，取值：
         * video：视频。
         * audio：纯音频。
         * @example `video`
         */
        MediaType: string;
        /**
         * 标签。
         * - 最多不超过16个标签。
         * - 多个用逗号分隔。
         * - 单个标签不超过32字节。
         * - UTF8编码。
         * @example `test,ccc`
         */
        MediaTags: string;
        /**
         * 分类ID。可通过以下方式获取：
         * - 登录[IMS控制台](https://ims.console.aliyun.com)，选择 **媒资管理** > **分类管理**查看分类ID。
         * - 通过创建分类接口创建分类时，分类ID为返回参数CateId的值。
         * - 通过获取分类接口查询分类时，为请求后返回参数CateId的值。
         * @example `4220`
         */
        CateId: number;
        /**
         * 内容描述
         * @example `desc`
         */
        Description: string;
    };
    /**
     * 音/视频播放信息（流信息）。
     */
    PlayInfoList: {
        /**
         * 创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2022-05-10T02:28:49Z`
         */
        CreationTime: string;
        /**
         * 媒体流状态，取值：
         * - **Normal**：正常。
         * - **Invisible**：不可见。
         * @example `Normal`
         */
        Status: string;
        /**
         * 窄带高清类型。取值：
         * - **0**：普通。
         * - **1.0**：窄带高清1.0。
         * - **2.0**：窄带高清2.0。
         * 仅当配置了窄带高清1.0内置转码模板的清晰度时才会生效。更多详情，请参见[转码模板配置-Definition](~~52839~~)。
         * @example `0`
         */
        NarrowBandType: string;
        /**
         * 媒体流高度。单位：px。
         * @example `1080`
         */
        Height: number;
        /**
         * 媒体流码率。单位：Kbps。
         * @example `20`
         */
        Bitrate: string;
        /**
         * 更新时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2022-05-13T11:39:41.714+08:00`
         */
        ModificationTime: string;
        /**
         * 当前媒体流关联的水印ID。
         * @example `5bed88672b1e2520ead228935ed51***`
         */
        WatermarkId: string;
        /**
         * 媒体流是否加密流，取值：
         * - **0**：否。
         * - **1**：是。
         * @example `0`
         */
        Encrypt: number;
        /**
         * 视频流清晰度定义。取值：
         * - **FD**：流畅。
         * - **LD**：标清。
         * - **SD**：高清。
         * - **HD**：超清
         * - **OD**：原画。
         * - **2K**：2K。
         * - **4K**：4K。
         * - **SQ**：普通音质。
         * - **HQ**：高音质。
         * - **AUTO**：自适应码率。
         * @example `HD`
         */
        Definition: string;
        /**
         * 媒体流加密类型。取值：
         * - **AliyunVoDEncryption**：阿里云视频加密。
         * - **HLSEncryption**：HLS标准加密。
         * > 如果加密类型为**AliyunVoDEncryption**，则只能使用阿里云播放器SDK才能正常播放。
         * @example `AliyunVoDEncryption`
         */
        EncryptType: string;
        /**
         * 媒体流类型。
         * 若媒体流为视频则取值：**video**，若是纯音频则取值：**audio**。
         * @example `video`
         */
        StreamType: string;
        /**
         * 媒体流大小。单位：Byte。
         * @example `418112`
         */
        Size: number;
        /**
         * 媒体流宽度。单位：px。
         * @example `1024`
         */
        Width: number;
        /**
         * 媒体流帧率。单位：帧/每秒。
         * @example `25`
         */
        Fps: string;
        /**
         * 媒体流长度。单位：秒。
         * @example `9.0464`
         */
        Duration: string;
        /**
         * 视频流的播放地址。
         * @example `https://***.aliyuncdn.com/sv/756bee1-17f980f0945/756bee1-17f980f0945.mp4`
         */
        PlayURL: string;
        /**
         * 媒体流格式。
         * - 若媒体文件为视频则取值： **mp4**、 **m3u8**。
         * -  若是纯音频则取值：**mp3**。
         * @example `mp4`
         */
        Format: string;
        /**
         * 媒体流HDR类型。取值：
         * - HDR
         * - HDR10
         * - HLG
         * - DolbyVision
         * - HDRVivid
         * - SDR+
         * @example `HDR`
         */
        HDRType: string;
        /**
         * 颜色位深。
         * @example `8`
         */
        BitDepth: number;
        /**
         * 文件OSS地址。
         * @example `http://outin-***.oss-cn-shanghai.aliyuncs.com/sv/43a68ee9-181809b6aba/43a68ee9-181809b6aba.mpeg`
         */
        FileURL: string;
        /**
         * 转码模板类型，取值：
         * - Normal：普通模板
         * - AudioTranscode：音频转码
         * - Remux：转封装
         * - NarrowBandV1：窄带高清1.0
         * - NarrowBandV2：窄带高清2.0
         * - UHD：音画增强（超高清）
         * @example `Normal`
         */
        TransTemplateType: string;
        /**
         * 流标签，用于标识转码处理类型。
         * @example `"{\"ims.audioServiceType\": \"AudioEnhancement\"}"`
         */
        StreamTags: string;
        /**
         * 任务 ID。
         * @example `36c9d38e70bf43ed9f7f8f48d6356***`
         */
        JobId: string;
    }[];
}
