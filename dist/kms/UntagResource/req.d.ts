export interface UntagResourceRequest {
    /**
     * 密钥ID。主密钥（CMK）的全局唯一标识符。
     * > KeyId、SecretName和CertificateId必须且只能指定其中一个参数。
     * @example `08c33a6f-4e0a-4a1b-a3fa-7ddf****`
     */
    "KeyId"?: string;
    /**
     * 一个或多个标签键，多个标签键用半角逗号（,）间隔。
     * 您只需指定标签键，不需要指定标签值。
     * 长度为1~128个字节。
     * @example `["tagkey1","tagkey2"]`
     */
    "TagKeys": string;
    /**
     * 凭据名称。
     * > KeyId、SecretName和CertificateId必须且只能指定其中一个参数。
     * @example `MyDbC****`
     */
    "SecretName"?: string;
    /**
     * 证书ID。
     * > KeyId、SecretName和CertificateId必须且只能指定其中一个参数。
     * @example `770dbe42-e146-43d1-a55a-1355db86****`
     */
    "CertificateId"?: string;
}
