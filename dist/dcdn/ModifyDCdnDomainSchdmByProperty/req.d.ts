interface ModifyDCdnDomainSchdmByPropertyRequest {
    "RegionId"?: string;
    /**
    * 需修改加速区域的域名。
    * @example `example.com`
    */ "DomainName": string;
    /**
    * 调度域属性，{"coverage":"overseas"} 中coverage支持**domestic**、**overseas**、**global**。
    * @example `domestic`
    */ "Property": string;
    "OwnerId"?: number;
}
export { ModifyDCdnDomainSchdmByPropertyRequest };