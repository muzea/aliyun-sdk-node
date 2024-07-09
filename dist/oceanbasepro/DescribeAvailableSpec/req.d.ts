export interface DescribeAvailableSpecRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 变配类型。
     * @example `upgradespec`
     */
    "UpgradeType": string;
    /**
     * 节点规格。
     * @example `oceanbase.cluster.cd8.xlarge`
     */
    "Spec"?: string;
}
