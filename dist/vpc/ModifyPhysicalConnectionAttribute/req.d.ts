export interface ModifyPhysicalConnectionAttributeRequest {
    /**
     * 物理专线所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 物理专线的ID。
     * @example `pc-119mfjzm******`
     */
    "PhysicalConnectionId": string;
    /**
     * 提供接入物理线路的运营商，取值：
     *
     * - **CT**：中国电信
     * - **CU**：中国联通
     * - **CM**：中国移动
     * - **CO**：中国其他
     * - **Equinix**：Equinix
     * - **Other**：境外其他
     *
     * @example `CT`
     */
    "LineOperator"?: string;
    /**
     * 物理专线接入接口带宽，单位Mbps，取值范围：2~10240。
     * @example `5`
     */
    "bandwidth"?: number;
    /**
     *  本地数据中心的地理位置。
     * @example `浙江省杭州市XX区XX街道XX号`
     */
    "PeerLocation"?: string;
    /**
     * 物理专线接入端口类型，取值：
     *
     * - **100Base-T**：百兆电口。
     * - **1000Base-T（默认值）**：千兆电口。
     * - **1000Base-LX**：千兆单模光口（10千米）。
     * - **10GBase-T**：万兆电口 。
     * - **10GBase-LR**：万兆单模光口（10千米） 。
     * - **40GBase-LR**：四万兆单模光口。
     * - **100GBase-LR**：十万兆单模光口。
     * > 40GBase-LR和100GBase-LR需要根据实际后台端口水位情况进行创建，具体水位情况请联系商务经理。
     *
     * @example `1000Base-LX`
     */
    "PortType"?: string;
    /**
     * 冗余物理专线的ID，该专线的状态必须为**Allocated**、**Confirmed**或**Enabled**。
     * @example `pc-119mfjzm7`
     */
    "RedundantPhysicalConnectionId"?: string;
    /**
     *  物理专线的描述信息。
     * 长度为 2~256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
     * @example `物理专线的描述信息`
     */
    "Description"?: string;
    /**
     * 物理专线的名称。
     * 长度为 2~128个字符，必须以字母或中文开头，可包含数字，半角句号（.），下划线（_）和短划线（-）。但不能以`http:// `或`https://`开头。
     * @example `物理专线的名称`
     */
    "Name"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `efefe566754h`
     */
    "ClientToken"?: string;
    /**
     * 运营商为物理专线提供的电路编码。
     * @example `longtel001`
     */
    "CircuitCode"?: string;
}
