export interface UpdateHanaInstanceRequest {
    /**
     * 备份仓库ID。
     * @example `v-0003v4ah******9xp`
     */
    "VaultId"?: string;
    /**
     * SAP HANA实例ID。
     * @example `cl-000axjt******c6j8`
     */
    "ClusterId"?: string;
    /**
     * SAP HANA名称。
     * @example `SAP-HANA-DEV`
     */
    "HanaName"?: string;
    /**
     *
     * SAP HANA主节点的私有或内网IP地址。
     * @example `47.100.XX.XX`
     */
    "Host"?: string;
    /**
     * 安装SAP HANA时指定的实例编号。
     * @example `00`
     */
    "InstanceNumber": number;
    /**
     * SYSTEMDB数据库的用户名。
     * @example `admin`
     */
    "UserName"?: string;
    /**
     * 用于连接SAP HANA的密码。
     * @example `**********`
     */
    "Password"?: string;
    /**
     * 是否打开SSL连接开关。
     * - true：打开SSL连接开关，使用SSL安全连接方式连接数据库。
     * - false：不打开SSL连接开关，使用普通方式连接数据库。
     * @example `true`
     */
    "UseSsl": boolean;
    /**
     * 是否验证数据库服务端SSL证书。
     * - true：验证
     * - false：不验证
     * @example `false`
     */
    "ValidateCertificate": boolean;
    /**
     * 告警设置。取值为INHERITED，表示使用与备份库一致的报警方式。
     * @example `INHERITED`
     */
    "AlertSetting"?: string;
    /**
     * 资源组ID。
     * @example `rg-aekzvx7d3c4kpny`
     */
    "ResourceGroupId"?: string;
}
