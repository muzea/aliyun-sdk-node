interface DescribeDedicatedHostsRequest {
    /**
    * 专有宿主机所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * @example `cn-beijing`
    */ "SourceRegionId"?: string;
    "OwnerId"?: number;
    /**
    * 可用区ID。
    * @example `cn-hangzhou-g`
    */ "ZoneId"?: string;
    /**
    * 专有宿主机ID列表。单次最多支持100个ID ，多个ID用一个格式类似[“dh- xxxxxxxxx”, “dh- yyyyyyyyy”, … “dh- zzzzzzzzz”]的JSON数组表示，ID之间用半角逗号（,）隔开。
    * @example `dh-xxxxxxxxxxxxxxxxx`
    */ "DedicatedHostIds"?: string;
    /**
    * 专有宿主机的名称。
    * @example `myDDH`
    */ "DedicatedHostName"?: string;
    /**
    * 专有宿主机的使用状态。取值范围：
    * - Available（默认）：可用状态。
    * - Under-Assessment：故障潜伏期，专有宿主机可能会出故障。
    * - Permanent-Failure：永久性故障，专有宿主机不可用。
    * @example `Available`
    */ "Status"?: string;
    /**
    * 专有宿主机的规格类型。
    * @example `ddh.g5`
    */ "DedicatedHostType"?: string;
    /**
    * @example `financial`
    */ "LockReason"?: string;
    /**
    * 响应信息的页码数。
    * 默认值：1
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 响应信息的每页行数。最大值：100。
    * 默认值：10
    * @example `10`
    */ "PageSize"?: number;
    "Tag"?: string[];
    /**
    * @example `rg-xxxxxxxxxxxxxxx`
    */ "ResourceGroupId"?: string;
}
export { DescribeDedicatedHostsRequest };