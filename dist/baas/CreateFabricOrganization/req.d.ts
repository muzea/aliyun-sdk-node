interface CreateFabricOrganizationRequest {
    /**
    * 地域
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 区域
    * @example `cn-hangzhou`
    */ "Location": string;
    /**
    * 域名
    * @example `domain`
    */ "Domain": string;
    /**
    * 规格名
    * @example `basic`
    */ "SpecName": string;
    /**
    * 名称
    * @example `name`
    */ "OrganizationName": string;
    /**
    * 描述
    * @example `description`
    */ "Description"?: string;
    /**
    * 节点数据量
    * @example `2`
    */ "PeersCount"?: number;
    /**
    * 计费周期
    * @example `12`
    */ "PaymentDuration"?: number;
    /**
    * 周期单位
    * @example `2`
    */ "PaymentDurationUnit"?: string;
}
export { CreateFabricOrganizationRequest };