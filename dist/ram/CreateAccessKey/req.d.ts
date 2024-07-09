export interface CreateAccessKeyRequest {
    /**
     * 指定用户名，RAM用户调用此接口时，默认为自己创建访问密钥。
     * @example `zhangq****`
     */
    "UserName"?: string;
}
