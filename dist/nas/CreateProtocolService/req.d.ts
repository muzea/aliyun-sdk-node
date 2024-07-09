export interface CreateProtocolServiceRequest {
    /**
     * 文件系统ID。
     * @example `cpfs-099394bd928c****`
     */
    "FileSystemId": string;
    /**
     * 协议服务的规格。
     * 取值： General（默认值）。
     * @example `General`
     */
    "ProtocolSpec": string;
    /**
     * 协议服务的带宽。
     * 单位：MB/s。
     * @example `8000`
     */
    "Throughput"?: number;
    /**
     * 协议服务的协议类型。
     * 取值：NFS（默认值），仅支持NFSv3协议访问。
     * @example `NFS`
     */
    "ProtocolType": string;
    /**
     * 协议服务的描述。控制台中显示为“协议服务名称”。
     * 限制：
     * - 长度为2~128个英文或中文字符。
     * - 必须以大小写字母或中文开头，不能以`http://`和`https://`开头。
     * - 可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `此协议服务的描述。`
     */
    "Description"?: string;
    /**
     * 协议服务VpcId，需与文件系统VPC保持一致。
     * @example `vpc-2vct297b8157bth9z****`
     */
    "VpcId": string;
    /**
     * 协议服务VSwitchId。
     * @example `vsw-2vc3c2lybvdllxyq4****`
     */
    "VSwitchId": string;
    /**
     * 是否对此次创建请求执行预检。
     * 预检操作会帮助您检查参数有效性、依赖条件等，并不会实际创建实例，也不会产生费用。
     * 取值：
     * - true：发送检查请求，不会创建协议服务。检查项包括是否填写了必需参数、请求格式、业务限制依赖条件。如果检查不通过，则返回对应错误。如果检查通过，则返回200 HttpCode，但ProtocolServiceId为空。
     * - false（默认）：发送正常请求，通过检查后直接创建实例。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 保证请求幂等性，从您的客户端生成一个参数值，确保不同请求间该参数值唯一。
     * ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * > 若用户未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
