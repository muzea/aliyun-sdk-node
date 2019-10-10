interface DescribePhysicalConnectionLOARequest {
    /**
    * 物理专线部署的地域。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 物理专线实例ID。
    * @example `pc-bp1ca4wca27exxxxxxxx`
    */ "InstanceId": string;
    "OwnerId"?: number;
    /**
    * 客户端Token鉴权。
    * @example `318BB676-0A2B-43A0-9AD8-F1D34E93750F`
    */ "ClientToken"?: string;
}
export { DescribePhysicalConnectionLOARequest };