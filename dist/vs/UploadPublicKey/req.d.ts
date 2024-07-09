export interface UploadPublicKeyRequest {
    /**
     * 公钥名称，不可重复。
     * 取值规范：
     * 1. 长度8-255
     * 2. 小写字母、数字、下划线'_'、中划线'-'、点分段'.'
     * 3. 首字符必须为字母或数字
     * 4. 前缀不能为"group-"
     * @example `mykey-v1.0`
     */
    "KeyName": string;
    /**
     * 公钥分组，用于公钥管理。
     * 取值规范：
     * 1. 长度0-255
     * 2. 小写字母、数字、下划线'_'、中划线'-'、点分段'.'
     * 3. 首字符必须为字母或数字
     * @example `g-test`
     */
    "KeyGroup"?: string;
    /**
     * 经过编码的公钥内容，默认编码格式Base64。
     * @example `verify_dffeb6610035dcb77b413a59c3*****`
     */
    "Content": string;
    /**
     * 公钥描述信息
     * @example `测试使用`
     */
    "Description"?: string;
}
