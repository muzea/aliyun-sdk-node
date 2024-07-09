export interface CreateDirectoryRequest {
    /**
     * 目录名称。该参数必须全局唯一。
     * 格式：包含小写字母、数字或短划线（-）。不能以短划线（-）开头或结尾，且不能有两个连续的短划线（-）。不能以`d-`开头。
     * 长度：2~64个字符。
     * > 如果不指定，则由系统自动生成。
     * @example `example`
     */
    "DirectoryName"?: string;
}
