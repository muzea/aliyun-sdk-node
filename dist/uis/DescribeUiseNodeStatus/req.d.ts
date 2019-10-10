interface DescribeUiseNodeStatusRequest {
    "RegionId"?: string;
    /**
    * 节点实例的ID。
    * @example `UISNODE-xxxbink187cqsgfni****`
    */ "UisNodeId": string;
    "OwnerId"?: number;
    /**
    * 节点IP。
    * @example `140.206.225.xx`
    */ "Ip"?: string;
}
export { DescribeUiseNodeStatusRequest };