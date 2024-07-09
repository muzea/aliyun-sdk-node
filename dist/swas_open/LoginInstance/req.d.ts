export interface LoginInstanceRequest {
    /**
     * 指定的轻量应用服务器实例所属的地域ID。
     * 您可以调用[ListRegions](~~189315~~)查看支持的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 轻量应用服务器实例ID。
     * @example `9ae7106e68eb4402b0dcbd48a9de****`
     */
    "InstanceId": string;
    /**
     * 轻量应用服务器用户名。
     * - Linux服务器不需要输入用户名。
     * - Windows服务器默认用户名为`administrator`。
     * @example `administrator`
     */
    "Username"?: string;
    /**
     * 轻量应用服务器用户名对应的密码。
     * - Linux服务器：不需要输入密码。
     * - Windows服务器：输入已设置的密码。如果您购买轻量应用服务器后没有设置密码，请参见[重置密码](~~60055~~)。
     * @example `Test****`
     */
    "Password"?: string;
    /**
     * 远程登录实例的端口号。
     * - Linux服务器：默认为22。
     * - Windows服务器：默认为3389。
     * >如果您需要使用自定义端口连接服务器，需要先修改服务器默认远程端口。具体操作，请参见 [设置远程连接自定义端口](~~2807402~~)。
     * @example `3389`
     */
    "Port"?: number;
}
