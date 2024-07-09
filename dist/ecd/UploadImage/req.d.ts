export interface UploadImageRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 镜像文件的OSS Object路径。
     * @example `https://ossbucket:endpoint/object`
     */
    "OssObjectPath": string;
    /**
     * 镜像名称。长度为2\~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`和`https://`开头。可以包含数字、半角冒号（:）、下划线（\_）或者短划线（-）。
     * @example `Win10_Test`
     */
    "ImageName": string;
    /**
     * 镜像的描述信息。长度为2\~256个英文或中文字符，不能以`http://`和`https://`开头。
     * @example `test description`
     */
    "Description"?: string;
    /**
     * 操作系统类型。
     * @example `Windows`
     */
    "OsType"?: string;
    /**
     * 是否为GPU类型镜像。
     * @example `true`
     */
    "GpuCategory"?: boolean;
    /**
     * 协议类型。
     * @example `ASP`
     */
    "ProtocolType"?: string;
    /**
     * 数据盘大小，取值范围：80~500。单位：GiB。
     * @example `80`
     */
    "DataDiskSize"?: number;
    /**
     * 预装的GPU驱动类型。
     * @example `gpu_grid9`
     */
    "GpuDriverType"?: string;
    /**
     * 导入镜像后，激活操作系统采用的许可证类型。取值范围：
     * - Auto：由阿里云检测源操作系统并分配许可证。自动模式下，系统优先搜索您设置的`Platform`是否有阿里云官方渠道的许可证并分配给导入的镜像，如果缺乏该类许可，会切换成BYOL（Bring Your Own License）方式。
     * - Aliyun：根据您设置的`Platform`采用阿里云官方渠道的许可证。
     * - BYOL：源操作系统自带的许可证。采用BYOL时，您必须确保您的许可证密钥支持在阿里云使用。
     * 默认值：Auto
     * > Windows 10等系统无法通过阿里云激活，请将`LicenseType`设为自定义激活（BYOL）。
     * @example `Auto`
     */
    "LicenseType"?: string;
    /**
     * 是否开启安全检查。
     * @example `true`
     */
    "EnableSecurityCheck"?: boolean;
}
