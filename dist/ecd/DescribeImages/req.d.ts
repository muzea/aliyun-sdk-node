export interface DescribeImagesRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 分页查询时每页行数。
     * - 最大值：100
     * - 默认值：10
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 镜像类型。
     * @example `SYSTEM`
     */
    "ImageType"?: string;
    /**
     * 镜像状态。
     * @example `Available`
     */
    "ImageStatus"?: string;
    /**
     * 是否为GPU类型镜像。
     * @example `false`
     */
    "GpuCategory"?: boolean;
    /**
     * 协议类型。
     * @example `ASP`
     */
    "ProtocolType"?: string;
    /**
     * 操作系统语言。
     * @example `en-US`
     */
    "LanguageType"?: string;
    /**
     * 云电脑规格。可调用[DescribeDesktopTypes](~~436816~~)获取该参数。
     * @example `ecd.graphics.xlarge`
     */
    "DesktopInstanceType"?: string;
    /**
     * 镜像ID。可设置一个或多个。
     * @example `m-gx2x1dhsmusr2****`
     */
    "ImageId"?: string[];
    /**
     * 操作系统类型，默认为`null`。
     * @example `Windows`
     */
    "OsType"?: string;
    /**
     * GPU驱动版本号。
     * @example `417.22`
     */
    "GpuDriverVersion"?: string;
    /**
     * 会话类型。
     * @example `SINGLE_SESSION`
     */
    "SessionType"?: string;
    /**
     * 镜像版本信息。
     * @example `0.0.3-R-20220616.133609`
     */
    "FotaVersion"?: string;
    /**
     * 镜像名称。
     * @example `Win_01`
     */
    "ImageName"?: string;
}
