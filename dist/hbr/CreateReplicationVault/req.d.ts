export interface CreateReplicationVaultRequest {
    /**
     * 备份仓库所属的地域ID。
     * @example `cn-shanghai`
     */
    "VaultRegionId": string;
    /**
     * 备份仓库名称。长度为1~64个字符。
     * @example `mirrorvaultname`
     */
    "VaultName": string;
    /**
     * 备份仓库描述信息。长度为0~255个字符。
     * @example `description`
     */
    "Description"?: string;
    /**
     * 备份仓库存储类型。取值仅为**STANDARD**，表示标准存储。
     * @example `STANDARD`
     */
    "VaultStorageClass"?: string;
    /**
     * 源仓库ID。
     * @example `v-*********************`
     */
    "ReplicationSourceVaultId": string;
    /**
     * 源仓库所属的地域ID。
     * @example `cn-hangzhou`
     */
    "ReplicationSourceRegionId": string;
    /**
     * 备份仓库的数据冗余存储方式。取值包括：
     * - LRS：标准存储-本地冗余（LRS）。采用数据冗余存储机制，将每个对象的不同冗余存储在同一个可用区内多个设施的多个设备上，确保硬件失效时的数据持久性和可用性。
     * - ZRS：标准存储-同城冗余（ZRS）。采用多可用区（AZ）机制，将用户的数据分散存放在同一地域（Region）的3个可用区。当某个可用区不可用时，仍然能够保障数据的正常访问。
     * @example `LRS`
     */
    "RedundancyType"?: string;
}
