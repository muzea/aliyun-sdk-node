export interface CreatePhysicalConnectionSetupOrderRequest {
    /**
     * 物理专线所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 接入点ID。
     * @example `ap-cn-beijing-ft-A`
     */
    "AccessPointId": string;
    /**
     * 提供接入物理线路的运营商。取值：
     * - **CT**：中国电信
     * - **CU**：中国联通
     * - **CM**：中国移动
     * - **CO**：中国其他
     * - **Equinix**：Equinix
     * - **Other**：中国境外其他
     * @example `CT`
     */
    "LineOperator": string;
    /**
     * 物理专线接入端口类型。取值：
     * - **100Base-T**：百兆电口。
     * - **1000Base-T**（默认值）：千兆电口。
     * - **1000Base-LX**：千兆单模光口（10千米）。
     * - **10GBase-T**：万兆电口。
     * - **10GBase-LR**：万兆单模光口（10千米）。
     * - **40GBase-LR**：四万兆单模光口。
     * - **100GBase-LR**：十万兆单模光口。
     * > 40GBase-LR和100GBase-LR需要根据实际后台端口水位情况进行创建，具体水位情况请联系商务经理。
     * @example `100Base-T`
     */
    "PortType"?: string;
    /**
     * 冗余物理专线的ID，该专线的状态必须为**Allocated**、**Confirmed**或**Enabled**。
     * @example `pc-bp10zsv5ntp****`
     */
    "RedundantPhysicalConnectionId"?: string;
    /**
     * 是否自动支付。取值：
     * - **false**（默认值）：不自动支付。
     * - **true**：自动支付。
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `318BB676-0A2B-43A0-9AD8-F1D34E93750F`
     */
    "ClientToken"?: string;
}
