export interface ModifyParentPlatformRequest {
    /**
     * 上级平台ID。
     * @example `359*****374-cn-qingdao`
     */
    "Id": string;
    /**
     * 上级平台名称。
     * @example `国标级联修改测试`
     */
    "Name"?: string;
    /**
     * 上级平台描述。
     * @example `国标级联修改测试`
     */
    "Description"?: string;
    /**
     * 上级平台国标ID。
     * @example `31000*****2170123451`
     */
    "GbId"?: string;
    /**
     * 上级平台SIP服务IP。
     * @example `10.10.10.10`
     */
    "Ip"?: string;
    /**
     * 上级平台SIP服务端口。
     * @example `5060`
     */
    "Port"?: number;
    /**
     * 本地是否开启鉴权。取值：
     * - true（默认）
     * - false
     * @example `true`
     */
    "ClientAuth"?: boolean;
    /**
     * 本地用户名。
     * @example `user01`
     */
    "ClientUsername"?: string;
    /**
     * 本地密码。
     * @example `admin123`
     */
    "ClientPassword"?: string;
    /**
     * 是否自动启用。取值：
     * - true
     * - false（默认）
     * @example `false`
     */
    "AutoStart"?: boolean;
}
