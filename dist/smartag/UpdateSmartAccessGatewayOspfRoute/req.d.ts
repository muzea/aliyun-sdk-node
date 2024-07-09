export interface UpdateSmartAccessGatewayOspfRouteRequest {
    /**
     * 智能接入网关实例ID。
     * @example `sag-3manef62evrfr6****`
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
     * OSPF路由器ID。
     * @example `192.XX.XX.1`
     */
    "RouterId": string;
    /**
     * OSPF区域ID。
     * 取值范围：**1**~**2147483647**。
     * @example `1`
     */
    "AreaId": number;
    /**
     * OSPF超时时间间隔。单位：秒。
     * 取值范围：**1**~**65535**。
     * @example `40`
     */
    "DeadTime": number;
    /**
     * 发送Hello报文的时间间隔。单位：秒。
     * 取值范围：**1**~**65535**。
     * @example `10`
     */
    "HelloTime": number;
    /**
     * 认证类型。取值：
     * - **NONE**：不开启认证。
     * - **CLEARTEXT**：采用明文认证。
     * - **MD5**：采用MD5认证。
     * @example `MD5`
     */
    "AuthenticationType": string;
    /**
     * MD5 Key的编号。
     * 取值范围：**1~2147483647**。
     *  >该项仅当**AuthenticationType**为**MD5**时输入。
     * @example `7`
     */
    "Md5KeyId"?: number;
    /**
     * MD5 Key值。
     * 取值范围：**1~47**。
     * > 该项仅当**AuthenticationType**为**MD5**时输入。
     * @example `5`
     */
    "Md5Key"?: string;
    /**
     * 明文认证密码。
     * 格式要求为1~8位字符，可包含大小写字母、数字、短划线（-）或下划线（_）。
     * > 该项仅当**AuthenticationType**为**CLEARTEXT**时输入。
     * @example `duuf****`
     */
    "Password"?: string;
    /**
     * 端口名称。
     * > 当前参数暂不生效。
     * @example `2`
     */
    "InterfaceName"?: string;
    /**
     * OSPF区域类型。
     * > 当前参数暂不生效。
     * @example `NSSA`
     */
    "OspfNetworkType"?: string;
    /**
     * OSPF路由开销值。
     * > 当前参数暂不生效。
     * @example `[110/11]`
     */
    "OspfCost"?: number;
    /**
     * 路由重分发协议。
     * > 当前参数暂不生效。
     * @example `OSPF`
     */
    "RedistributeProtocol"?: string;
    /**
     * 网段。
     * > 当前参数暂不生效。
     * @example `192.168.10.0/24`
     */
    "Networks"?: string;
    /**
     * 是否只查询跨账号所属的智能接入网关实例。取值：
     * - **false**（默认值）：否。
     * - **true**：是。
     * @example `false`
     */
    "CrossAccount"?: boolean;
    /**
     * 资源所属的阿里云账号（主账号）ID。
     * @example `109790620697****`
     */
    "ResourceUid"?: string;
}
