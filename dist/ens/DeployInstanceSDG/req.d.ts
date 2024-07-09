export interface DeployInstanceSDGRequest {
    /**
     * 实例的编号列表。参数为一个带有格式的JSON数组，最多100个ID。
     */
    "InstanceIds": string[];
    /**
     * SDG的ID。
     * @example `sdg-xxxx`
     */
    "SDGId": string;
    /**
     * SDG部署类型，包括：
     * - shared：读写分离共享部署，SDG内容只读，数据更新内容写入实例本地。
     * @example `shared`
     */
    "DeploymentType"?: string;
}
