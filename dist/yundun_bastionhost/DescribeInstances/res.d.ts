export interface DescribeInstancesResponse {
    /**
     * 查询到的堡垒机实例的总数量。
     * @example `4`
     */
    TotalCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `61D36C55-AAFC-4678-8FAD-34FEF9E7182E`
     */
    RequestId: string;
    /**
     * 查询到的堡垒机实例的列表。
     */
    Instances: {
        /**
         * 堡垒机实例绑定的VPC ID。
         * @example `vpc-bp1c85tzgqu1bf5b****`
         */
        VpcId: string;
        /**
         * 堡垒机实例绑定的交换机ID。
         * @example `vsw-bp1xfwzzfti0kjbf****`
         */
        VswitchId: string;
        /**
         * 堡垒机实例镜像的版本。
         * @example `3.2.41`
         */
        ImageVersion: string;
        /**
         * 堡垒机实例的规格。取值：
         * - **cloudbastion**：基础版
         * - **cloudbastion_ha**：企业双擎版
         * @example `cloudbastion_ha`
         */
        PlanCode: string;
        /**
         * 堡垒机实例的备注信息。
         * @example `测试API`
         */
        Description: string;
        /**
         * 堡垒机实例的到期的时间戳。单位为毫秒。
         * @example `1578326400000`
         */
        ExpireTime: number;
        /**
         * 该堡垒机实例是否为旧版堡垒机实例。取值：
         * - **true**：表示V2和V3.1系列的堡垒机实例。
         * - **false**：表示V3.2系列的堡垒机实例。
         * @example `false`
         */
        Legacy: boolean;
        /**
         * 堡垒机的实例ID。
         * @example `bastionhost-cn-78v1gh****`
         */
        InstanceId: string;
        /**
         * 堡垒机实例的公网域名。
         * @example `******lwb-public.bastionhost.aliyuncs.com`
         */
        InternetEndpoint: string;
        /**
         * 堡垒机实例所在的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 堡垒机实例的私网域名。
         * @example `******lwb.bastionhost.aliyuncs.com`
         */
        IntranetEndpoint: string;
        /**
         * 堡垒机实例的购买或续费的时间戳。单位为毫秒。
         * @example `1577681345000`
         */
        StartTime: number;
        /**
         * 堡垒机实例所在的企业资源组的ID。
         * @example `g-acfm26ougi****`
         */
        ResourceGroupId: string;
        /**
         * 堡垒机实例的状态。取值：
         * - **PENDING**：未初始化
         * - **CREATING**：创建中
         * - **RUNNING**：运行中
         * - **EXPIRED**：已过期
         * - **CREATE_FAILED**：创建失败
         * - **UPGRADING**：变配中
         * - **UPGRADE_FAILED**：变配失败
         * @example `RUNNING`
         */
        InstanceStatus: string;
        /**
         * 堡垒机实例的许可Code。
         * @example `bhah_ent_50_asset`
         */
        LicenseCode: string;
        /**
         * 公网是否可以访问该堡垒机实例。取值：
         * - **true**：公网可以访问该堡垒机
         * - **false**：公网不可访问该堡垒机
         * @example `true`
         */
        PublicNetworkAccess: boolean;
    }[];
}
