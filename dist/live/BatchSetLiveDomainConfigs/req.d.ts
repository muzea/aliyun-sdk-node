interface BatchSetLiveDomainConfigsRequest {
    "RegionId"?: string;
    /**
    * 您的直播域名，多个用英文半角逗号分隔。
    * @example `play.yourdomain.com`
    */ "DomainNames": string;
    /**
    * 功能列表。
    * @example `[{"functionArgs":[{"argName":"domain_name","argValue":"home.1sapp.com"}],"functionName":"set_req_host_header"}]`
    */ "Functions": string;
    "OwnerId"?: number;
}
export { BatchSetLiveDomainConfigsRequest };