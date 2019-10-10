interface CreateUisNetworkInterfaceRequest {
    "RegionId"?: string;
    /**
    * 指定弹性网卡绑定的Uis节点ID
    * @example `UISNODE-xxxdc9wyfmpf0tik5eyik`
    */ "UisNodeId": string;
    /**
    * 指定弹性网卡所在的VswitchID
    * @example `vsw-m5e1caexsmph0og6lis8h`
    */ "VswitchId": string;
    /**
    * 指定弹性网卡绑定的安全组ID
    * @example `sg-m5eiigbzenfqcpdt6nvi`
    */ "SecurityGroupId": string;
    "OwnerId"?: number;
    /**
    * 指定弹性网卡的私网IP
    * @example `192.168.199.199`
    */ "IpAddress"?: string;
    /**
    * 指定弹性网卡的名称
    * @example `TestUisENI`
    */ "Name"?: string;
    /**
    * 指定弹性网卡的描述信息
    * @example `ENI for test`
    */ "Description"?: string;
}
export { CreateUisNetworkInterfaceRequest };