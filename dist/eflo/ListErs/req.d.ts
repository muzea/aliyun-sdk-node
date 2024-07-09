export interface ListErsRequest {
    /**
     * 主可用区。
     * @example `cn-wulanchabu-b`
     */
    "MasterZoneId"?: string;
    /**
     * 灵骏HUB名称。
     * @example `er-heyuan-main`
     */
    "ErName"?: string;
    /**
     * 地域ID。
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏HUB实例ID。
     * @example `er-kkop****`
     */
    "ErId"?: string;
    /**
     * 网络实例ID。
     * @example `vcc-cn-209300q****`
     */
    "InstanceId"?: string;
    /**
     * 网络实例类型。
     * 取值：
     * - **灵骏网段（VPD）**
     * - **灵骏连接（VCC）**
     * @example `VCC`
     */
    "InstanceType"?: string;
    /**
     * 资源组实例ID
     */
    "ResourceGroupId"?: string;
    /**
     * 当前页码。起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的行数。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否开启分页查询。
     * 取值：
     * - true：开启分页查询。
     * - false：关闭分页查询。
     * @example `false`
     */
    "EnablePage"?: boolean;
}
