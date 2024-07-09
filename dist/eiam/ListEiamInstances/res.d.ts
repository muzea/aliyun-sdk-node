export interface ListEiamInstancesResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 实例列表
     */
    Instances: {
        /**
         * 实例描述信息
         * @example `正式环境`
         */
        Description: string;
        /**
         * 实例Id
         * @example `idaas_eypq6ljgyeuwmlw672sulxxxxx`
         */
        InstanceId: string;
        /**
         * 实例创建时间
         * @example `1677810869300`
         */
        StartTime: number;
        /**
         * 实例sso域名地址
         * @example `xxxx.aliyunidaas.com`
         */
        SSODomain: string;
        /**
         * 实例developer私网域名地址
         * @example `eiam-developerapi-cn.vpc-proxy.aliyuncs.com`
         */
        DeveloperAPIPrivateDomain: string;
        /**
         * 实例developer公网域名地址
         * @example `eiam-developerapi.cn-hangzhou.aliyuncs.com`
         */
        DeveloperAPIPublicDomain: string;
        /**
         * 实例openApi私网域名地址
         * @example `eiam-cn.vpc-proxy.aliyuncs.com`
         */
        OpenAPIPrivateDomain: string;
        /**
         * 实例openApi公网域名地址
         * @example `eiam.cn-hangzhou.aliyuncs.com`
         */
        OpenAPIPublicDomain: string;
        /**
         * 实例状态
         * @example `RUNNING`
         */
        InstanceStatus: string;
        /**
         * 实例版本
         * @example `EIAM 2.0`
         */
        InstanceVersion: string;
    }[];
}
