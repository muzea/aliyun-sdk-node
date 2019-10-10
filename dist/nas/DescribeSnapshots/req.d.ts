interface DescribeSnapshotsRequest {
    "RegionId": string;
    /**
    * 文件系统类型，可选值：extreme。
    * @example `extreme`
    */ "FileSystemType": string;
    /**
    * 指定的文件系统 ID。
    * @example `extreme-22fd123`
    */ "FileSystemId"?: string;
    /**
    * 快照标识编码。取值可以由多个快照 ID 组成，多个ID用半角逗号（,）隔开，最多支持 100 个ID。
    * @example `s-extreme-xxxxxxxxx,s-extreme-yyyyyyyyy,s-extreme-zzzzzzzzz`
    */ "SnapshotIds"?: string;
    /**
    * 快照名称。
    * @example `FinanceJoshua`
    */ "SnapshotName"?: string;
    /**
    * 快照类型。取值范围：
    * - auto：自动快照
    * - user：手动创建的快照
    * - all（默认）：所有快照类型
    * @example `all`
    */ "SnapshotType"?: string;
    /**
    * 快照状态。取值范围：
    * - progressing：正在创建的快照
    * - accomplished：创建成功的快照
    * - failed：创建失败的快照
    * - all（默认）：所有快照状态
    * @example `all`
    */ "Status"?: string;
    /**
    * 分页查询时设置的每页行数。最大值：100，默认值：10。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 快照列表的页码。起始值：1，默认值：1。
    * @example `1`
    */ "PageNumber"?: number;
}
export { DescribeSnapshotsRequest };