interface ModifySubConnectionRequest {
    "RegionId"?: string;
    /**
    * 连接ID。
    * @example `UISSUBCONN-xxxn30i6x2orzj5vd****`
    */ "UisSubConnectionId": string;
    "OwnerId"?: number;
    /**
    * 连接的描述信息。
    * @example `uis connection description`
    */ "Description"?: string;
    /**
    * 连接名称。
    * @example `newUisSubConnName`
    */ "Name"?: string;
    /**
    * GRE的配置信息。
    * - localTunnelIp：UIS节点Tunnel设备的IP
    * - customerIp：公网IP
    * - customerTunnelIp：客户Tunnel设备的IP
    * - customerSubnet：私网网段
    * @example `{"localTunnelIp": "10.0.0.1","customerIp": "39.106.5.208","customerTunnelIp": "10.0.0.2","customerSubnet": "192.168.0.0/24"}`
    */ "GreConfig"?: string;
}
export { ModifySubConnectionRequest };