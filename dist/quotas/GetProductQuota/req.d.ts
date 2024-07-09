export interface GetProductQuotaRequest {
    /**
     * 云产品的缩写名称。
     * > 关于如何获取云产品的缩写名称，请参见[ListProducts](~~440555~~)中的`ProductCode`。
     * @example `ecs`
     */
    "ProductCode": string;
    /**
     * 配额ID。
     * > 关于如何获取目标云产品的配额ID，请参见[ListProductQuotas](~~440554~~)中的`QuotaActionCode`。
     * @example `q_security-groups`
     */
    "QuotaActionCode": string;
    /**
     * 配额维度。
     * @example `{\"regionId\":\"cn-beijing\"}`
     */
    "Dimensions"?: {
        /**
         * 配额维度的Key。
         * > 对于支持维度的云产品，该参数必填，且`Dimensions.N.Key`和`Dimensions.N.Value`必须同时设置。N的取值范围取决于对应云产品支持的维度个数。支持维度的云产品包括：ecs（云服务器ECS）、edas（企业级分布式应用服务）、ecs-spec（云服务器ECS规格配额）和ess（弹性伸缩）等。
         * @example `regionId`
         */
        Key: string;
        /**
         * 配额维度的Value。
         * > 对于支持维度的云产品，该参数必填，且`Dimensions.N.Key`和`Dimensions.N.Value`必须同时设置。N的取值范围取决于对应云产品支持的维度个数。支持维度的云产品包括：ecs（云服务器ECS）、edas（企业级分布式应用服务）、ecs-spec（云服务器ECS规格配额）和ess（弹性伸缩）等。
         * @example `cn-hangzhou`
         */
        Value: string;
    }[];
}
