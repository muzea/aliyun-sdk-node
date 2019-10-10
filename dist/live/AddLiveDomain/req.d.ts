interface AddLiveDomainRequest {
    "RegionId"?: string;
    /**
    * 域名业务类型。取值：
    * - **liveVideo**：播流域名
    * - **liveEdge**：边缘推流域名
    * @example `liveVideo`
    */ "LiveDomainType": string;
    /**
    * 需要接入直播的域名。
    * 支持泛域名，以符号“.”开头，如：.a.com。
    * @example `live.yourdomain.com`
    */ "DomainName": string;
    /**
    * 直播域名单元化信息。目前单元化信息取值有**cn-beijing**、**cn-shanghai**、**ap-southeast-1**。
    * @example `cn-beijing`
    */ "Region": string;
    "OwnerId"?: number;
    /**
    * 检查域名是否能正常访问url。
    * @example `http://live.yourdomain.com/status.html`
    */ "CheckUrl"?: string;
    /**
    * 加速区域。国际用户、国内L3及以上用户设置有效。取值范围：
    * - **domestic（默认值）**：国内
    * - **overseas**：海外
    * - **global**：全球
    * @example `domestic`
    */ "Scope"?: string;
    /**
    * 顶级调度域。
    * @example `www.yourTopLevelDomain`
    */ "TopLevelDomain"?: string;
}
export { AddLiveDomainRequest };