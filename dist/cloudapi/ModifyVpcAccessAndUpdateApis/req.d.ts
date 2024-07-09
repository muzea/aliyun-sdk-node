export interface ModifyVpcAccessAndUpdateApisRequest {
    /**
     * 需要修改的新vpcId
     * @example `vpc-m5e7jqfppv5wbvmdw5pg2`
     */
    "VpcId"?: string;
    /**
     * 需要修改的新的实例id
     * @example `
    i-uf6bzcg1pr4oh5jjmxxx
    `
     */
    "InstanceId"?: string;
    /**
     * 需要修改的端口号
     * @example `80`
     */
    "Port"?: number;
    /**
     * VPC授权的名称。
     * >
     * > - VPC授权名称不可修改，该参数不可用于修改；
     * > - 需要填写您当前VPC授权的名称。
     * @example `VpcName`
     */
    "Name": string;
    /**
     * 口令
     * @example `c20d86c4-1eb3-4d0b-afe9-c586df1e2136`
     */
    "Token"?: string;
    /**
     * ~~是否需要刷新关联的API，><warning>如果您的VPC授权需要更新，并且该授权被API关联并已经发布上线，需要配置为true，否则您的API的后端服务不会刷新></warning>
     * ~~
     * 该参数作废，更新VPC授权信息后如果有关联API存在，会自动更新API的元定义
     * @example `true`
     */
    "NeedBatchWork"?: boolean;
    /**
     * 刷新VPC授权
     * >
     * > - 若您的VPC资源实例ID发生变化，但IP地址未变，勾选后可进行刷新授权
     * @example `false`
     */
    "Refresh"?: boolean;
    /**
     * 后端授权的host
     * @example `iot.hu***ng.com`
     */
    "VpcTargetHostName"?: string;
}
