export interface UploadFileRequest {
    /**
     * 自定义文件名，不可重复，将作为文件的唯一标记之一。
     * 默认取值规范：
     * 1. 长度8-255
     * 2. 小写字母、数字、下划线'_'、中划线'-'、点分段'.'
     * 3. 首、尾字符必须为字母或数字
     * @example `mytest`
     */
    "FileName": string;
    /**
     * 文件下载地址
     * @example `https://xxx.xxx.xxx.tar`
     */
    "OriginUrl": string;
    /**
     * 文件md5，用于检查文件完整性
     * @example `150b6083f50dd08159d45a0d5e4b56f9`
     */
    "Md5": string;
    /**
     * 向云应用服务实例推送的目标路径，必须是绝对路径，不支持输入目录。目标路径所在上级目录有范围限制，取值范围：
     * 1. /data/local
     * 2. /data/user
     * 3. /data/data
     * 4. /data/cache
     * 5. /data/tmp
     * 6. /storage
     * @example `/data/tmp/test/xxx.tar`
     */
    "TargetPath": string;
    /**
     * 文件描述信息
     * @example `测试使用`
     */
    "Description"?: string;
}
