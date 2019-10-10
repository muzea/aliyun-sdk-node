interface CompletePhysicalConnectionLOARequest {
    /**
    * 物理专线所在的地域。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 物理专线实例ID。
    * @example `pc-bp10tvlhnwkwxxxxxxxxxx`
    */ "InstanceId": string;
    /**
    * 运营商线路编码。
    * @example `aaa111`
    */ "LineCode": string;
    /**
    * 机房楼内线缆标签。
    * @example `bbb222`
    */ "LineLabel": string;
    /**
    * 客户端Token鉴权。
    * @example `F8983C74-E068-4509-B442-89xxxxxC8F43B`
    */ "ClientToken"?: string;
    "OwnerId"?: number;
}
export { CompletePhysicalConnectionLOARequest };