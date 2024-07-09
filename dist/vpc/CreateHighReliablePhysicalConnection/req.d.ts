export interface CreateHighReliablePhysicalConnectionRequest {
    /**
     * 物理专线所在的地域。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 物理专线所在的资源组ID。
     * @example `rg-acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。一旦传入该值，则不允许为空字符串。
         * 最多支持64个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。一旦传入该值，可以为空字符串。
         * 最多支持128个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 高可靠模式。取值：
     * - **MultiApMultiDevice**：最强容灾能力。该模式支持两个不同接入点和两台不同设备，具备最强容灾能力。
     * - **MultiApSingleDevice**：强大容灾能力。该模式支持两个不同接入点和一台设备，具备强大容灾能力。
     * - **SingleApMultiDevice**：开发和测试。该模式支持一个接入点和两台设备，一般仅推荐用于非关键业务的开发和测试工作。
     * - **SingleApMultiConnection**：大带宽负载均衡能力。该模式为白名单开放，支持一个接入点一台设备多个物理端口，如有需求请联系商务经理。
     * @example `MultiApMultiDevice`
     */
    "HighReliableType": string;
    /**
     * 物理专线接入端口类型。取值：
     * - **1000Base-LX**：千兆单模光口（10千米）。
     * - **10GBase-LR**：万兆单模光口（10千米）。
     * - **40GBase-LR**：四万兆单模光口。
     * - **100GBase-LR**：十万兆单模光口。
     *
     * >40GBase-LR和100GBase-LR需要根据实际后台端口水位情况进行创建，具体水位情况请联系商务经理。
     * @example `1000Base-LX`
     */
    "PortType": string;
    /**
     * 设备高级能力。取值：
     * - **SubifRateLimit**：VBR限速。
     * - **DualStack**：支持IPv6。
     * - **BFD**：双向转发检测。
     * - **CEN**：支持多协议BGP。
     * - **CENv6**：支持多协议BGPv6。
     */
    "DeviceAdvancedCapacity"?: string[];
    /**
     * 接入点列表
     */
    "ApList": {
        /**
         * 物理专线的名称。
         * 长度为2～128个字符，必须以字母或中文开头，可包含数字、下划线（_）和短划线（-），但不能以`http:// `或`https://`开头。
         * @example `test`
         */
        Name: string;
        /**
         * 物理专线的描述信息。
         * 长度为2～256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
         * @example `description`
         */
        Description: string;
        /**
         * 物理专线所在的地域ID。
         * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
         * @example `cn-shanghai`
         */
        RegionId: string;
        /**
         * 提供接入物理线路的运营商。取值：
         * - **CT**：中国电信。
         * - **CU**：中国联通。
         * - **CM**：中国移动。
         * - **CO**：中国其他。
         * - **Equinix**：Equinix。
         * - **Other**：境外其他。
         * @example `CT`
         */
        LineOperator: string;
        /**
         * 物理专线所在的接入点ID。
         * > **HighReliableType**为**MultiApMultiDevice**和**MultiApSingleDevice**的时候要求传入两个不同的接入点，**HighReliableType**为**SingleApMultiDevice**和**SingleApMultiConnection**的时候要求传入一个接入点。
         * @example `ap-cn-beijing-ft-A`
         */
        AccessPointId: string;
        /**
         * 端口数量。仅在**HighReliableType**为**SingleApMultiConnection**的时候要求传入，取值范围为2-16。
         * @example `2`
         */
        PortNum: number;
        /**
         * 物理专线的类型。默认值为**VPC**。
         * @example `VPC`
         */
        Type: string;
        /**
         * 共享专线的带宽。单位：Mbps。
         * 取值分别为50、100、200、300、400、500、1000、2000、4000、5000、8000、10000。
         * @example `50`
         */
        Bandwidth: number;
        /**
         * 本地数据中心的地理位置。
         * @example `XX街道`
         */
        PeerLocation: string;
        /**
         * 运营商为物理专线提供的电路编码。
         * @example `longtel001`
         */
        CircuitCode: string;
    }[];
    /**
     * 是否只预检此次请求。取值范围：
     * - **true**：发送检查请求，不会启动实例。检查项包括是否填写了必需参数、请求格式、实例状态。如果检查不通过，返回编码`DRYRUN.FAIL`，并且返回对应错误列表。如果检查通过，则返回编码`DRYRUN.SUCCESS`。
     * - **false**（默认值）：发送正常请求，通过检查后直接启动实例。
     * @example `false`
     */
    "DryRun"?: string;
    /**
     * 返回结果显示的语言。取值：
     * - **zh-CN**（默认值）：中文。
     * - **en-US**：英文。
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
}
