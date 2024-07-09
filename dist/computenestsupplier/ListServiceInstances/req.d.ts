export interface ListServiceInstancesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 分页查询时每页行数。其中最大值为100行，默认值为20行。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
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
         * 若您需要模糊搜索，则在value处输入内容格式为：*xxx*。例如服务名称为我的服务，在模糊搜索时，可输入*我的*或者*服务*进行搜索。
         * - ServiceInstanceId：服务实例ID
         * - ServiceId：服务ID
         * - UserId：用户ID
         * - Version：服务版本
         * - Status：服务实例状态
         * - DeployType：部署类型
         * - ServiceType：服务类型
         * - OperationStartTimeBefore：代运维服务开始前
         * - OperationStartTimeAfter：代运维服务开始后
         * - OperationEndTimeBefore：代运维服务结束前
         * - OperationEndTimeAfter：代运维服务结束后
         * - OperatedServiceInstanceId：私有部署服务下代运维服务实例ID
         * - OperationServiceInstanceId：纯代运维服务下的服务实例ID
         * - EnableInstanceOps：服务实例是否开通代运维服务的功能
         * @example `ServiceInstanceId`
         */
        Name: string;
    }[];
    /**
     * 是否显示已删除。可能的值：
     * - true：显示
     * - false：不显示
     * @example `false`
     */
    "ShowDeleted"?: boolean;
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
     * @example `rg-aekzkt5buxxxxxx`
     */
    "ResourceGroupId"?: string;
}
