interface DeleteNetworkAclRequest {
    /**
    * 网络ACL所属的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 网络ACL的ID。
    * @example `nacl-bp1q8bgx4xnkmxxxxxxxx`
    */ "NetworkAclId": string;
    /**
    * @example `123`
    */ "OwnerId"?: number;
    /**
    * @example `123`
    */ "ClientToken"?: string;
}
export { DeleteNetworkAclRequest };