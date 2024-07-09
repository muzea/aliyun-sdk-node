export interface ModifySagRouteProtocolOspfRequest {
    /**
     *
     * 智能接入网关实例地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-whfn****`
     */
    "SmartAGId": string;
    /**
     * 绑定的智能接入网关设备序列号。
     * @example `sag32a30***`
     */
    "SmartAGSn": string;
    /**
     * OSPF路由器ID。
     * 取值格式为IPv4地址格式。
     * @example `192.XX.XX.1`
     */
    "RouterId": string;
    /**
     * OSPF区域ID。
     * 取值范围：**1~2147483647**。
     * @example `86`
     */
    "AreaId": number;
    /**
     * OSPF超时时间间隔。单位：秒。
     * 取值范围：**1~65535**。
     * @example `10`
     */
    "DeadTime": number;
    /**
     * 发送Hello报文的时间间隔。单位：秒。
     * 取值范围：**1~65535**。
     * @example `3`
     */
    "HelloTime": number;
    /**
     * 认证方式。取值：
     * - **NONE**：不开启认证。
     * - **CLEARTEXT**：采用明文认证，需输入明文密码。
     * - **MD5**：采用MD5认证，需输入MD5 Key ID和MD5 Key。
     * @example `NONE`
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
     * @example `1212****`
     */
    "Password"?: string;
}
