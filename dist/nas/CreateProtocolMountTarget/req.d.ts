export interface CreateProtocolMountTargetRequest {
    /**
     * 协议服务ID。
     * @example `ptc-197ed6a00f2b****`
     */
    "ProtocolServiceId": string;
    /**
     * 文件系统ID。
     * @example `cpfs-099394bd928c****`
     */
    "FileSystemId": string;
    /**
     * 协议服务导出的专有网络ID。
     * @example `vpc-2vct297b8157bth9z****`
     */
    "VpcId": string;
    /**
     * 协议服务导出的交换机ID。
     * @example `vsw-2vc3c2lybvdllxyq4****`
     */
    "VSwitchId": string;
    /**
     * 需导出的Fileset ID。
     * 限制：
     * - 该Fileset必须已存在。
     * - 一个Fileset只允许创建一个导出目录。
     * - Fileset和Path只能且必须指定一个。
     * @example `fset-1902718ea0ae****`
     */
    "FsetId"?: string;
    /**
     * 需导出的CPFS目录的路径。
     * 限制：
     * - 该目录必须是CPFS上的已有目录。
     * - 同一目录只允许创建一个导出。
     * - Fileset和Path只能且必须指定一个。
     * 格式：
     * - 长度为1~1024个字符。
     * - 使用UTF-8编码。
     * - 必须以正斜线（/）开头和结尾，根目录为`/`。
     * @example `/`
     */
    "Path"?: string;
    /**
     * 权限组名称。
     * 默认值：DEFAULT_VPC_GROUP_NAME
     * @example `DEFAULT_VPC_GROUP_NAME`
     */
    "AccessGroupName"?: string;
    /**
     * 协议服务导出目录的描述。控制台中显示为**导出目录名称**。
     * 限制：
     * - 长度为2~128个英文或中文字符。
     * - 必须以大小写字母或中文开头，不能以`http://`和`https://`开头。
     * - 可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `此导出目录的描述`
     */
    "Description"?: string;
    /**
     * 保证请求幂等性，从您的客户端生成一个参数值，确保不同的请求间该参数值唯一。
     * ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * > 若用户未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    "ClientToken"?: string;
    /**
     * 是否对此次创建请求执行预检。
     * 预检操作会帮助您检查参数有效性、依赖条件等，并不会实际创建实例，也不会产生费用。
     * 取值：
     * - true：发送检查请求，不会创建导出目录。检查项包括是否填写了必需参数、请求格式、业务限制依赖条件。如果检查不通过，则返回对应错误。如果检查通过，则返回200 HttpCode，但ExportId为空。
     * - false（默认）：发送正常请求，通过检查后直接创建实例。
     * @example `true`
     */
    "DryRun"?: boolean;
}
