interface AcceptInquiredSystemEventRequest {
    /**
    * 地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 系统事件 ID。
    * @example `e-2zeielxl1qzq8slbl***`
    */ "EventId": string;
    /**
    * @example `hide`
    */ "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
}
export { AcceptInquiredSystemEventRequest };