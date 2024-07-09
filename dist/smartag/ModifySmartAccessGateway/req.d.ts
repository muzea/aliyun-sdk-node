export interface ModifySmartAccessGatewayRequest {
    /**
     * 智能接入网关实例ID。
     * @example `sag-0ovhf732a9j0******`
     */
    "SmartAGId": string;
    /**
     * 智能接入网关的名称。
     * 长度为2~128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。
     * @example `SAG`
     */
    "Name"?: string;
    /**
     * 智能接入网关的描述。
     * 长度为2~256个字符，必须以字母或中文开头，但不能以`http:// `或` https:/`/开头。
     * @example `SAG描述`
     */
    "Description"?: string;
    /**
     * 线下机构客户端用来通信的私网网段，确保各私网网段不冲突。
     * 如果智能接入网关终端设备的LAN口配置为动态方式，则线下已开启DHCP的客户端使用的IP地址会从您指定的第一个私网网段中分配。
     * @example `172.16.0.0/24`
     */
    "CidrBlock"?: string;
    /**
     * 智能接入网关的所属区域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 离线锁定功能用户设定的阈值，大于等于0。
     * 单位：秒。
     * @example `3`
     */
    "SecurityLockThreshold"?: number;
    /**
     * 线下路由同步方式：
     * - **static**：静态路由。
     * - **dynamic**：动态路由。
     * @example `static`
     */
    "RoutingStrategy"?: string;
    /**
     * 智能接入网关所部署的位置。
     * @example `[     {         "adcode":"",         "label":"浙江省杭州市xx区xx路xx号",         "value":"B0FFGxxxx",         "center":"120.190xxxx, 30.182xxxx",         "_new":"true"     } ]`
     */
    "Position"?: string;
    /**
     * 是否开启SAG App连接日志审计。
     * - **true**：开启SAG App连接日志审计。
     * - **false**：关闭SAG App连接日志审计。
     * @example `true`
     */
    "EnableSoftwareConnectionAudit"?: boolean;
}
