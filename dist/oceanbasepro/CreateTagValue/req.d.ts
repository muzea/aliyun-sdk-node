export interface CreateTagValueRequest {
    /**
     * 标签名称。
     * @example `标签 1`
     */
    "Value": string;
    /**
     * 标签组名称。
     * @example `标签组 1`
     */
    "Key": string;
    /**
     * 客户端标识。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
