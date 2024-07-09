export interface SetDefaultDomainRequest {
    /**
     * 默认域名。
     * 格式：`<AccountAlias>.onaliyun.com`。其中`<AccountAlias>`为账号别名，默认值是阿里云账号ID。默认域名必须以`.onaliyun.com`后缀结尾。
     * 默认域名（含后缀）最大长度为64个字符。可包含英文字母、数字、英文句点（.）、短划线（-）和下划线（_）。
     * > 默认域名不能以短划线（-）开头或结尾，且不能有两个连续的短划线（-）。
     * @example `examplecompany.onaliyun.com`
     */
    "DefaultDomainName": string;
}
