export interface GetDownloadUrlResponse {
    /**
     * 公网下载地址
     * @example `https://data.aliyunpds.com/hz22%2F5d79219b0aa9a7c995a94a96993ba3205cd91c5a%2F5d79219bf3261a5d38744da0834ed489b677a27a?Expires=xxxOSSAccessKeyId=xxx&Signature=xxx&response-content-disposition=attachment%3Bfilename%3DtBiZAoJPC2c8b13450eda4292b7f5f8010618e078.txt`
     */
    url: string;
    /**
     * vpc内下载地址
     * @example `https://data-vpc.aliyunpds.com/hz22%2F5d79219b0aa9a7c995a94a96993ba3205cd91c5a%2F5d79219bf3261a5d38744da0834ed489b677a27a?Expires=xxxOSSAccessKeyId=xxx&Signature=xxx&response-content-disposition=attachment%3Bfilename%3DtBiZAoJPC2c8b13450eda4292b7f5f8010618e078.txt`
     */
    internal_url: string;
    /**
     * cdn下载地址。
     * @example `https://data-cdn.aliyunpds.com/hz22%2F5d79219b0aa9a7c995a94a96993ba3205cd91c5a%2F5d79219bf3261a5d38744da0834ed489b677a27a?Expires=xxxOSSAccessKeyId=xxx&Signature=xxx&response-content-disposition=attachment%3Bfilename%3DtBiZAoJPC2c8b13450eda4292b7f5f8010618e078.txt`
     */
    cdn_url: string;
    /**
     * 下载链接的过期时间。
     * @example `2022-01-02T15:04:05.999Z07:00`
     */
    expiration: string;
    /**
     * 文件大小，单位：byte。
     * @example `10`
     */
    size: number;
    /**
     * crc64值
     * @example `5498595269368962671`
     */
    crc64_hash: string;
    /**
     * 文件内容hash
     * @example `EA4942AA8761213890A5C386F88E6464D2C31CA1`
     */
    content_hash: string;
    /**
     * 文件内容hash算法名
     * @example `sha1`
     */
    content_hash_name: string;
}
