interface ListRealtimeLogDeliveryDomainsRequest {
    "RegionId"?: string;
    /**
    * 实时投递sls的ProjectName。
    * @example `ProjectName`
    */ "Project": string;
    /**
    * 实时投递sls的LogStoreName。
    * @example `LogstoreName`
    */ "Logstore": string;
    /**
    * 实时投递sls的Region，详情请参见[实时日志投递用户Region列表](~~27232~~)。
    * @example `ch-shanghai`
    */ "Region": string;
    "OwnerId"?: number;
}
export { ListRealtimeLogDeliveryDomainsRequest };