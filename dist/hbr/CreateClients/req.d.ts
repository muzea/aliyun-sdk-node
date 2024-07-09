export interface CreateClientsRequest {
    /**
     * 备份仓库ID。
     * @example `v-0001ufe******kgm`
     */
    "VaultId": string;
    /**
     * 告警设置。取值为INHERITED，表示使用与备份库一致的报警方式。
     * @example `INHERITED`
     */
    "AlertSetting"?: string;
    /**
     * 客户端安装信息。
     * @example `[  {    "instanceId": "i-bp116lr******te9q2",    "accessKeyId": "",    "accessKeySecret": "",    "clusterId": "cl-000csy09q******9rfz9",    "sourceTypes": [      "HANA"    ]  },  {    "instanceId": "i-bp116lrux******hte9q4",    "accessKeyId": "",    "accessKeySecret": "",    "clusterId": "cl-000csy09q5094vw9rfz9",    "sourceTypes": [      "HANA"    ]  }]`
     */
    "ClientInfo"?: string;
    /**
     * 是否使用HTTPS传输数据。
     * - true：使用HTTPS传输。
     * - false：使用HTTP传输。
     * @example `false`
     */
    "UseHttps"?: boolean;
    /**
     * 资源组ID。
     * @example `rg-aekzvx7d3c4kpny`
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
