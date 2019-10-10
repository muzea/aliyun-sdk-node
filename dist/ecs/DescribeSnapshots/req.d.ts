interface DescribeSnapshotsRequest {
    /**
    * 云盘所属于的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * @example `hide`
    */ "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 指定的实例ID。
    * @example `i-instanceid1`
    */ "InstanceId"?: string;
    /**
    * 指定的云盘设备ID。
    * @example `d-diskid1`
    */ "DiskId"?: string;
    /**
    * 快照链ID。
    * @example `d-25okbh2**`
    */ "SnapshotLinkId"?: string;
    /**
    * 快照标识编码。取值可以由多个快照ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
    * @example `["s-xxxxxxxxx", "s-yyyyyyyyy", … "s-zzzzzzzzz"]`
    */ "SnapshotIds"?: string;
    /**
    * 快照列表的页码。起始值：1
    * 默认值：1
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数。最大值：100
    * 默认值：10
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 快照名称。
    * @example `FinanceJoshua`
    */ "SnapshotName"?: string;
    /**
    * 快照状态。取值范围：
    *
    * - progressing：正在创建的快照
    * - accomplished：创建成功的快照
    * - failed：创建失败的快照
    * - all（默认）：所有快照状态
    * @example `all`
    */ "Status"?: string;
    /**
    * 快照类型。取值范围：
    *
    * - auto：自动快照
    * - user：手动创建的快照
    * - all（默认）：所有快照类型
    * @example `all`
    */ "SnapshotType"?: string;
    /**
    * 查询资源时的筛选键。取值必须为CreationStartTime。
    * @example `CreationStartTime`
    */ "Filter.1.Key"?: string;
    /**
    * 查询资源时的筛选键。取值必须为CreationEndTime。
    * @example `CreationEndTime`
    */ "Filter.2.Key"?: string;
    /**
    * 查询资源时的筛选值。取值必须为资源创建的开始时间点（CreationStartTime）。
    * @example `2017-12-05T22:40:00Z`
    */ "Filter.1.Value"?: string;
    /**
    * 查询资源时的筛选值。取值必须为资源创建的结束时间点（CreationEndTime）。
    * @example `2017-12-06T22:40:00Z`
    */ "Filter.2.Value"?: string;
    /**
    * 有引用关系的资源类型。取值范围：
    * - image：使用快照创建景象（[CreateImage](~~25535~~)）
    * - disk：使用快照创建云盘（[CreateDisk](~~25513~~)）
    * - image_disk：使用快照创建了数据盘和自定义镜像
    * - none：暂无引用关系
    * @example `none`
    */ "Usage"?: string;
    /**
    * 快照源云盘的云盘类型。取值范围：
    *
    * - System：根据系统盘创建的快照
    * - Data：根据数据盘创建的快照
    * @example `Data`
    */ "SourceDiskType"?: string;
    "Tag"?: string[];
    /**
    * 是否过滤加密快照。默认值：false
    * @example `false`
    */ "Encrypted"?: boolean;
    /**
    * 资源组ID。
    * @example `rg-resourcegrouid`
    */ "ResourceGroupId"?: string;
    /**
    * 是否只预检此次请求。
    * - true：发送检查请求，不会查询资源状况。检查项包括AccessKey是否有效、RAM用户的授权情况和是否填写了必需参数。如果检查不通过，则返回对应错误。如果检查通过，会返回错误码DryRunOperation。
    * - false（默认）：发送正常请求，通过检查后返回2XX HTTP状态码并直接查询资源状况。
    * @example `false`
    */ "DryRun"?: boolean;
    /**
    * 数据盘对应的KMS密钥ID。
    * @example `0e478b7a-4262-4802-b8cb-00d3fb4082**`
    */ "KMSKeyId"?: string;
}
export { DescribeSnapshotsRequest };