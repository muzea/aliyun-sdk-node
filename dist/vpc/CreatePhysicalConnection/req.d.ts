export interface CreatePhysicalConnectionRequest {
    /**
     * 物理专线所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 物理专线所在的接入点ID。
     * @example `ap-cn-beijing-ft-A`
     */
    "AccessPointId": string;
    /**
     * 物理专线的类型。默认值为**VPC**。
     * @example `VPC`
     */
    "Type"?: string;
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
    "LineOperator": string;
    /**
     * 共享专线的带宽。单位：Mbps。
     * 取值分别为**50**、**100**、**200**、**300**、**400**、**500**、**1000**、**2000**、**4000**、**5000**、**8000**、**10000**。
     * @example `50`
     */
    "bandwidth"?: number;
    /**
     * 本地数据中心的地理位置。
     * @example `XX街道`
     */
    "PeerLocation"?: string;
    /**
     * 物理专线接入端口类型。取值：
     * - **100Base-T**：百兆电口。
     * - **1000Base-T**：千兆电口。
     * - **1000Base-LX**：千兆单模光口（10千米）。
     * - **10GBase-T**：万兆电口。
     * - **10GBase-LR**：万兆单模光口（10千米）。
     * - **40GBase-LR**：四万兆单模光口。
     * - **100GBase-LR**：十万兆单模光口。
     *
     * >40GBase-LR和100GBase-LR需要根据实际后台端口水位情况进行创建，具体水位情况请联系商务经理。
     * @example `1000Base-T`
     */
    "PortType"?: string;
    /**
     * 冗余物理专线的实例ID。该专线的状态必须为**Allocated**、**Confirmed**或**Enabled**。
     * @example `pc-119mfjzm****`
     */
    "RedundantPhysicalConnectionId"?: string;
    /**
     * 物理专线的描述信息。
     * 长度为2～256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
     * @example `description`
     */
    "Description"?: string;
    /**
     * 物理专线的名称。
     * 长度为2～128个字符，必须以字母或中文开头，可包含数字、下划线（_）和短划线（-），但不能以`http:// `或`https://`开头。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 运营商为物理专线提供的电路编码。
     * @example `longtel001`
     */
    "CircuitCode"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 物理专线所在的资源组ID。
     * @example `rg-acfmoiyermp****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 设备高级能力列表。
     */
    "DeviceAdvancedCapacity"?: string[];
}
