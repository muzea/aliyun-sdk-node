export interface ModifySignatureResponse {
    /**
     * 请求ID
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ004`
     */
    RequestId: string;
    /**
     * 密钥ID
     * @example `dd05f1c54d6749eda95f9fa6d491449a`
     */
    SignatureId: string;
    /**
     * 密钥名称
     * @example `backendsignature`
     */
    SignatureName: string;
}
