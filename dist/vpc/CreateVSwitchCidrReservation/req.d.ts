export interface CreateVSwitchCidrReservationRequest {
    /**
     * 资源标签
     */
    "Tag"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或者https://。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 要创建的交换机预留网段所属的交换机ID。
     * @example `vsw-25navfgbue4g****`
     */
    "VSwitchId": string;
    /**
     * 交换机预留网段的名称。
     * 名称长度为2~128个字符，以英文字母或中文开头，可包含数字、下划线（_）和短划线（-）。
     * @example `ReservationName`
     */
    "VSwitchCidrReservationName"?: string;
    /**
     * 交换机预留网段的描述信息。不填则为空，默认值为空。
     * 描述长度为2~256个字符，以英文字母或中文开头，不能以`http://`和`https://`开头。
     * @example `ReservationDescription`
     */
    "VSwitchCidrReservationDescription"?: string;
    /**
     * 交换机预留网段的IP版本。取值：
     * - **IPv4** （默认值）：IPv4版本。
     * - **IPv6**：IPv6版本。
     * @example `IPv4`
     */
    "IpVersion"?: string;
    /**
     * 交换机预留网段的掩码。
     * - 当**IpVersion**取值为**IPv4**时，交换机预留网段的掩码长度范围必须要大于所属交换机的IPv4网段掩码长度且最大不超过28。
     * - 当**IpVersion**取值为**IPv6**时，交换机预留网段的掩码长度范围必须要大于所属交换机的IPv6网段掩码长度且最大不超过80。
     * > - **VSwitchCidrReservationMask**参数和**VSwitchCidrReservationCidr**参数必须输入一个。
     * > - 当您在交换机下添加预留网段后，该预留网段不能包含交换机对应的VPC的系统保留地址。
     * @example `28`
     */
    "VSwitchCidrReservationMask"?: string;
    /**
     * 交换机预留网段。
     * - 当**IpVersion**取值为**IPv4**时，交换机预留网段必须是其所属交换机IPv4网段的真子集且网段的掩码长度不超过28。
     * - 当**IpVersion**取值为**IPv6**时，交换机预留网段必须是其所属交换机IPv6网段的真子集且网段的掩码长度不超过80。
     * > - **VSwitchCidrReservationMask**参数和**VSwitchCidrReservationCidr**参数必须输入一个。
     * > - 当您在交换机下添加预留网段后，该预留网段不能包含交换机对应的VPC的系统保留地址。
     * @example `192.168.1.64/28`
     */
    "VSwitchCidrReservationCidr"?: string;
    /**
     * 交换机预留网段的类型。取值：**prefix**，表示按段分配地址。
     * > 用户及云服务自动为弹性网卡ENI（Elastic Network Interface）分配网段时，必须从预留地址段分配。如果预留地址段的地址已经分配完，则系统会报错。
     * @example `prefix`
     */
    "VSwitchCidrReservationType"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建交换机预留网段。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行创建。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 交换机所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
