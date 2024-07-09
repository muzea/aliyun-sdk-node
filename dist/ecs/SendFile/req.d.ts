export interface SendFileRequest {
    /**
     * 目标ECS实例所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 文件下发的资源组ID，当指定该参数时：
     * - InstanceId对应的ECS实例必须属于该资源组。
     * - 支持通过指定该参数筛选出对应的文件下发结果（通过调用[DescribeSendFileResults](~~184117~~)）。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 文件名称。支持全字符集，长度不得超过255个字符。
     * @example `file.txt`
     */
    "Name": string;
    /**
     * 描述信息。支持全字符集，长度不得超过512个字符。
     * @example `This is a test file.`
     */
    "Description"?: string;
    /**
     * 下发文件的超时时间。单位：秒。
     * - 当因为进程原因、缺失模块、缺失云助手Agent等原因无法下发文件时，会出现超时现象。
     * - 当设置的超时时间小于10秒时，为确保下发成功，系统会将超时时间自动设置为10秒。
     * 默认值为60。
     * @example `60`
     */
    "Timeout"?: number;
    /**
     * 文件下发目标ECS实例中的目录。如不存在则会自动创建。长度不得超过255个字符。
     * @example `/home`
     */
    "TargetDir": string;
    /**
     * 文件内容类型。
     * - PlainText：普通文本。
     * - Base64：Base64编码。
     * 默认值为PlainText。
     * @example `PlainText`
     */
    "ContentType"?: string;
    /**
     * 文件内容。文件内容在Base64编码后，大小不能超过32 KB。
     * - 当`ContentType`参数为`PlainText`时，该字段为明文格式的普通文本。
     * - 当`ContentType`参数为`Base64`时，该字段为Base64编码的文本。
     * @example `#!/bin/bash  echo "Current User is :"  echo $(ps | grep "$$" | awk '{print $2}')  --------  oss://bucketName/objectName`
     */
    "Content": string;
    /**
     * 文件的用户。只对Linux实例生效，默认为root。长度不得超过64个字符。
     * >使用其他用户时，请确保实例中存在该用户。
     * @example `test`
     */
    "FileOwner"?: string;
    /**
     * 文件的用户组。只对Linux实例生效，默认为root。长度不得超过64个字符。
     * >使用其他用户组时，请确保实例中存在该用户组。
     * @example `test`
     */
    "FileGroup"?: string;
    /**
     * 文件的权限。只对Linux实例生效，设置方式与chmod命令相同。
     * 默认值为0644，表示用户具有读写权限，用户组和其它用户具有只读权限。
     * @example `0644`
     */
    "FileMode"?: string;
    /**
     * 如果同名文件在目标目录已存在，是否覆盖文件。
     * - true：覆盖。
     * - false：不覆盖。
     * 默认值为false。
     * @example `true`
     */
    "Overwrite"?: boolean;
    /**
     * 需要执行命令的ECS实例列表。最多能指定50台ECS实例ID。N的取值范围为1~50。
     * @example `i-bp185dy2o3o6n****`
     */
    "InstanceId": string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 文件下发的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。
         * 使用一个标签过滤资源，查询到该标签下的资源数量不能超过1000个。使用多个标签过滤资源，查询到同时绑定了多个标签的资源数量不能超过1000个。如果资源数量超过1000个，您需要使用[ListTagResources](~~110425~~)接口进行查询。
         * 最多支持64个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 文件下发的标签值。N的取值范围为1~20。该值可以为空字符串。
         * 最多支持128个字符，不能包含`http://`或`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
