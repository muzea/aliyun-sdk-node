export interface GetPlayInfoRequest {
    /**
     * 音/视频ID，仅支持传入单个音/视频ID。可通过以下方式获取：
     * - 通过控制台上传的音/视频，可登录[视频点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看音/视频ID。
     * - 通过[CreateUploadVideo](~~55407~~)接口上传音/视频时，音/视频ID为返回参数VideoId的值。
     * - 音/视频上传后，可通过[SearchMedia](~~86044~~)接口查询音/视频ID，为请求后返回参数VideoId的值。
     * @example `93ab850b4f654b6e91d24d81d44****`
     */
    "VideoId": string;
    /**
     * 媒体流格式。多个格式之间使用半角逗号（,）分隔。取值：
     * - **mp4**
     * - **m3u8**
     * - **mp3**
     * - **flv**
     * - **mpd**
     * > - 默认获取所有格式的流。
     * > - mpd格式仅当转码模板中配置了`dash`封装格式时才会输出。更多详情，请参见[Container：封装格式](~~52839#title-7rr-3hj-gy5~~)。
     * @example `mp4,m3u8`
     */
    "Formats"?: string;
    /**
     * 设置播放地址的有效时间。单位：秒。
     * - 当OutputType取值为**cdn**时：
     *     - 只有开启了URL鉴权，播放地址才会定期失效，否则会永久有效。URL鉴权的开启及配置方法，请参见[URL鉴权](~~86090~~)。
     *     - 最小值：**1**。
     *     - 最大值：无限制。
     *     - 默认值：未设置时，取值为URL鉴权中设置的默认有效时长。
     * - 当OutputType取值为**oss**时：
     *     - 只有存储权限为私有，播放地址才会定期失效，否则会永久有效。
     *     - 最小值：**1**。
     *     - 最大值：为降低源站安全风险，当音视频存储在点播系统Bucket上时，最大值为**2592000**（即30天），当音视频存储在OSS自有Bucket上时，最大值为**129600**（即36小时）。如果此处设置的最大值不能满足您的需求，您可以设置OutputType为**cdn**，通过设置URL鉴权来设置更长的有效期。
     *     - 默认值：未设置时，取值为**3600**。
     * @example `1800`
     */
    "AuthTimeout"?: number;
    /**
     * 输出地址类型。取值：
     * - **oss**：回源地址。
     * - **cdn**（默认）：加速地址。
     * @example `cdn`
     */
    "OutputType"?: string;
    /**
     * 媒体流类型。多个类型之间用半角逗号（,）分隔。支持类型：
     * - **video**：视频。
     * - **audio**：音频。
     * 默认获取所有类型的流。
     * @example `video`
     */
    "StreamType"?: string;
    /**
     * CDN二次鉴权参数，为JSON字符串。当开启了URL鉴权的A方式鉴权功能时，可通过该参数设置鉴权URL的`uid`和`rand`，请参见[鉴权方式A说明](~~2249352~~)。
     * @example `{"uid":"12345","rand":"abckljd"}`
     */
    "ReAuthInfo"?: string;
    /**
     * 视频流清晰度。多个清晰度之间用半角逗号（,）分隔。取值：
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
     * > - 默认获取所有清晰度的流。
     * > - AUTO格式仅当转码模板中配置了转码打包时才会有该清晰度输出，请参见[PackageSetting：转码打包设置](~~52839#title-4fk-cg8-gzx~~)。
     * @example `LD`
     */
    "Definition"?: string;
    /**
     * 返回数据类型。取值：
     * - **Single**（默认）：每种清晰度和格式只返回一路最新转码完成的流。
     * - **Multiple**：每种清晰度和格式返回所有转码完成的流。
     * @example `Single`
     */
    "ResultType"?: string;
    /**
     * 播放自定义设置。为JSON字符串，支持指定域名播放设置。参数构造详情，请参见[PlayConfig](~~86952#section-9g7-s9b-v7z~~)。
     * > - PlayConfig不设置或者其中`PlayDomain`不设置时，接口默认使用点播配置的默认域名；如果没有设置默认域名，则会根据域名的修改时间倒序查询，使用最新修改过的域名作为播放域名。为防止返回的不是想要的域名，建议设置默认播放域名（可登录[视频点播控制台](https://vod.console.aliyun.com)，选择**配置管理** > **媒资管理配置** > **存储管理** > **管理** > **回源到此存储地址的域名**设置默认播放域名）。
     * > - 当PlayConfig中的`EncryptType`参数设置为`AliyunVoDEncryption`时，为了保障您的视频安全，默认不返回私有加密流播放地址，若需要返回私有加密流播放地址，需要同时设置`ResultType`参数为`Multiple`。
     * @example `{"PlayDomain":"vod.test_domain","XForwardedFor":"yqCD7Fp1uqChoVj/sl/p5Q==","PreviewTime":"20","MtsHlsUriToken":"yqCD7Fp1uqChoVjslp5Q"}`
     */
    "PlayConfig"?: string;
    /**
     * 获取弹幕蒙版数据URL地址，取值：**danmu**。
     * > 仅当`outputType`取值为`cdn`时才会生效。
     * @example `danmu`
     */
    "AdditionType"?: string;
    /**
     * 用户自定义的数字水印信息。
     * - 当`DigitalWatermarkType`取值为`TraceMark`时，通过传入本参数，可以为视频设置溯源水印的水印信息，并返回包含水印信息的视频流。仅支持传入英文字母、数字及中文字符，最多支持1024个字符。
     * - 当`DigitalWatermarkType`取值为`CopyrightMark`时，`Trace`对应创建水印模板时所设置的**水印文字**。通过传入本参数，可以查询并返回指定水印文字的视频流。
     * @example `test mark`
     */
    "Trace"?: string;
    /**
     * 数字水印类型。取值：
     * - TraceMark：溯源水印。
     * - CopyrightMark：版权水印。
     * @example `TraceMark`
     */
    "DigitalWatermarkType"?: string;
}
