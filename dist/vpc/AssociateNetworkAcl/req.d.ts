interface AssociateNetworkAclRequest {
    /**
    * 网络ACL所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 网络ACL的ID。
    * @example `nacl-a2do9e413e0spxxxxxxxx`
    */ "NetworkAclId": string;
    "Resource"?: string[];
    "OwnerId"?: number;
    /**
    * @example `123`
    */ "ClientToken"?: string;
}
export { AssociateNetworkAclRequest };