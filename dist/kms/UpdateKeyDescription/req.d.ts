export interface UpdateKeyDescriptionRequest {
    /**
     * 密钥ID。主密钥的全局唯一标识符。
     * @example `1234abcd-12ab-34cd-56ef-12345678****`
     */
    "KeyId": string;
    /**
     * 主密钥的描述性信息。通常用于描述主密钥的用途，例如主密钥保护的数据类型、可使用主密钥的应用等。
     * @example `key description example`
     */
    "Description": string;
}
