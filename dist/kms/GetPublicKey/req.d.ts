export interface GetPublicKeyRequest {
    /**
     * 主密钥（CMK）的全局唯一标识符。该参数也可以被指定为CMK绑定的别名，详情见[别名使用说明](~~68522~~)。
     * @example `5c438b18-05be-40ad-b6c2-3be6752c****`
     */
    "KeyId": string;
    /**
     * 密钥版本的全局唯一标识符。
     * @example `2ab1a983-7072-4bbc-a582-584b5bd8****`
     */
    "KeyVersionId": string;
}
