export interface GetServiceEstimateCostRequest {
    /**
     * 地域ID。
     * @example `cn-wulanchabu`
     */
    "RegionId"?: string;
    /**
     * 服务ID。
     * @example `service-16fbd358d75e49xxxxxx`
     */
    "ServiceId": string;
    /**
     * 服务版本。
     * @example `draft`
     */
    "ServiceVersion"?: string;
    /**
     * 模板名称。
     * @example `Custom_Image_Ecs`
     */
    "TemplateName"?: string;
    /**
     * 部署服务实例输入的参数。
     * @example `{\"PayType\":\"PostPaid\",\"InstancePassword\":\"xxxxxxxxxx\",\"EcsInstanceType\":\"ecs.g6.large\",\"VSwitchId\":\"vsw-0jlueyydpuekoxxxxxxxx\",\"VpcId\":\"vpc-0jlps6mjbgvpqxxxxxxxx\",\"ZoneId\":\"cn-wulanchabu-a\",\"Enable\":false,\"RegionId\":\"cn-wulanchabu\"}`
     */
    "Parameters"?: any;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。
     * @example `mRdxWuW2ts`
     */
    "ClientToken"?: string;
    /**
     * 服务实例ID。
     * @example `si-d6ab3a63ccbb4b17****`
     */
    "ServiceInstanceId"?: string;
    /**
     * 套餐名称。
     * @example `套餐一`
     */
    "SpecificationName"?: string;
    /**
     * 云市场购买订单时间信息。
     */
    "Commodity"?: {
        /**
         * 购买时长的单位，可选值：
         * - Year：年。
         * - Month：月。
         * - Day：日。
         * @example `Month`
         */
        PayPeriodUnit: string;
        /**
         * 购买时长。
         * @example `1`
         */
        PayPeriod: number;
    };
}
