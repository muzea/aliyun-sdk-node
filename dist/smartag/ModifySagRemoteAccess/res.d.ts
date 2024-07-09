export interface ModifySagRemoteAccessResponse {
    /**
     * 智能接入网关的设备SN号。
     * @example `sag61a344**`
     */
    SerialNumber: string;
    /**
     * 请求ID。
     * @example `4FF203D7-462D-498E-94F9-2B2FA462DD23`
     */
    RequestId: string;
    /**
     * 接口调用返回的信息。
     * @example `Successful`
     */
    Message: string;
    /**
     * 远程访问IP。
     * @example `10.10.10.2`
     */
    RemoteAccessIp: string;
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 接口调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
