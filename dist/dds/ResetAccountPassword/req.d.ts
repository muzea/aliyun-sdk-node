export interface ResetAccountPasswordRequest {
    /**
     * 实例ID。
     * @example `dds-bpxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 需要重置密码的账号，取值：**root**。
     * @example `root`
     */
    "AccountName": string;
    /**
     * 重置后的密码，即修改后的密码。
     * - 密码由大写字母、小写字母、数字、特殊字符中的任意三种组成，特殊字符为`!#$%^&*()_+-=`
     * - 密码长度为8-32位。
     * @example `Ali!123456`
     */
    "AccountPassword": string;
    /**
     * 实例的角色类型，取值说明
     * - 当实例类型为分片集群时，charactertype为必选； 取值为db 和cs。
     * - 当实例类型为副本集时，charactertype 可为空或传入normal。
     * @example `db`
     */
    "CharacterType"?: string;
}
