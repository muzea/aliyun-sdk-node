interface ModifyDedicatedHostAutoReleaseTimeRequest {
    /**
    * 专有宿主机所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 需要自动释放的专有宿主机ID。
    * @example `dh-xxxxxxxxxxxxxxxxxx`
    */ "DedicatedHostId": string;
    /**
    * @example `cn-beijing`
    */ "SourceRegionId"?: string;
    "OwnerId"?: number;
    /**
    * 专有宿主机的自动释放时间。按照ISO8601标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
    * >
    * - 最短不能晚于当前时间半小时内。
    * - 最长不能超过当前时间三年以后。
    * - 如果参数值中的秒（ss）不是00，则自动取为00。
    * 如果不输入**AutoReleaseTime**参数，表示取消自动释放，专有宿主机在预约时间点不再自动释放。
    * @example `2019-06-04T13:35:00Z`
    */ "AutoReleaseTime"?: string;
}
export { ModifyDedicatedHostAutoReleaseTimeRequest };