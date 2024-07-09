export interface GetFeatureDetailsResponse {
    /**
     * 请求ID。
     * @example `EBF833DA-D0E2-52BE-92E2-59CA56BE834E`
     */
    RequestId: string;
    /**
     * Terraform托管功能详情。
     */
    Terraform: {
        /**
         * Terraform版本列表。
         */
        SupportedVersions: {
            /**
             * 当前Terraform版本对应的Provider名称及版本。
             */
            ProviderVersions: {
                /**
                 * Provider名称。
                 * @example `alicloud`
                 */
                ProviderName: string;
                /**
                 * Provider版本列表。
                 */
                SupportedVersions: string[];
            }[];
            /**
             * Terraform版本。
             * @example `1.0.11`
             */
            TerraformVersion: string;
            /**
             * ROS支持的Terraform版本，与Terraform类型模板中Transform取值相同。
             * @example `Aliyun::Terraform-v1.0`
             */
            Transform: string;
            /**
             * ROS允许更新到的Terraform版本列表。
             */
            UpdateAllowedTransforms: string[];
        }[];
        /**
         * Terraform托管功能支持的资源类型。
         */
        SupportedResourceTypes: {
            /**
             * 支持系统标签`acs:ros:stackId`的资源类型列表。
             */
            SystemTag: string[];
            /**
             * 支持自定义标签的资源类型列表。
             */
            CustomTag: string[];
            /**
             * 支持询价的资源类型列表。
             */
            EstimateCost: string[];
            /**
             * 支持资源组的资源类型列表。
             */
            ResourceGroup: string[];
            /**
             * 支持风险检查的资源类型。
             */
            StackOperationRisk: {
                /**
                 * 操作类型为DeleteStack的风险检查所支持的资源类型的列表。
                 */
                DeleteStack: string[];
            };
        };
    };
    /**
     * 资源场景功能详情。
     */
    TemplateScratch: {
        /**
         * 资源场景支持的资源类型信息列表。
         */
        SupportedResourceTypes: {
            /**
             * 资源类型。
             * @example `ALIYUN::ECS::Disk`
             */
            ResourceType: string;
            /**
             * 是否支持源资源选择方式。取值：
             * - true：支持。
             * - false：不支持。
             * @example `true`
             */
            SourceResourcesSupported: boolean;
            /**
             * 是否支持源标签选择方式。取值：
             * - true：支持。
             * - false：不支持。
             * @example `true`
             */
            SourceTagSupported: boolean;
            /**
             * 是否支持源资源组选择方式。取值：
             * - true：支持。
             * - false：不支持。
             * @example `true`
             */
            SourceResourceGroupSupported: boolean;
            /**
             * 是否支持源标签、源资源组、源资源三种选择方式的任意一种。取值：
             * - true：支持。
             * - false：不支持。
             * @example `true`
             */
            SourceSupported: boolean;
            /**
             * 支持的资源场景类型列表。
             */
            SupportedTemplateScratchTypes: string[];
        }[];
    };
    /**
     * 资源清理器（ALIYUN::ROS::ResourceCleaner）功能详情。
     */
    ResourceCleaner: {
        /**
         * 支持清理的资源类型列表。
         */
        SupportedResourceTypes: {
            /**
             * 支持清理的资源类型。
             * @example `ECS:Instance`
             */
            ResourceType: string;
            /**
             * 该资源类型支持的过滤器列表。
             */
            SupportedFilters: string[];
            /**
             * 清理该类型资源可能产生的副作用列表。
             */
            SideEffects: string[];
        }[];
    };
    /**
     * 模板参数约束功能详情。
     */
    TemplateParameterConstraints: {
        /**
         * 模板参数约束支持的资源类型信息列表。
         */
        SupportedResourceTypes: {
            /**
             * 资源类型。
             * @example `ALIYUN::ECS::Disk`
             */
            ResourceType: string;
            /**
             * 对应资源支持的属性名称。
             */
            Properties: string[];
        }[];
    };
    /**
     * 偏差检测功能详情。
     */
    DriftDetection: {
        /**
         * 支持偏差检测的资源类型列表。
         */
        SupportedResourceTypes: string[];
    };
    /**
     * 资源导入功能详情。
     */
    ResourceImport: {
        /**
         * 支持资源导入的资源类型列表。
         */
        SupportedResourceTypes: {
            /**
             * 资源类型。
             * @example `ALIYUN::ECS::Disk`
             */
            ResourceType: string;
            /**
             * 资源的标识符属性列表。
             */
            ResourceIdentifiers: string[];
        }[];
    };
}
