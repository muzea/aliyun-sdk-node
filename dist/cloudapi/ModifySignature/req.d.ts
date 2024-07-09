export interface ModifySignatureRequest {
    /**
     * 指定要修改的签名密钥的ID
     * @example `dd05f1c54d6749eda95f9fa6d491449a`
     */
    "SignatureId": string;
    /**
     * 设置新的密钥名称。支持汉字、英文字母、数字、英文格式的下划线，必须以英文字母或汉字开头，4~50个字符
     * @example `backendsignature`
     */
    "SignatureName"?: string;
    /**
     * 设置新的密钥Key值。支持英文字母、数字、英文格式的下划线，必须以英文字母开头，6~20个字符
     * @example `qwertyuiop`
     */
    "SignatureKey"?: string;
    /**
     * 设置新的密钥secret值。支持英文字母、数字、英文格式的下划线、及特殊字符（@、#、!、*），必须以英文字母开头，6~30个字符
     * @example `asdfghjkl`
     */
    "SignatureSecret"?: string;
}
