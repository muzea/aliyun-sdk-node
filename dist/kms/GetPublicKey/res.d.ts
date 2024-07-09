export interface GetPublicKeyResponse {
    /**
     * 对明文数据进行加密的主密钥版本号。
     * @example `2ab1a983-7072-4bbc-a582-584b5bd8****`
     */
    KeyVersionId: string;
    /**
     * CMK的全局唯一标识符。
     * > 如果请求中的KeyId参数使用的是CMK的别名，在响应中会返回别名对应的CMK标识符。
     * @example `5c438b18-05be-40ad-b6c2-3be6752c****`
     */
    KeyId: string;
    /**
     * 随机的访问ID。
     * @example `475f1620-b9d3-4d35-b5c6-3fbdd941423d`
     */
    RequestId: string;
    /**
     * PEM格式的公钥。
     * @example `-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs5Yu9AEgATN2/e3nUz1K\nEy6ng8MSPutcse2/VECG/NUF9C6D4IsJ64ShzY3dcn34WYzTOe916eMJFxyrNrSw\nHtc4UOR5AvaoRrfpgu2uq+i70/ZXrWL+pGb1hgZV8cWheIHMxwrR3IiQlM5qN7EF\n9BdyWtyBfUGsp0Bn1VqlPc5G0x0a9xU2z9YtP994yDenNVIoIQ6Cov1lIEuwXAb2\n7boC41ePXwD0JWt41sP+rgCmpjBx00puIG+IlnoReEgI1ZGYmK98GgA/XzmNjZiD\nyvXJZAcM33Ue85+PkR5iHTtSEbi4QAoqpJabprUzz3Fin2j1dRrcacxGb7p31A9c\nJQIDAQAB\n-----END PUBLIC KEY-----\n`
     */
    PublicKey: string;
}
