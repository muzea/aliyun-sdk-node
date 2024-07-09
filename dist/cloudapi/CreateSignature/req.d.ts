export interface CreateSignatureRequest {
    /**
     * 密钥显示名称。支持汉字、英文字母、数字、英文格式的下划线，必须以英文字母或汉字开头，4~50个字符
     * @example `backendsignature`
     */
    "SignatureName": string;
    /**
     * 设置密钥的Key值。支持英文字母、数字、英文格式的下划线，必须以英文字母开头，6~20个字符
     * @example `qwertyuiop`
     */
    "SignatureKey": string;
    /**
     * 设置密钥的secret值。支持英文字母、数字、英文格式的下划线、及特殊字符（@、#、!、*），必须以英文字母开头，6~30个字符
     * @example `asdfghjkl`
     */
    "SignatureSecret": string;
}
