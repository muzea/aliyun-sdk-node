export interface UpdateTransitRouterVpcAttachmentZonesRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改VPC连接的可用区和交换机。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接修改VPC连接的可用区和交换机。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * VPC连接ID。
     * @example `tr-attach-9bbqyygouv4cpn****`
     */
    "TransitRouterAttachmentId": string;
    /**
     * 待为VPC连接添加的可用区和交换机列表。
     */
    "AddZoneMappings"?: {
        /**
         * 待为VPC连接添加的交换机ID。
         * 一次最多支持添加10个交换机。
         * - 如果您当前登录的阿里云账号和VPC实例属于同一个账号，您可以调用[DescribeVSwitches](~~35748~~)接口查询VPC实例下交换机ID及其所属可用区的ID。
         * - 如果您当前登录的阿里云账号和VPC实例属于不同的账号，您可以调用[ListGrantVSwitchesToCen](~~427599~~)接口查询VPC实例下交换机ID及其所属可用区的ID。
         * 当填写**VSwitchId**后**ZoneId**为必填。
         * @example `vsw-wz988dda8ldm4uvmx****`
         */
        VSwitchId: string;
        /**
         * 待为VPC连接添加的交换机所属的可用区ID。
         * 一次最多支持添加10个交换机。
         * 当填写**ZoneId**后**VSwitchId**为必填。
         * @example `cn-hangzhou-h`
         */
        ZoneId: string;
    }[];
    /**
     * 待为VPC连接删除的可用区和交换机列表。
     */
    "RemoveZoneMappings"?: {
        /**
         * 待为VPC连接删除的交换机ID。
         * 一次最多支持删除10个交换机。
         * 当填写**VSwitchId**后**ZoneId**为必填。
         * @example `vsw-wz9f5izl6wshndmta****`
         */
        VSwitchId: string;
        /**
         * 待为VPC连接删除的交换机所属的可用区ID。
         * 一次最多支持删除10个交换机。
         * 当填写**ZoneId**后**VSwitchId**为必填。
         * @example `cn-hangzhou-i`
         */
        ZoneId: string;
    }[];
}
