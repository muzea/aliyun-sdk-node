export interface CancelDataFlowTaskRequest {
    /**
     * 文件系统ID。
     * - CPFS：必须以`cpfs-`开头，例如cpfs-125487\*\*\*\*。
     * - CPFS智算版：必须以`bmcpfs-`开头，例如bmcpfs-0015\*\*\*\*。
     * >仅中国站支持CPFS文件系统。
     * @example `cpfs-099394bd928c****`
     */
    "FileSystemId": string;
    /**
     * 数据流动ID。
     * @example `dfid-194433a5be31****`
     */
    "DataFlowId": string;
    /**
     * 数据流动任务ID。
     * @example `taskId-1345768****`
     */
    "TaskId": string;
    /**
     * 是否对此次创建请求执行预检。
     * 预检操作会帮助您检查参数有效性、校验库存等，并不会实际创建实例，也不会产生费用。
     * 取值：
     * - true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数、请求格式、业务限制和NAS库存。如果检查不通过，则返回对应错误。如果检查通过，则返回200 HttpCode，但FileSystemId为空。
     * - false（默认值）：发送正常请求，通过检查后直接创建实例。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 保证请求幂等性，从您的客户端生成一个参数值，确保不同的请求间该参数值唯一。
     * ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * > 若用户未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
}
