export interface AddClientToBlackListRequest {
    /**
     * 文件系统所属的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 文件系统ID。
     * @example `1ca404a348`
     */
    "FileSystemId": string;
    /**
     * 待逐出的客户端IP地址。
     * @example `192.168.0.0`
     */
    "ClientIP": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
     * 更多详情，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken": string;
}
