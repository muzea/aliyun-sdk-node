interface CreateUisNodeRequest {
    /**
    * 该节点关联的实例的地域。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 指定节点的地域ID。您可通过DescribeRegions接口查询支持的地域。
    * @example `cn-shanghai`
    */ "UisNodeAreaId": string;
    /**
    * 指定此节点的带宽值。默认值：**20Mbps**。
    * @example `20`
    */ "UisNodeBandwidth"?: number;
    "OwnerId"?: number;
    /**
    * 节点所属的实例ID。
    * @example `UIS-xxxbtfk761c670ok9****`
    */ "UisId": string;
    /**
    * 节点的名称。
    * @example `node_name1`
    */ "Name"?: string;
    /**
    * 节点的描述信息。
    * @example `node_description`
    */ "Description"?: string;
    /**
    * 节点可用的IP数量。默认值为**2**，最大值为**10**。
    * > 您如果需要更多配额，请提交工单。
    * @example `2`
    */ "IpAddrsNum"?: number;
}
export { CreateUisNodeRequest };