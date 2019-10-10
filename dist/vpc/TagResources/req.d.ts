interface TagResourcesRequest {
    /**
    * 资源所属的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "ResourceId": string[];
    "Tag": string[];
    /**
    * 资源类型定义。取值范围：
    * - VPC：VPC实例
    * - VSWITCH：交换机实例
    * - ROUTETABLE：路由表实例
    * - EIP：弹性公网IP实例
    * @example `VPC`
    */ "ResourceType": string;
    "OwnerId"?: number;
}
export { TagResourcesRequest };