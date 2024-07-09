export interface ModifyImageRegistryRequest {
    /**
     * 镜像仓ID， 通过listImageRegistry接口获取镜像仓ID。
     * @example `390103286`
     */
    "Id"?: number;
    /**
     * 用户名。
     * @example `xxxx`
     */
    "UserName"?: string;
    /**
     * 密码。
     * @example `********************`
     */
    "Password"?: string;
    /**
     * 每小时扫描的镜像数。
     * @example `10`
     */
    "TransPerHour"?: number;
}
