interface BatchAddCdnDomainRequest {
    "RegionId"?: string;
    /**
    * 加速域名的业务类型。 取值：
    * - **web**：图片及小文件分发。
    * - **download**：大文件下载加速。
    * - **Video**：视频点播加速。
    * @example `web`
    */ "CdnType": string;
    /**
    * 需要接入CDN的域名。多个域名之间用逗号（,）隔开。
    * @example `example.com`
    */ "DomainName": string;
    /**
    * 回源地址列表。
    * @example `[{“content”:”1.1.1.1”,”type”:”ipaddr”,”priority”:”20”,”port”:80,”weight”:”15”}]`
    */ "Sources": string;
    "OwnerId"?: number;
    /**
    * 资源组ID，不传时，自动补全默认资源组ID。
    * @example `123`
    */ "ResourceGroupId"?: string;
    /**
    * 检测url。
    * @example `url`
    */ "CheckUrl"?: string;
    /**
    * 取值范围：
    * - **domestic**
    * - **overseas**
    * - **global**
    * @example `domestic`
    */ "Scope"?: string;
    /**
    * 顶级接入域。
    * @example `www.yourdomain.com`
    */ "TopLevelDomain"?: string;
}
export { BatchAddCdnDomainRequest };