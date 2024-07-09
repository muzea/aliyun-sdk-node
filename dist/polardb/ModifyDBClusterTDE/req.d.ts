export interface ModifyDBClusterTDERequest {
    /**
     * 集群ID。
     * @example `pc-************`
     */
    "DBClusterId": string;
    /**
     * 修改TDE状态。取值固定为**Enable**。
     * @example `Enable`
     */
    "TDEStatus": string;
    /**
     * 角色的全局资源描述符，用来指定具体角色。详情请参见[RAM角色概览](~~93689~~)。
     * @example `acs:ram::1406926*****:role/aliyunrdsinstanceencryptiondefaultrole`
     */
    "RoleArn"?: string;
    /**
     * 自定义密钥ID。
     * @example `749c1df7-****-****-****-*********`
     */
    "EncryptionKey"?: string;
    /**
     * 是否开启自动加密所有新建的表。取值：
     * - **ON**：开启
     * - **OFF**：关闭
     * @example `ON`
     */
    "EncryptNewTables"?: string;
}
