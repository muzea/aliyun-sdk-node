interface ListTagResourcesRequest {
    /**
    * 资源所属的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 资源类型定义。取值范围：
    * - VPC：VPC实例
    * - VSWITCH：交换机实例
    * - ROUTETABLE：路由表实例
    * - EIP：弹性公网IP实例
    * @example `VPC`
    */ "ResourceType": string;
    "ResourceId"?: string[];
    "Tag"?: string[];
    /**
    * 下一个查询开始Token。
    * @example `caeba0bbb2be03f84eb48b699f0a4883	`
    */ "NextToken"?: string;
    "OwnerId"?: number;
}
export { ListTagResourcesRequest };