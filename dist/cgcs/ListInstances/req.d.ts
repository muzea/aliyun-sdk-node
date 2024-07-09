export interface ListInstancesRequest {
    /**
     * 项目ID，不填默认查询所有项目下的实例。
     * @example `4820372607851300489003`
     */
    "ProjectId"?: string;
    /**
     * GCS 实例的规格，不填默认所有实例规格。
     * @example `gcs.r1c1m1.1xlarge`
     */
    "InstanceType"?: string;
    /**
     * 大区ID，不填默认所有大区。取值：
     * - huadong
     * - xinan
     * - huanan
     * - huabei
     * - huazhong
     * @example `huadong`
     */
    "DistrictId"?: string;
    /**
     * 待查询的云渲染实例 ID 列表，不填默认所有实例 ID。
     */
    "InstanceId"?: string[];
    /**
     * 上一次查询返回的 Token，首次查询可为空。
     * @example `BEXZPF01W23U46598WVf`
     */
    "NextToken"?: string;
    /**
     * 最大结果数。取值范围 1~200，默认值 200。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 云渲染实例话状态，包括：
     * - CREATING：创建中
     * - RUNNING：实例运行中
     * - OPERATING：实例运维中
     * - DELETING: 实例删除中
     * - MIGRATING: 实例迁移中
     * @example `CREATING`
     */
    "Status"?: string;
}
