interface AddCdnDomainRequest {
    "RegionId"?: string;
    /**
    * 加速域名的业务类型，取值：
    * -  **web**：图片及小文件分发。
    * - **download**：大文件下载加速。
    * - **video**：视音频点播加速。
    * @example `web`
    */ "CdnType": string;
    /**
    * 需要接入CDN的域名。支持泛域名，以点号（.）开头，例如：.a.com
    * @example `.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 资源组ID，不传时，自动补全默认资源组ID。
    * @example `your resourceGroupId`
    */ "ResourceGroupId"?: string;
    /**
    * 回源地址列表。
    * @example `[{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80,"weight":"15"}]`
    */ "Sources"?: string;
    /**
    * 检测url。
    * @example `www.yourdomain.com/test.html`
    */ "CheckUrl"?: string;
    /**
    * 取值范围：**domestic**、**overseas**、**global**，默认**domestic**。
    * @example `domestic`
    */ "Scope"?: string;
    /**
    * 顶级接入域。
    * @example `www.yourTopLevelDomain`
    */ "TopLevelDomain"?: string;
}
export { AddCdnDomainRequest };