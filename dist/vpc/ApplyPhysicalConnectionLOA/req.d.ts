interface ApplyPhysicalConnectionLOARequest {
    /**
    * 专线实例所属的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 物理专线实例ID。
    * @example `pc-bp1qrb3044eqixxxxxxxx`
    */ "InstanceId": string;
    /**
    * 物理专线接入的客户公司名称。
    * @example `company`
    */ "CompanyName": string;
    /**
    * 物理专线类型。
    * @example `SDH`
    */ "LineType": string;
    /**
    * 物理专线施工单位。
    * @example `阿里`
    */ "Si": string;
    /**
    * 施工单位入场时间。
    * @example `2019-02-28T16:00:00.000Z`
    */ "ConstructionTime": string;
    /**
    * 客户端鉴权。
    * @example `A47BD386-7FDE-4xxx4-8D22-C62xxxxxxxx`
    */ "ClientToken"?: string;
    "OwnerId"?: number;
    /**
    * 物理专线带宽值。
    * @example `3`
    */ "Bandwidth"?: number;
    /**
    * 物理专线部署地理位置。
    * @example `杭州`
    */ "PeerLocation"?: string;
    "PMInfo"?: string[];
}
export { ApplyPhysicalConnectionLOARequest };