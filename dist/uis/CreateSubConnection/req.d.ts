interface CreateSubConnectionRequest {
    "RegionId"?: string;
    /**
    * UIS节点ID，节点必须与节点IP对应。
    * @example `UISNODE-xxxbink187cqsgfni****`
    */ "UisNodeId": string;
    /**
    * 节点IP。
    * 每个节点IP只能创建一个连接。
    * @example `10.34.43.xx`
    */ "Ip": string;
    "OwnerId"?: number;
    /**
    * 连接描述信息。
    * @example `a gre description`
    */ "Description"?: string;
    /**
    * 连接名称。
    * @example `gre-name`
    */ "Name"?: string;
    /**
    * GRE的配置信息。
    * >localTunnelIp为节点GRE Tunnel设备的IP，customerIp为终端GRE的公网IP，customerTunnelIp为终端GRE Tunnel设备的IP，customerSubnet为终端GRE的私网网段。
    * @example `{"localTunnelIp": "10.0.xx.1","customerIp": "39.106.5.xx","customerTunnelIp": "10.0.xx.2","customerSubnet": "192.168.0.0/24"}`
    */ "GreConfig"?: string;
}
export { CreateSubConnectionRequest };