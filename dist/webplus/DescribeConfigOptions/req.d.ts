interface DescribeConfigOptionsRequest {
    "RegionId"?: string;
    /**
    * 技术栈类型
    * @example `we-5d3eaaea2977ca5251e*****`
    */ "StackId"?: string;
    /**
    * 环境ID
    * @example `ws-6c937c98a9c0296d0c48*****`
    */ "EnvId"?: string;
    /**
    * 初始化配置类型，可选以下值：
    *  - `HighAvailability`：高可用，该配置会将实例数设置为2，同时启用公网SLB
    *  - `StandAlone`：低成本，该配置会将实例数设置为1
    * @example `StandAlone`
    */ "ProfileName"?: string;
}
export { DescribeConfigOptionsRequest };