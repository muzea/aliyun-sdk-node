export interface ModifyImageAttributeRequest {
    /**
     * 自定义镜像所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 自定义镜像的ID。
     * @example `m-bp18ygjuqnwhechc****`
     */
    "ImageId": string;
    /**
     * 自定义镜像的名称。长度为2~128个字符。必须以大小字母或中文开头，不能以aliyun或acs:开头，不能包含http://或者https://。可以包含数字、半角句号（.）、半角冒号（:）、下划线（_）或者短划线（-）。
     * 默认值：空，表示保持原有名称不变。
     * @example `testImageName`
     */
    "ImageName"?: string;
    /**
     * 镜像状态，取值范围：
     * - Deprecated：将镜像设置为弃用状态。如果您已经共享的自定义镜像，必须先取消共享才能修改为弃用状态。对处于弃用状态镜像，不能共享和复制镜像。但是可以使用镜像创建实例或更换系统盘。
     * - Available：将镜像设置为可用状态。您可以将弃用状态的镜像恢复可用。
     * > 如果您需要回滚镜像族系中的自定义镜像至上一个版本，可以将最新可用的自定义镜像设置为弃用状态，但如果该镜像为镜像族系中唯一一个可用状态的自定义镜像，则弃用镜像以后该镜像族系将无可用状态自定义镜像用来创建实例，因此请谨慎操作。
     * @example `Deprecated`
     */
    "Status"?: string;
    /**
     * 镜像族系名称。长度为2~128个字符。必须以大小字母或中文开头，不能以aliyun或acs:开头，不能包含http://或者https://。可以包含数字、半角句号（.）、半角冒号（:）、下划线（_）或者短划线（-）。
     * 默认值：空。
     * @example `hangzhou-daily-update`
     */
    "ImageFamily"?: string;
    /**
     * 修改镜像的启动模式。取值范围：
     * - BIOS：BIOS启动模式。
     * - UEFI：UEFI启动模式。
     * - UEFI-Preferred：双启动模式。
     * > 建议您了解当前镜像支持的启动模式后再做修改，避免造成实例无法正常启动的情况出现。如果您不清楚当前镜像支持的启动模式，建议您使用镜像检测感知。关于镜像检测的更多信息，请参见[镜像检测概述](~~439819~~)。
     * > 有关镜像UEFI-Preferred启动模式的说明，请参见[ECS实例启动模式最佳实践](~~2244655~~)。
     * @example `BIOS`
     */
    "BootMode"?: string;
    /**
     * 导入镜像后，激活操作系统采用的许可证类型。当前仅支持BYOL。
     * BYOL：源操作系统自带的许可证。采用BYOL时，您必须确保您的许可证密钥支持在阿里云使用。
     * @example `BYOL`
     */
    "LicenseType"?: string;
    /**
     * 自定义镜像的描述信息。长度为2~256个字符。不能以http://或https://开头。
     * 默认值：空，表示保持原有描述信息不变。
     * @example `testDescription`
     */
    "Description"?: string;
    /**
     * 镜像特性相关属性。
     */
    "Features"?: {
        /**
         * 镜像是否支持NVMe。可能值：
         * - supported：支持。表示以该镜像创建的实例支持NVMe协议。
         * - unsupported：不支持。表示以该镜像创建的实例不支持NVMe协议。
         * @example `supported`
         */
        NvmeSupport: string;
    };
}
