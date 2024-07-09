export interface CreateImagePipelineRequest {
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 企业资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 目标镜像共享的阿里云账号ID。N的取值范围：1~20。
     * @example `1234567890`
     */
    "AddAccount"?: number[];
    /**
     * 目标镜像待分发的地域列表。N的取值范围：1~20。
     * 不设置参数值时，默认只在当前地域创建镜像。
     * @example `cn-hangzhou`
     */
    "ToRegionId"?: string[];
    /**
     * 源镜像类型。取值范围：
     * - IMAGE：镜像。
     * - IMAGE_FAMILY：镜像族系。
     * @example `IMAGE`
     */
    "BaseImageType": string;
    /**
     * 源镜像。
     * - 当`BaseImageType=IMAGE`时，该参数取值为镜像ID。
     * - 当`BaseImageType=IMAGE_FAMILY`时，该参数取值为镜像族系名称。
     * @example `m-bp67acfmxazb4p****`
     */
    "BaseImage": string;
    /**
     * 模板名称。长度为2~128个字符，必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
     * >不设置`Name`时，默认使用`ImagePipelineId`返回值。
     * @example `testImagePipeline`
     */
    "Name"?: string;
    /**
     * 描述信息。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     * @example `This is description.`
     */
    "Description"?: string;
    /**
     * 目标镜像名称前缀。长度为2~64个字符，必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
     * 最终完整的镜像名称由系统自动拼接名称前缀与构建任务ID（`ExecutionId`），格式为`{ImageName}_{ExecutionId}`。
     * @example `testImageName`
     */
    "ImageName"?: string;
    /**
     * VPC的交换机ID。
     * 不设置参数值时，默认创建新的VPC与交换机，请确保您账号下VPC资源配额充足，更多信息，请参见[使用限制](~~27750~~)。
     * @example `vsw-bp67acfmxazb4p****`
     */
    "VSwitchId"?: string;
    /**
     * 实例规格。您可以调用[DescribeInstanceTypes](~~25620~~)查询不同的实例规格。
     * 不设置参数值时，默认按vCPU和内存最小的原则，自动设置实例规格，并受实例规格的库存影响。例如，默认选择ecs.g6.large实例规格，如果库存不足，将选择ecs.g6.xlarge实例规格。
     * @example `ecs.g6.large`
     */
    "InstanceType"?: string;
    /**
     * 中转实例的系统盘大小。单位：GiB。取值范围：20~500。
     * 默认值：40。
     * @example `40`
     */
    "SystemDiskSize"?: number;
    /**
     * 中转实例的公网出带宽大小。单位：Mbit/s。取值范围：0~100。
     * 默认值：0。
     * @example `0`
     */
    "InternetMaxBandwidthOut"?: number;
    /**
     * 镜像构建失败后是否释放中转实例。取值范围：
     * - true：释放。
     * - false：不释放。
     * 默认值：true。
     * > 中转实例如果没有成功启动，则实例默认不保留。
     * @example `true`
     */
    "DeleteInstanceOnFailure"?: boolean;
    /**
     *
     * @example `FROM IMAGE:m-bp67acfmxazb4p****`
     */
    "BuildContent"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
