export interface ListErRouteMapsRequest {
    /**
     * 路由策略ID
     * @example `er-rmap-uwglhzom`
     */
    "ErRouteMapId"?: string;
    /**
     * 策略编号（自动创建默认为3000；用户手动创建的策略编号取值范围：1001-2000）
     * @example `1001`
     */
    "ErRouteMapNum"?: number;
    /**
     * 策略行为；可选值：
     * - **permit**: 允许
     * - **deny**： 拒绝
     * @example `deny`
     */
    "RouteMapAction"?: string;
    /**
     * 发布实例ID
     * @example `vpd-xsdlg2xb`
     */
    "TransmissionInstanceId"?: string;
    /**
     * 发布实例名称
     * @example `vpd1`
     */
    "TransmissionInstanceName"?: string;
    /**
     * 发布实例类型，可选值：
     * - **VPD**：灵骏网段。
     * - **VCC**：灵骏连接。
     * @example `VPD`
     */
    "TransmissionInstanceType"?: string;
    /**
     * 接收实例ID
     * @example `vpd-x2lohgpv`
     */
    "ReceptionInstanceId"?: string;
    /**
     * 接收实例名称
     * @example `vpd2`
     */
    "ReceptionInstanceName"?: string;
    /**
     * 接收实例类型，可选值：
     * - **VPD**：灵骏网段。
     * - **VCC**：灵骏连接。
     * @example `VPD`
     */
    "ReceptionInstanceType"?: string;
    /**
     * 目的网段
     * @example `0.0.0.0/0`
     */
    "DestinationCidrBlock"?: string;
    /**
     * 资源组实例ID
     */
    "ResourceGroupId"?: string;
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 弹性路由器ID
     * @example `er-kkopgtne`
     */
    "ErId": string;
    /**
     * 当前页码。起始值：1默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的行数。默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否开启分页查询。
     * @example `false`
     */
    "EnablePage"?: boolean;
}
