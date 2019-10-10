interface CreateRealTimeLogDeliveryRequest {
    "RegionId"?: string;
    /**
    * 实时投递sls的ProjectName。
    * @example `test`
    */ "Project": string;
    /**
    * 实时投递sls的LogStoreName。
    * @example `Logstore`
    */ "Logstore": string;
    /**
    * 实时投递sls的Region。详情请参见[实时日志投递用户Region列表](~~27232~~)。
    * @example `cn-shanghai`
    */ "Region": string;
    /**
    * 开启实时日志投递服务域名。
    * @example `example.com`
    */ "Domain": string;
    "OwnerId"?: number;
}
export { CreateRealTimeLogDeliveryRequest };