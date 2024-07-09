export interface SendFileRequest {
    /**
     * 文件名称。支持全字符集，长度不得超过255个字符。
     * @example `file.txt`
     */
    "Name": string;
    /**
     * 描述信息。支持全字符集，长度不得超过512个字符。
     * @example `This is a test file.
    `
     */
    "Description"?: string;
    /**
     * 文件下发目标灵骏节点中的目录。如不存在则会自动创建。
     * @example `/home`
     */
    "TargetDir": string;
    /**
     * 文件内容类型。
     * PlainText：普通文本。
     * Base64：Base64编码。
     * 默认值为PlainText。
     * @example `PlainText`
     */
    "ContentType"?: string;
    /**
     * 文件内容。文件内容在Base64编码后，大小不能超过32 KB。
     * - 当`ContentType`参数为`PlainText`时，该字段为明文格式的普通文本。
     * - 当`ContentType`参数为`Base64`时，该字段为Base64编码的文本。
     * @example `#!/bin/bash echo "Current User is :" echo $(ps | grep "$$" | awk '{print $2}') -------- oss://bucketName/objectName`
     */
    "Content": string;
    /**
     * 文件的权限。只对Linux实例生效，设置方式与chmod命令相同。
     * 默认值为0644，表示用户具有读写权限，用户组和其它用户具有只读权限。
     * @example `0644`
     */
    "FileMode"?: string;
    /**
     * 文件的用户。只对Linux实例生效，默认为root。
     * @example `root`
     */
    "FileOwner"?: string;
    /**
     * 文件的用户组。只对Linux实例生效，默认为root。长度不得超过64个字符。
     * 说明
     * 使用其他用户组时，请确保实例中存在该用户组。
     * @example `test`
     */
    "FileGroup"?: string;
    /**
     * 节点列表。
     */
    "NodeIdList": string[];
    /**
     * 如果同名文件在目标目录已存在，是否覆盖文件。
     * - true：覆盖。
     * - false：不覆盖。
     * 默认值为false。
     * @example `True`
     */
    "Overwrite"?: boolean;
    /**
     * 下发文件的超时时间。单位：秒。
     * - 当因为进程原因、缺失模块、缺失云助手Agent等原因无法下发文件时，会出现超时现象。
     * - 当设置的超时时间小于10秒时，为确保下发成功，系统会将超时时间自动设置为10秒。
     * 默认值为60。
     * @example `600`
     */
    "Timeout"?: number;
}
