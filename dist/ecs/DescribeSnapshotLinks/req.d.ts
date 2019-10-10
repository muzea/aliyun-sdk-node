interface DescribeSnapshotLinksRequest {
    /**
    * 云盘所属于的地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 实例 ID。
    * @example `i-instanceid1`
    */ "InstanceId"?: string;
    /**
    * 云盘 ID。一次最多指定 100 个云盘 ID。DiskIds 参数取值格式为 JSON 数组，ID 之间用半角逗号（,）隔开。
    * @example `["d-xxxxxxxxx", "d-yyyyyyyyy", … "d-zzzzzzzzz"]`
    */ "DiskIds"?: string;
    /**
    * 快照链 ID。一次最多指定 100 个快照 ID。SnapshotLinkIds参数取值格式为 JSON 数组，ID 之间用半角逗号（,）隔开。
    * @example `["sl-xxxxxxxxx", "sl-yyyyyyyyy", … "sl-zzzzzzzzz"]`
    */ "SnapshotLinkIds"?: string;
    /**
    * 云盘状态列表的页码。起始值：1
    * 默认值：1
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时设置的每页行数。取值范围：1~50。
    * 默认值：10
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeSnapshotLinksRequest };