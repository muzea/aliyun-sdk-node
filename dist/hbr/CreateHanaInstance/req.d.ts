export interface CreateHanaInstanceRequest {
    /**
     * 备份仓库ID。
     * @example `v-0003v4a******gfv2`
     */
    "VaultId": string;
    /**
     * SAP HANA实例名称。
     * @example `HANA-DEV`
     */
    "HanaName"?: string;
    /**
     * SAP HANA主节点的私有或内网IP地址。
     * @example `47.100.XX.XX`
     */
    "Host"?: string;
    /**
     * 安装SAP HANA时指定的实例编号。
     * @example `00`
     */
    "InstanceNumber"?: number;
    /**
     * SYSTEMDB数据库的用户名。
     * @example `admin`
     */
    "UserName"?: string;
    /**
     * 用于连接SAP HANA的密码。
     * @example `************`
     */
    "Password"?: string;
    /**
     * 打开SSL连接开关，表示使用SSL安全连接方式连接数据库。
     * @example `true`
     */
    "UseSsl"?: boolean;
    /**
     * 打开验证SSL证书开关后，表示验证数据库服务端SSL证书。
     * @example `false`
     */
    "ValidateCertificate"?: boolean;
    /**
     * 告警设置。取值为INHERITED，表示使用与备份库一致的报警方式。
     * @example `INHERITED`
     */
    "AlertSetting"?: string;
    /**
     * 要注册的HANA系统的所有节点（实例ID），备份服务将在这些节点中安装备份客户端。
     * @example `[\"i-uf6ir9y******hvisj\"]`
     */
    "EcsInstanceId"?: string;
    /**
     * SAP HANA数据库的SID。更多信息，请参见
     * [如何查找SID](https://answers.sap.com/questions/555192/how-to-find-sid-user-and-instance-number-of-hana-d.html?spm=a2c4g.11186623.0.0.55c34b4ftZeXNK)。
     * @example `HXE`
     */
    "Sid"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfm4ebtpkzx7zy`
     */
    "ResourceGroupId"?: string;
    /**
     * 跨账号备份类型。支持：
     * - **SELF_ACCOUNT**：本账号备份
     * - **CROSS_ACCOUNT**：跨账号备份
     * @example `CROSS_ACCOUNT`
     */
    "CrossAccountType"?: string;
    /**
     * 被当前账号管理的跨账号备份的原账号ID。
     * @example `158975xxxxx4625`
     */
    "CrossAccountUserId"?: number;
    /**
     * 被当前账号管理的跨账号备份的原账号RAM中创建的角色名。
     * @example `hbrcrossrole`
     */
    "CrossAccountRoleName"?: string;
}
