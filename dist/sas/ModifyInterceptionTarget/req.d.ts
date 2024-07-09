export interface ModifyInterceptionTargetRequest {
    /**
     * 网络对象ID。
     * >您可以调用[ListInterceptionTargetPage](~~ListInterceptionTargetPage~~)接口获取该参数。
     * @example `400913`
     */
    "TargetId": number;
    /**
     * 名称。
     * @example `test001`
     */
    "TargetName": string;
    /**
     * 目标类型。取值：
     * - **IMAGE**：镜像
     * @example `IMAGE`
     */
    "TargetType": string;
    /**
     * 命名空间。
     * >您可以调用[DescribeContainerTags](~~DescribeContainerTags~~)接口获取该参数。
     * @example `demo4`
     */
    "Namespace": string;
    /**
     * 应用名称。
     * >您可以调用[DescribeContainerTags](~~DescribeContainerTags~~)接口获取该参数。
     * @example `yasintt-daemonst`
     */
    "AppName"?: string;
    /**
     * 镜像列表。
     * >您可以调用[DescribeContainerTags](~~DescribeContainerTags~~)接口获取该参数。
     */
    "ImageList"?: string[];
    /**
     * 标签列表。
     * >您可以调用[DescribeContainerTags](~~DescribeContainerTags~~)接口获取该参数。
     */
    "TagList"?: string[];
}
