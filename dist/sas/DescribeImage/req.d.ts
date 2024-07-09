export interface DescribeImageRequest {
    /**
     * 镜像所在的地域ID。
     * > 您可以调用[DescribeImageInstances](~~DescribeImageInstances~~)接口可以获取该参数。
     * @example `cn-hangzhou`
     */
    "ImageRegionId": string;
    /**
     * 镜像实例ID。
     * > 您可以调用[DescribeImageInstances](~~DescribeImageInstances~~)接口可以获取该参数。
     * @example `cri-hfs6gaawhyu6****`
     */
    "ImageInstanceId": string;
    /**
     * 镜像标签。
     * > 您可以调用[DescribeImageInstances](~~DescribeImageInstances~~)接口可以获取该参数。
     * @example `1.8.0.15`
     */
    "ImageTag": string;
    /**
     * 镜像仓库ID。
     * > 您可以调用[DescribeImageInstances](~~DescribeImageInstances~~)接口可以获取该参数。
     * @example `crr-7i88t7lx3fmf****`
     */
    "ImageRepoId": string;
}
