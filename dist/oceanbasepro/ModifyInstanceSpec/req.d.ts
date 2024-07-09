export interface ModifyInstanceSpecRequest {
    /**
     * OceanBase 集群的 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 集群规格信息。<br> 当前支持以下套餐：
     * - 4C16GB：4 核 16GB。
     * - 8C32GB：8 核 32GB。
     * - 14C70GB：14 核 70GB。
     * - 24C120GB：24 核 120GB。
     * - 30C180GB：30 核 180GB。
     * - 62C400GB：62 核 400GB。
     * - 104C600GB：104 核 600GB。
     * - 16C70GB：16 核 70GB。
     * - 32C160GB：32 核 160GB。
     * - 64C380GB：64 核 380GB。
     * - 20C32GB：20 核 32GB。
     * - 40C64GB：40 核 64GB。
     * - 16C32GB：16 核 32GB。
     * - 32C70GB：32 核 70GB。
     * - 64C180GB：64 核 180GB。
     * - 32C180GB：32 核 180GB。
     * - 64C400GB：64 核 400GB。
     * @example `14C70GB`
     */
    "InstanceClass"?: string;
    /**
     * 存储空间大小，单位 GB。 存储空间的限制根据集群规格不同而不同，具体如下：
     * - 8C32G：100GB~10TB。
     * - 14C70G：200GB~10TB。
     * - 30C180G：400GB~10TB。
     * - 62C400G：800GB-10TB。
     * 各套餐的存储空间默认值为其最小值。
     * @example `200`
     */
    "DiskSize"?: number;
    /**
     * 是否只预检此次请求, 默认为 false。取值范围：
     * - true：发送检查请求，不会更改实例配置。如果检查通过，则返回 DryRunResult=true，如果检查不通过，则返回相应错误的错误码。
     * - false（默认）：如果 DryRun 填写为 false, 则表示不进行预检查, DryRunResult 默认返回 false。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 存储类型。
     * @example `cloud_essd_pl1`
     */
    "DiskType"?: string;
    /**
     * 是否原地变配
     */
    "UpgradeSpecNative"?: boolean;
}
