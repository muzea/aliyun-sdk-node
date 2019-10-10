interface ModifySmartAccessGatewayRequest {
    /**
    * 智能接入网关的所属区域。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 智能接入网关ID。
    * @example `sag-0ovhf732a9j0******`
    */ "SmartAGId": string;
    "OwnerId"?: number;
    "City"?: string;
    /**
    * 智能接入网关的名称。
    * 长度为2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-），但不能以`http://` 或` https://`开头。
    * @example `sag`
    */ "Name"?: string;
    /**
    * 智能接入网关的描述。
    * 长度为2-256个字符，必须以字母或中文开头，但不能以`http:// `或` https:/`/开头。
    * @example `sag描述`
    */ "Description"?: string;
    /**
    * 线下机构客户端用来通信的私网网段，确保各私网网段不冲突。
    * 如果智能接入网关终端设备的LAN口配置为动态方式，则线下已开启DHCP的客户端使用的IP地址会从您指定的第一个私网网段中分配。
    * @example `172.16.0.1/24`
    */ "CidrBlock"?: string;
    /**
    * 离线锁定功能用户设定的阈值，大于等于0。
    * 单位：秒。
    * @example `3`
    */ "SecurityLockThreshold"?: number;
    "RoutingStrategy"?: string;
}
export { ModifySmartAccessGatewayRequest };