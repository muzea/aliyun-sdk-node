export interface CreateWirelessCloudConnectorRequest {
    /**
     * 5G高速上云实例的运营商。取值：
     * - **telecom**：中国电信。
     * - **mobile**：中国移动。
     * - **unicom**：中国联通。
     * @example `unicom`
     */
    "ISP": string;
    /**
     * 名称
     * @example `test`
     */
    "Name"?: string;
    /**
     * 高速上云服务的描述信息
     * @example `test`
     */
    "Description"?: string;
    /**
     * 使用场景
     * @example `test`
     */
    "UseCase"?: string;
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 已经建立的云连接器列表。
     */
    "NetLinks": {
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 专有网络VPC ID。
         * @example `vpc-xxx`
         */
        VpcId: string;
        /**
         * 虚拟交换机id。
         */
        VSwitchs: string[];
        /**
         * 运营商APN ID。
         * @example `zjalyjs01s.5gjs.njiot`
         */
        APN: string;
    }[];
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。更多详情，请参阅如何保证幂等性。
     * @example `TF-******-1633255280-43c94bf7-2dd3-4c14-8`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建实例组。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 业务类型
     * @example `Business`
     */
    "BusinessType"?: string;
}
