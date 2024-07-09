export interface UpdateProvisionedProductRequest {
    /**
     * 产品组合ID。
     * > 存在默认启动选项时，无需填写PortfolioId。没有默认启动选项时，必须填写PortfolioId。获取PortfolioId的方法，请参见[ListLaunchOptions](~~ListLaunchOptions~~)。
     * @example `port-bp1yt7582g****`
     */
    "PortfolioId"?: string;
    /**
     * 产品ID。
     * @example `prod-bp18r7q127****`
     */
    "ProductId": string;
    /**
     * 产品版本ID。
     * > 当输入的ProductVersionId和Parameters与之前相比，两者都没有变化时，不允许更新实例。
     * @example `pv-bp15e79d26****`
     */
    "ProductVersionId": string;
    /**
     * 用户输入的模板参数。
     * N最大值为200。
     * > - Parameters为可选参数。如果需要指定Parameters，则Parameters.N.ParameterKey和Parameters.N.ParameterValue必须同时指定。
     * > - 当输入的ProductVersionId和Parameters与之前相比，两者都没有变化时，不允许更新实例。
     */
    "Parameters"?: {
        /**
         * 模板中定义的参数名称。
         * @example `instance_type`
         */
        ParameterKey: string;
        /**
         * 用户输入的模板参数值。
         * @example `ecs.s6-c1m1.small`
         */
        ParameterValue: string;
    }[];
    /**
     * 实例ID。
     * @example `pp-bp1ddg1n2a****`
     */
    "ProvisionedProductId": string;
    /**
     * 用户输入的自定义标签。
     * N最大值为20。
     * > - Tags为可选参数。如果需要指定Tags，则Tags.N.Key和Tags.N.Value必须同时指定。
     * > - 此标签会传递到资源栈中每个支持标签的资源中。
     */
    "Tags"?: {
        /**
         * 用户输入的自定义标签键。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `k1`
         */
        Key: string;
        /**
         * 用户输入的自定义标签值。
         * 最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
         * @example `v1`
         */
        Value: string;
    }[];
}
