export interface DescribeCdnFullDomainsBlockIPConfigResponse {
    /**
     * 请求ID。
     * @example `95994621-8382-464B-8762-C708E73568D1`
     */
    RequestId: string;
    /**
     * 结果信息，返回正常是为OSS链接，异常是为错误信息。
     * @example `http://xxxx-api.oss-cn-hangzhou.aliyuncs.com/blocklist%2Fxxxxxxxxxxxx.txt?Expires=1682663947&OSSAccessKeyId=xxxxxxxxxx&Signature=xxxxxx`
     */
    Message: string;
    /**
     * 结果信息码。
     * Code不为0可能有以下三种情况：
     * + IP格式不正确。
     * + IP个数超出限制。
     * + 其他。
     * @example `0`
     */
    Code: number;
}
