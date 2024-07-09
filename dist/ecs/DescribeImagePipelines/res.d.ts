export interface DescribeImagePipelinesResponse {
    /**
     *
     * @example `AAAAAdDWBF2****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 返回的镜像模板数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时每页行数。
     * @example `50`
     */
    MaxResults: number;
    ImagePipeline: {
        /**
         * 镜像模板的详细信息组成的列表。
         */
        ImagePipelineSet: {
            /**
             * 模板创建时间。
             * @example `2020-11-24T06:00:00Z`
             */
            CreationTime: string;
            /**
             * 镜像构建失败后是否释放中转实例。
             * @example `true`
             */
            DeleteInstanceOnFailure: boolean;
            /**
             * 实例规格。
             * @example `ecs.g6.large`
             */
            InstanceType: string;
            /**
             * 中转实例的公网出带宽大小。单位：Mbit/s
             * @example `0`
             */
            InternetMaxBandwidthOut: number;
            /**
             * 镜像模板ID。
             * @example `ip-2ze5tsl5bp6nf2b3****`
             */
            ImagePipelineId: string;
            /**
             * VPC的交换机ID。
             * @example `vsw-bp67acfmxazb4p****`
             */
            VSwitchId: string;
            /**
             * 中转实例的系统盘大小。单位：GiB
             * @example `40`
             */
            SystemDiskSize: number;
            /**
             * 描述信息。
             * @example `This is description.`
             */
            Description: string;
            /**
             * 源镜像。
             * - 当`BaseImageType=IMAGE`时，该参数值为自定义镜像ID。
             * - 当`BaseImageType=IMAGE_FAMILY`时，该参数值为镜像族系名称。
             * @example `m-bp67acfmxazb4p****`
             */
            BaseImage: string;
            /**
             * 企业资源组ID。
             * @example `rg-bp67acfmxazb4p****`
             */
            ResourceGroupId: string;
            /**
             * 目标镜像名称前缀。
             * @example `testImageName`
             */
            ImageName: string;
            /**
             * 源镜像类型。可能值：
             * - IMAGE：自定义镜像。
             * - IMAGE_FAMILY：镜像族系。
             * @example `IMAGE`
             */
            BaseImageType: string;
            /**
             * 模板名称。
             * @example `testImagePipeline`
             */
            Name: string;
            /**
             * 镜像模板内容。
             * @example `FROM IMAGE:m-bp67acfmxazb4p****`
             */
            BuildContent: string;
            Tags: {
                /**
                 * 标签键值对列表。
                 */
                Tag: {
                    /**
                     * 标签值。
                     * @example `TestValue`
                     */
                    TagValue: string;
                    /**
                     * 标签键。
                     * @example `TestKey`
                     */
                    TagKey: string;
                }[];
            };
            ToRegionIds: {
                /**
                 * 目标镜像待分发的地域列表。
                 */
                ToRegionId: string[];
            };
            AddAccounts: {
                /**
                 * 目标镜像共享的阿里云账号ID。
                 */
                AddAccount: string[];
            };
        }[];
    };
}
