export interface ListImagesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 镜像ID，N的取值范围：1~100
     */
    "ImageId"?: string[];
    /**
     * 镜像名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `testImageName`
     */
    "ImageName"?: string;
    /**
     * 镜像来源。取值范围：
     * - system：阿里云提供的公共镜像。
     * - self：您创建的自定义镜像。
     * - others：其他阿里云用户共享给您的镜像。
     * @example `system`
     */
    "ImageCategory"?: string;
    /**
     * 实例规格。
     * @example `ecp.ce.large`
     */
    "InstanceType"?: string;
    /**
     * 查询某种状态下的镜像。取值范围：
     * - Waiting：多任务排队中。
     * - Creating：镜像正在创建中。
     * - Copying：镜像正在复制中。
     * - Importing：镜像正在导入中。
     * - Available（默认）：您可以使用的镜像。
     * - CreateFailed：创建失败的镜像。
     * @example `Available`
     */
    "Status"?: string;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值，初次调用无需配置。
     * @example `ADBAAdDWBF2****`
     */
    "NextToken"?: string;
    /**
     * 返回的最大数，取值范围：1~100。
     * @example `50`
     */
    "MaxResults"?: number;
}
