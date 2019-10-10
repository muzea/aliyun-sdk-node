interface ResizeClusterV2Request {
    /**
    * 区域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 集群ID。
    * @example `C-D7958B72E59BAB88`
    */ "ClusterId": string;
    "HostGroup": string[];
    /**
    * 是否自动付费。
    * @example `true`
    */ "AutoPayOrder"?: boolean;
    /**
    * 虚拟交换机ID。
    * @example `vsw-bp10tvjyc77psy0z5h0ni`
    */ "VswitchId"?: string;
    /**
    * 是否开通公网IP。
    * @example `false`
    */ "IsOpenPublicIp"?: boolean;
    "HostComponentInfo"?: string[];
}
export { ResizeClusterV2Request };