export interface QueryMediaListByURLRequest {
    /**
     * 需要查询的媒体文件地址，可以登录MPS控制台，通过**媒体管理** > **媒体列表**找到需要查询的媒体文件，单击**操作**列**管理**，在**获取转码地址**页签中获取媒体文件地址。用半角逗号（,）分隔，一次最多查询10个。
     * - URL遵循RFC 3986（UTF8编码，并对保留字符进行URLEncode。更多信息，请参见[URLEncode说明](~~423796~~)），不超过3200字节。
     * - 仅支持OSS HTTP地址，不支持CDN地址和HTTPS地址。
     * @example `http://example-bucket-****.oss-cn-shanghai.aliyuncs.com/example.mp4`
     */
    "FileURLs": string;
    /**
     * 返回结果中是否包含播放信息。
     * - 取值范围：true（包含）、false（不包含）。
     * - 默认值：**false**。
     * @example `true`
     */
    "IncludePlayList"?: boolean;
    /**
     * 返回结果中是否包含截图信息。
     * - 取值范围：true（包含）、false（不包含）。
     * - 默认值：**false**。
     * @example `true`
     */
    "IncludeSnapshotList"?: boolean;
    /**
     * 返回结果中是否包含媒体信息。
     * - 取值范围：true（包含）、false（不包含）。
     * - 默认值：**false**。
     *     > 如需获取详细MediaInfo信息，请将本参数设置为true。
     * @example `true`
     */
    "IncludeMediaInfo"?: boolean;
    /**
     * 返回结果中是否包含摘要列表。
     * - 取值范围：true（是）、false（否）。
     * - 默认值：**false**。
     * @example `true`
     */
    "IncludeSummaryList"?: boolean;
}
