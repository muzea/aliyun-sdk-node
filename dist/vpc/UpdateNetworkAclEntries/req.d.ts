interface UpdateNetworkAclEntriesRequest {
    /**
    * 网络ACL所在的地域。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 网络ACL的ID。
    * @example `nacl-bp1lhl0taikrxxxxxxxx`
    */ "NetworkAclId": string;
    "IngressAclEntries"?: string[];
    "EgressAclEntries"?: string[];
    /**
    * 是否更新入方向规则，取值：
    * - **true**：更新。
    * - **false**（默认）：不更新。
    * @example `false`
    */ "UpdateIngressAclEntries"?: boolean;
    /**
    * 是否更新出方向规则，取值：
    * - **true**：更新。
    * - **false**（默认）：不更新。
    * @example `false`
    */ "UpdateEgressAclEntries"?: boolean;
    "OwnerId"?: number;
    /**
    * @example `123`
    */ "ClientToken"?: string;
}
export { UpdateNetworkAclEntriesRequest };