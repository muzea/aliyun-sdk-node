export interface ModifyRouterInterfaceAttributeRequest {
    /**
     * 路由器接口所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     *  路由器接口ID。
     * @example `ri-2zeo3xzyf38r4urz****`
     */
    "RouterInterfaceId": string;
    /**
     * 路由器接口的名称。
     * 长度为2～128个字符，必须以字母或中文开头，可包含数字、下划线（_）和短划线（-）。
     * @example `TEST`
     */
    "Name"?: string;
    /**
     * 路由器接口的描述信息。
     * 长度为2～256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
     * @example `路由器接口`
     */
    "Description"?: string;
    /**
     * 对端路由器接口ID。
     * @example `ri-2zeo3xzyf38r4urz****`
     */
    "OppositeInterfaceId"?: string;
    /**
     * 对端路由器ID。
     * @example `vrt-bp1jcg5cmxjbl9xgc****`
     */
    "OppositeRouterId"?: string;
    /**
     * 要连接的对端路由器接口所属的路由器类型。取值：
     * - **VRouter**：路由器。
     * - **VBR**（默认值）：边界路由器。
     * @example `VBR`
     */
    "OppositeRouterType"?: string;
    /**
     * 对端路由器接口的账号ID。
     * @example `28768383240243****`
     */
    "OppositeInterfaceOwnerId"?: number;
    /**
     * 健康检查源IP地址，必须是本端VPC内的一个未被使用的IP地址。
     * > 物理专线接入场景下可指定该参数。
     * @example `116.62.XX.XX`
     */
    "HealthCheckSourceIp"?: string;
    /**
     * 健康检查目的IP地址。
     * > 指定**HealthCheckSourceIp**后，该参数为必选。
     * @example `116.62.XX.XX`
     */
    "HealthCheckTargetIp"?: string;
    /**
     * 健康检查阈值。单位：个。推荐值为**8**。表示指定健康检查时发送探测报文的个数。
     * @example `8`
     */
    "HcThreshold"?: number;
    /**
     * 健康检查速率。单位：毫秒。推荐值为**2000**。表示指定健康检查时发送连续探测报文的时间间隔。
     * 本示例**HcThreshold**设置为**8**、**HcRate**设置为**2000**，即在健康检查时每2000毫秒从**HealthCheckSourceIp**（健康检查源IP地址）向**HealthCheckTargetIp**（健康检查目的IP地址）发送一次探测报文，如果连续8次探测报文都无响应，则健康检查失败。
     * @example `2000`
     */
    "HcRate"?: number;
    /**
     * 是否删除该路由器接口上配置的健康检查IP。取值：
     * - **true**：删除健康检查IP。
     *
     * - **false**（默认值）：不删除健康检查IP。
     * @example `false`
     */
    "DeleteHealthCheckIp"?: boolean;
}
