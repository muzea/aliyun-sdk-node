interface ModifyUisConnectionAttributeRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 要修改的隧道连接ID。
    * @example `UISCONN-xxxblu51boe75a1eb****`
    */ "UisConnectionId": string;
    /**
    * 节点实例ID。
    * @example `UISNODE-xxxcp0zr5m2avmn2r****`
    */ "UisNodeId"?: string;
    /**
    * UIS实例软件端与服务端使用的协议名称。取值：**SSLVPN/GRE/SDK**。
    * @example `SSLVPN`
    */ "UisProtocol"?: string;
    /**
    * 隧道连接的描述。
    * @example `conn_desc`
    */ "Description"?: string;
    /**
    * 隧道连接的名称。
    * @example `test_conn`
    */ "Name"?: string;
    /**
    * 在创建UIS Connection时，Protocol参数的值指定为**GRE**。
    * GreConfig参数为结构体数组转成的JSON String，可以通过LocalIP来为每个UisNode的IP配置不同的GRE tunnel。
    * 结构体中的参数包含：
    * - **LocalIP**：UisNode的IP
    * - **LocalTunnelIP**：UisNode的GRE Tunnel设备的IP
    * - **CustomerIP**：客户的公网IP
    * - **CustomerTunnelIP**：客户的GRE Tunnel设备的IP
    * - **CustomerSubnet**：客户GRE的私网网段
    * @example `[{'localIp':'47.95.197.XX','localTunnelIp':'10.0.0.X','customerIp':'39.106.5.XX','customerTunnelIp':'10.0.0.X','customerSubnet':'192.168.X.X/24'},{'localIp':'47.94.219.XX','localTunnelIp':'10.0.0.X','customerIp':'39.106.5.XX','customerTunnelIp':'10.0.0.X','customerSubnet':'192.168.X.X/24'}]`
    */ "GreConfig"?: string;
    /**
    * Protocal指定为OpenVPN协议时：
    * - SSLConfig. Proto：SSL-VPN服务端所使用的协议。取值：**UDP（默认值） | TCP**。
    * - SSLConfig.Port：SSL-VPN服务端所使用的端口，默认值为1194。端口范围1025-10000，以及避开以下知名端口[22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500](url)。
    * - SSLConfig.Cipher：SSL-VPN使用的加密算法。取值：**AES-128-CBC（默认值） |AES-192-CBC | AES-256-CBC | none**。
    * @example `{\”Port\":1194,\"Protocol\":\"UDP\",\"Cipher\":\"AES-256-CBC\”}`
    */ "SslConfig"?: string;
}
export { ModifyUisConnectionAttributeRequest };