interface DeleteRealtimeLogDeliveryRequest {
    "RegionId"?: string;
    /**
    * 删除实时日志投递服务域名，多个以逗号（,）分隔。
    * @example `example.com`
    */ "Domain": string;
    /**
    * 实时投递sls的ProjectName。
    * @example `ProjectName`
    */ "Project": string;
    /**
    * 实时投递sls的LogStoreName。
    * @example `LogstoreName`
    */ "Logstore": string;
    /**
    * 实时投递sls的地域，详情请参见[实时日志投递用户Region列表](~~27232~~)。
    * @example `cn-shanghai`
    */ "Region": string;
    "OwnerId"?: number;
}
export { DeleteRealtimeLogDeliveryRequest };