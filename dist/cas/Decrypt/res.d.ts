export interface DecryptResponse {
    /**
     * 解密数据。
     * @example `VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4`
     */
    Plaintext: string;
    /**
     * 请求ID。
     * @example `5979d897-d69f-4fc9-87dd-f3bb73c40b80`
     */
    RequestId: string;
    /**
     * 证书唯一识别码。
     * @example `1ef1da5f-38ed-69b3-****-037781890265`
     */
    CertIdentifier: string;
}
