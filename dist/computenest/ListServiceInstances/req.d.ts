export interface ListServiceInstancesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 分页查询时，每页显示的行数。每页最大100行，默认为20行。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的**NextToken**参数值。
     * @example `BBBAAfu+XtuBE55iRLHEYYuojI4=`
     */
    "NextToken"?: string;
    /**
     * 过滤器。
     */
    "Filter"?: {
        /**
         * 过滤器值列表。
         */
        Value: string[];
        /**
         * 过滤器名称，可选择一个或者多个名称进行查询。取值范围：
         * - Name：按服务名称查询。
         * 若您需要模糊搜索，则在value处输入内容格式为：\*xxx\*。例如服务名称为我的服务，在模糊搜索时，可输入\*我的\*或者\*服务\*进行搜索。
         * - ServiceInstanceName：按服务实例名称查询，当输入一个服务实例名称时进行模糊查询；当输入多个服务实例名称时进行精确查询。
         * - ServiceInstanceId：服务实例ID。
         * - ServiceId：服务ID。
         * - Version：服务版本。
         * - Status：服务实例状态。
         * - DeployType：部署类型。
         * - ServiceType：服务类型。
         * - OperationStartTimeBefore：代运维服务开始前。
         * - OperationStartTimeAfter：代运维服务开始后。
         * - OperationEndTimeBefore：代运维服务结束前。
         * - OperationEndTimeAfter：代运维服务结束后。
         * - OperatedServiceInstanceId：私有部署服务下代运维服务实例ID。
         * - OperationServiceInstanceId：纯代运维服务下的服务实例ID。
         * - EnableInstanceOps：服务实例是否开通代运维服务的功能。
         * @example `ServiceInstanceId`
         */
        Name: string;
    }[];
    /**
     * 用户自定义标签。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `key1`
         */
        Key: string;
        /**
         * 标签值。
         * @example `value1`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
}
