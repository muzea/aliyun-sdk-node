interface GetPlayInfoRequest {
    "RegionId"?: string;
    /**
    * 视频ID。
    * @example `fd1c76fc-806b-4467-a194-405528706d29`
    */ "VideoId": string;
    "OwnerId"?: number;
    /**
    * 视频流格式，多个用逗号分隔，默认获取所有格式的流。支持格式：
    * - **mp4**
    * - **m3u8**
    * - **mp3**
    * - **mpd** (仅当转码模板中配置了mpd封装格式时才会输出，详见[转码模板配置-Container](https://help.aliyun.com/document_detail/52839.html?spm=a2c4g.11186623.2.16.f2ee58fc6Rb9V1#h2--transcodetemplate-div-id-transcodetemplate-div-37)。）
    * @example `mp4,m3u8,mp3`
    */ "Formats"?: string;
    /**
    * 播放地址过期时间，单位：秒。
    * - 如果返回的是CDN加速地址：
    *     - 只有开启了URL鉴权播放地址才会定期失效，否则会永久有效。
    *     - 最小值：**1**
    *     - 最大值：**无限制**
    *     - 默认值：未设置时，取值为**URL鉴权中设置的默认有效时长**。
    * - 如果返回的是OSS源站地址：
    *     - 只有存储权限为私有，播放地址才会定期失效，否则会永久有效。
    *     - 最小值：**1**
    *     - 最大值：为降低源站安全风险，最大值为**2592000（即30天）**。
    *     - 默认值：未设置时，取值为**3600**。
    * @example `1800`
    */ "AuthTimeout"?: number;
    /**
    * 参数暂不可用。
    * @example `abckljd`
    */ "Rand"?: string;
    /**
    * 参数暂不可用。
    * @example `{"CI":"tUZiRCWWeU1jC\r\n","Caller":"sLmbasRssnpX64NoGho2k=\r\n","ExpireTime":"2019-04-24T06:19:59Z","MediaId":"e89916f7f9dd05bb9ede9409ae2bbc90","PlayDomain":"test.aliyun.com","Signature":"ljCklFypCsSt="}`
    */ "AuthInfo"?: string;
    /**
    * 参数暂不可用。
    * @example `iOS`
    */ "Channel"?: string;
    /**
    * 参数暂不可用。
    * @example `2.5.1`
    */ "PlayerVersion"?: string;
    /**
    * 输出地址类型。取值范围 ：
    * - **oss**：回源地址
    * - **cdn（默认）**：加速地址
    * 仅支持播放格式为mp4的oss地址。
    * @example `cdn`
    */ "OutputType"?: string;
    /**
    * 视频流类型。多个用逗号分隔，默认获取所有类型的流。支持类型：
    * - **video**
    * - **audio**
    * @example `video`
    */ "StreamType"?: string;
    /**
    * CDN二次鉴权参数，为JSON字符串。当开启了CDN二次鉴权功能时，可通过该参数设置鉴权URL的uid和rand，详见[URL鉴权](https://help.aliyun.com/document_detail/57007.html?spm=a2c4g.11186623.2.22.f2ee58fc6Rb9V1)。
    * @example `{"uid":"12345","rand":"abckljd"}`
    */ "ReAuthInfo"?: string;
    /**
    * 视频流清晰度，多个用逗号分隔，默认获取所有清晰度的流。取值：
    * - **FD**：流畅
    * - **LD**：标清
    * - **SD**：高清
    * - **HD**：超清
    * - **OD**：原画
    * - **2K**：2K
    * - **4K**：4K
    * - **SQ**：普通音质
    * - **HQ**：高音质
    * - **AUTO**：自适应码率，仅当转码模板中配置了打包时才会有该清晰度输出，详见[转码模板配置-PackageSetting](https://help.aliyun.com/document_detail/52839.html?spm=a2c4g.11186623.2.19.f2ee58fc6Rb9V1#h2--transcodetemplate-div-id-transcodetemplate-div-37)。
    * @example `FD,SD`
    */ "Definition"?: string;
    /**
    * 返回数据类型。取值范围 ：
    * - **Single（默认）**：每种清晰度和格式只返回一路最新转码完成的流。
    * - **Multiple**：每种清晰度和格式返回所有转码完成的流。
    * @example `Single`
    */ "ResultType"?: string;
    /**
    * 播放自定义设置，为JSON字符串，支持指定域名播放设置。
    * @example `{"PlayDomain":"vod.test_domain","XForwardedFor":"yqCD7Fp1uqChoVj/sl/p5Q==","PreviewTime":"20","MtsHlsUriToken":"yqCD7Fp1uqChoVjslp5Q"}`
    */ "PlayConfig"?: string;
}
export { GetPlayInfoRequest };