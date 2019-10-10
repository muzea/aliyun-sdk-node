interface ModifyUisNodeAttributeRequest {
    /**
    * 极致互联网网络服务实例的地域。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 要修改的节点实例的ID。
    * @example `UISNODE-xxxc4dacp9wal2jx6****`
    */ "UisNodeId": string;
    "OwnerId"?: number;
    /**
    * 要修改的节点所属的极致互联网网络服务实例ID。
    * @example `UIS-xxxbtfk761c670ok9****`
    */ "UisId": string;
    /**
    * 节点实例的名称。
    * @example `new_node_name`
    */ "Name"?: string;
    /**
    * 节点实例的描述信息。
    * @example `node_desc`
    */ "Description"?: string;
    /**
    * 指定此节点的带宽值，默认值：**20Mbps**。
    * @example `20`
    */ "UisNodeBandwidth"?: number;
}
export { ModifyUisNodeAttributeRequest };