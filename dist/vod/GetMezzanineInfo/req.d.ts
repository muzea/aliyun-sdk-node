interface GetMezzanineInfoRequest {
    "RegionId"?: string;
    /**
    * 视频ID。
    * @example `1f1a6fc03ca048e594814031b8a6559e`
    */ "VideoId": string;
    "OwnerId"?: number;
    /**
    * FileURL(源文件地址)签名过期时间。单位为秒，默认值为**1800**，支持设置最小值为**1**。
    * > - 如果返回的是CDN加速地址：
    *     - 只有开启了URL鉴权，FileURL才会定期失效，否则会永久有效。
    *     - 最小值：**1**
    *     - 最大值：无限制
    *     - 默认值：未设置时，取值为URL鉴权中设置的默认有效时长。
    * - 如果返回的是OSS源站地址：
    *     - 只有存储权限为私有，FileURL才会定期失效，否则会永久有效。
    *     - 最小值：**1**
    *     - 最大值：为降低源站安全风险，最大值为**2592000（即30天）**。
    *     - 默认值：未设置时，取值为**3600**。
    * @example `3600`
    */ "AuthTimeout"?: number;
    /**
    * 参数暂不可用。
    * @example `false`
    */ "PreviewSegment"?: boolean;
    /**
    * 输出地址类型。取值范围 ：
    * - oss：回源地址
    * - cdn（默认值）：加速地址
    * > 当源文件所在的bucket类型为in时，只返回oss地址。
    * @example `oss`
    */ "OutputType"?: string;
    /**
    * 附加信息类型。多个用逗号分隔，默认只返回基本信息。取值范围 ：
    * - video：视频流信息
    * - audio：音频流信息
    * @example `video`
    */ "AdditionType"?: string;
}
export { GetMezzanineInfoRequest };