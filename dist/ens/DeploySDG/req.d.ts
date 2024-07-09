export interface DeploySDGRequest {
    /**
     * 要部署SDG的设备资源ID列表。支持批量部署，最多一次部署100个Instance。
     */
    "InstanceIds": string[];
    /**
     * 使用SDGId创建云盘，并挂载到InstanceId。
     * @example `sdg-xxxxx`
     */
    "SDGId": string;
    /**
     * SDG部署类型，包括：
     * - common：（默认）可读写部署，数据更新内容会写入云盘。
     * - overlay：读写分离部署，SDG内容只读，数据更新内容写入实例本地。
     * @example `common`
     */
    "DeploymentType"?: string;
}
