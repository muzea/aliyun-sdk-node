export interface CreateApiGroupResponse {
    /**
     * 标签是否存在，取值：-**true**：存在-**false**：不存在
     * @example `True`
     */
    TagStatus: boolean;
    /**
     * api根路径
     * @example `/qqq`
     */
    BasePath: string;
    /**
     * 请求唯一标识
     * @example `FF3B7D81-66AE-47E0-BF69-157DCF187514`
     */
    RequestId: string;
    /**
     * API分组描述
     * @example `The weather informations`
     */
    Description: string;
    /**
     * API分组名称
     * @example `Weather`
     */
    GroupName: string;
    /**
     * API分组ID，系统生成，全局唯一
     * @example `523e8dc7bbe04613b5b1d726c2a7xx`
     */
    GroupId: string;
    /**
     * 实例ID
     * @example `apigateway-cn-v6419k43xxxxx`
     */
    InstanceId: string;
    /**
     * 系统给分组绑定的二级域名，用于测试API调用
     * @example `523e8dc7bbe04613b5b1d726xxxxxxxx-cn-hangzhou.alicloudapi.com`
     */
    SubDomain: string;
    /**
     * 实例类型
     * - CLASSIC_SHARED：共享实例经典网络
     * - VPC_SHARED：共享实例(VPC)
     * - VPC_DEDICATED：专享实例(VPC)
     * @example `VPC_SHARED`
     */
    InstanceType: string;
}
