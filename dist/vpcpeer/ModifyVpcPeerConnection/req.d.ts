export interface ModifyVpcPeerConnectionRequest {
    /**
     * 需要修改名称或者描述信息的VPC对等连接实例ID。
     * @example `pcc-lnk0m24khwvtkm****`
     */
    "InstanceId": string;
    /**
     * 需要修改的VPC对等连接的名称，即修改后的名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `vpcpeername`
     */
    "Name"?: string;
    /**
     * 需要修改的VPC对等连接的描述信息，即修改后的描述信息。
     * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
     * @example `newdescription`
     */
    "Description"?: string;
    /**
     * 需要修改的VPC对等连接的带宽，单位：Mbps，取值范围为大于0的整数。
     * @example `100`
     */
    "Bandwidth"?: number;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改信息。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
}
