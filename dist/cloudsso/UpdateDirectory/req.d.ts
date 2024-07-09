export interface UpdateDirectoryRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * 新的目录名称。该参数必须全局唯一。
     * 格式：包含小写字母、数字和短划线（-）。不能以短划线（-）开头或结尾，且不能有两个连续的短划线（-）。如果新的目录名以`d-`开头，则只能与本目录ID相同，而不能设置为其他值。
     * 长度：2~64个字符。
     * @example `new-example`
     */
    "NewDirectoryName"?: string;
}
