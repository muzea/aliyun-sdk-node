interface CreateDiskRequest {
    /**
    * 所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * @example `hide`
    */ "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 在指定可用区内创建一块按量付费云盘。
    * - 如果您不设置InstanceId，则ZoneId为必填参数。
    * - 您不能同时指定ZoneId和InstanceId。
    * @example `cn-hangzhou-g`
    */ "ZoneId"?: string;
    /**
    * 创建云盘使用的快照。指定该参数后，Size会被忽略，实际创建的云盘大小为指定快照的大小。2013年7月15日及以前的快照不能用来创建云盘。
    * @example `s-snapshotid1`
    */ "SnapshotId"?: string;
    /**
    * 云盘名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。默认值：空。
    * @example `FinanceJoshua`
    */ "DiskName"?: string;
    /**
    * 容量大小，以GiB为单位。指定该参数后，其取值必须≥指定快照ID的容量大小。取值范围：
    * -   cloud：5~2000
    * -   cloud_efficiency：20~32768
    * -   cloud_ssd：20~32768
    * -   cloud_essd：20~32768
    * @example `2000`
    */ "Size"?: number;
    /**
    * 数据盘的云盘种类。取值范围：
    * -   cloud：普通云盘
    * -   cloud_efficiency：高效云盘
    * -   cloud_ssd：SSD云盘
    * -   cloud_essd：ESSD云盘
    * 默认值：cloud
    * @example `cloud_ssd`
    */ "DiskCategory"?: string;
    /**
    * 云盘描述。长度为2~256个英文或中文字符，不能以 http:// 和 https:// 开头。默认值：空。
    * @example `FinanceDisk`
    */ "Description"?: string;
    /**
    * 是否加密云盘。默认值：false
    * @example `false`
    */ "Encrypted"?: boolean;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
    /**
    * 创建一块包年包月云盘，并自动挂载到指定的包年包月实例（InstanceId）上。
    * - 设置实例ID后，会忽略您设置的ResourceGroupId、Tag.N.Key、Tag.N.Value、ClientToken和KMSKeyId参数。
    * - 您不能同时指定ZoneId和InstanceId。
    * 默认值：空，代表创建的是按量付费云盘，云盘所属地由RegionId和ZoneId确定。
    * @example `i-bp1g6zv0ce8og******p`
    */ "InstanceId"?: string;
    "Tag"?: string[];
    "Arn"?: string[];
    /**
    * 云盘所在的企业资源组ID。
    * @example `rg-resourcegroupid1`
    */ "ResourceGroupId"?: string;
    /**
    * 云盘使用的KMS密钥ID。
    * @example `0e478b7a-4262-4802-b8cb-00d3fb40826X`
    */ "KMSKeyId"?: string;
    /**
    * 创建一块ESSD云盘时，设置云盘的性能等级。取值范围：
    * - PL1（默认）：单盘最高随机读写IOPS 5万。
    * - PL2：单盘最高随机读写IOPS 10万。
    * - PL3：单盘最高随机读写IOPS 100万。
    * 有关如何选择ESSD性能等级，请参见[ESSD云盘](~~122389~~)。
    * @example `PL1`
    */ "PerformanceLevel"?: string;
    /**
    * @example `hide`
    */ "AdvancedFeatures"?: string;
    "StorageSetId"?: string;
    "StorageSetPartitionNumber"?: number;
}
export { CreateDiskRequest };