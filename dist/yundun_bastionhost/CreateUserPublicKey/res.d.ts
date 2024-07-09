export interface CreateUserPublicKeyResponse {
    /**
     * 用户的公钥ID。
     * @example `1`
     */
    PublicKeyId: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `5EAB922E-F476-5DFA-9290-313C608E724B`
     */
    RequestId: string;
}
