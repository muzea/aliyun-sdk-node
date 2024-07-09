export interface UpdateSmartAccessGatewayBgpRouteRequest {
    /**
     * 智能接入网关实例ID。
     * @example `sag-v9un1ccz22owd7****`
     */
    "SagInsId": string;
    /**
     * 智能接入网关设备序列号。
     * @example `sagf4dk****`
     */
    "SagSn": string;
    /**
     * 智能接入网关实例所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~69813~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * BGP路由器ID。
     * @example `172.XX.XX.1`
     */
    "RouterId": string;
    /**
     * 智能接入网关设备所属自治系统编号。
     * 取值范围：**1**~**4294967295**。
     * @example `65536`
     */
    "LocalAs": number;
    /**
     * 保持时间。单位：秒。
     * 取值范围：**3**~**65535**。
     * > 在智能接入网关设备和对端设备建立对等体关系时，两端设备要协商Hold Time并保持一致，如果在Hold Time内未收到对端发来的KeepAlive或Update消息，则认为BGP连接中断。
     * @example `9`
     */
    "HoldTime": number;
    /**
     * 存活时间间隔。单位：秒。
     * 取值范围：**0**~**65535**。
     * @example `3`
     */
    "KeepAlive": number;
    /**
     * 是否只查询跨账号所属的智能接入网关实例。取值：
     * - **false**（默认值）：否。
     * - **true**：是。
     * @example `false`
     */
    "CrossAccount"?: boolean;
    /**
     * 智能接入网关实例所属的阿里云账号（主账号）ID。
     * @example `147304382796****`
     */
    "ResourceUid"?: string;
}
