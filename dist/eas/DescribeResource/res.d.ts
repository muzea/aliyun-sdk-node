export interface DescribeResourceResponse {
    /**
     * 请求ID。
     * @example `902976F2-6FAF-5404-8A4D-6CC223***`
     */
    RequestId: string;
    /**
     * EAS资源ID。
     * @example `eas-r-glkfpsxuw57x1h*****`
     */
    ResourceId: string;
    /**
     * EAS资源名称。
     * @example `my-resouce****`
     */
    ResourceName: string;
    /**
     * 资源组所在的集群ID。
     * @example `cn-beijing`
     */
    ClusterId: string;
    /**
     * 资源组创建时间。
     * @example `2020-05-19T14:19:42Z`
     */
    CreateTime: string;
    /**
     * 资源组最后更新时间。
     * @example `2021-02-24T11:52:17Z`
     */
    UpdateTime: string;
    /**
     * 资源组负责人ID。
     * @example `14401087478****`
     */
    OwnerUid: string;
    /**
     * 资源组中机器实例总数。
     * @example `4`
     */
    InstanceCount: number;
    /**
     * 资源组中预付费机器实例总数。
     * @example `1`
     */
    PrePaidInstanceCount: number;
    /**
     * 资源组中后付费机器实例总数。
     * @example `3`
     */
    PostPaidInstanceCount: number;
    /**
     * CPU总核数。
     * @example `16`
     */
    CpuCount: number;
    /**
     * GPU总数。
     * @example `1`
     */
    GpuCount: number;
    /**
     * 资源组状态。
     * @example `ResourceReady`
     */
    Status: string;
    /**
     * 返回信息。
     * @example `Resource is ready`
     */
    Message: string;
    /**
     * 额外信息。如VPC打通状态，SLS日志状态等。
     * @example `{"vswitch_id":"vsw-bp17uo6xebcusy****","gpu_share":true,"aux_vswitch_id_list":["vsw-bp13b3pvjap3vxn****","vsw-bp1nls8o5hk8mt8*****"],"security_group_id":"sg-bp1j1z7297hcink*****","vpc_id":"vpc-bp1kjr3rfyhx01*****","destination_cidr":"172.16.0.12/28","role_arn":"acs:ram::1157703270*****:role/AliyunServiceRoleForPaiEas","sls_project":"","sls_logstore":"","sls_status":"ResourceReady","sls_message":"","update_time":""}`
     */
    ExtraData: string;
    /**
     * 资源组类型，取值如下：
     * - Dedicated：专属资源组
     * - SelfManaged：自运维资源组
     * @example `Dedicated`
     */
    ResourceType: string;
}
