interface ModifyCdnDomainSchdmByPropertyRequest {
    "RegionId"?: string;
    /**
    * 需修改加速区域的域名。
    * @example `example.com`
    */ "DomainName": string;
    /**
    * 调度域属性。{"coverage":"overseas"} 中coverage参数支持**domestic**、**overseas**、**global**。
    * @example `{"coverage":"overseas"}`
    */ "Property": string;
    "OwnerId"?: number;
}
export { ModifyCdnDomainSchdmByPropertyRequest };