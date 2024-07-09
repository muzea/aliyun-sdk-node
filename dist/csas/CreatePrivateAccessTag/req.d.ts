export interface CreatePrivateAccessTagRequest {
    /**
     * 内网访问标签名称。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `tag_name`
     */
    "Name": string;
    /**
     * 内网访问标签描述。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）、短划线（-）和空格。
     * @example `这是一条内网访问标签`
     */
    "Description"?: string;
}
