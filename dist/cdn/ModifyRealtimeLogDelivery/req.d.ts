interface ModifyRealtimeLogDeliveryRequest {
    "RegionId"?: string;
    /**
    * 实时投递sls的LogStoreName。
    * @example `ProjectName`
    */ "Project": string;
    /**
    * 实时投递sls的ProjectName。
    * @example `LogstoreName`
    */ "Logstore": string;
    /**
    * 实时投递sls的Region，详情请参见[实时日志投递用户Region列表](~~27232~~)。
    * @example `ch-shanghai`
    */ "Region": string;
    /**
    * 修改实时日志投递的域名。
    * @example `example.com`
    */ "Domain": string;
    "OwnerId"?: number;
}
export { ModifyRealtimeLogDeliveryRequest };