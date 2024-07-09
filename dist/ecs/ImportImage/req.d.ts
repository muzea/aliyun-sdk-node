export interface ImportImageRequest {
    /**
     * 源自定义镜像的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 镜像名称。长度为2~128个字符。必须以大小写字母或中文开头，不能以`aliyun`或`acs:`开头，不能包含`http://`或者`https://`。可以包含数字、半角句号（.）、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `ImageTestName`
     */
    "ImageName"?: string;
    /**
     * 镜像的描述信息。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * @example `TestDescription`
     */
    "Description"?: string;
    /**
     * 系统架构。取值范围：
     * - i386。
     * - x86_64。
     * - arm64。
     * 默认值：x86_64。
     * @example `x86_64`
     */
    "Architecture"?: string;
    /**
     * 操作系统平台类型。取值范围：
     * - windows。
     * - linux。
     * 默认值：linux。
     * @example `linux`
     */
    "OSType"?: string;
    /**
     * 操作系统发行版。取值范围：
     * - Aliyun
     * - Anolis
     * - CentOS
     * - Ubuntu
     * - CoreOS
     * - SUSE
     * - Debian
     * - OpenSUSE
     * - FreeBSD
     * - RedHat
     * - Kylin
     * - UOS
     * - Fedora
     * - Fedora CoreOS
     * - CentOS Stream
     * - AlmaLinux
     * - Rocky Linux
     * - Gentoo
     * - Customized Linux
     * - Others Linux
     * - Windows Server 2022
     * - Windows Server 2019
     * - Windows Server 2016
     * - Windows Server 2012
     * - Windows Server 2008
     * - Windows Server 2003
     * 默认值：Others Linux。
     * @example `Aliyun`
     */
    "Platform"?: string;
    /**
     * 修改镜像的启动模式。取值范围：
     * - BIOS：BIOS启动模式。
     * - UEFI：UEFI启动模式。
     * 默认值：BIOS。如果`Architecture=arm64`，则该参数默认值为UEFI，且只能设置为UEFI。
     * > 您需要了解指定的镜像支持的启动模式，当通过该参数修改启动模式后，必须与镜像本身支持的启动模式匹配，实例才能正常启动。
     * @example `BIOS`
     */
    "BootMode"?: string;
    /**
     * 导入镜像时，使用的RAM角色名称。
     * @example `AliyunECSImageImportDefaultRole`
     */
    "RoleName"?: string;
    /**
     * 导入镜像后，激活操作系统采用的许可证类型。取值范围：
     * - Auto：由阿里云检测源操作系统并分配许可证。自动模式下，系统优先搜索您设置的`Platform`是否有阿里云官方渠道的许可证并分配给导入的镜像，如果缺乏该类许可，会切换成BYOL（Bring Your Own License）方式。
     * - Aliyun：根据您设置的`Platform`采用阿里云官方渠道的许可证。
     * - BYOL：源操作系统自带的许可证。采用BYOL时，您必须确保您的许可证密钥支持在阿里云使用。
     * 默认值：Auto。
     * @example `Auto`
     */
    "LicenseType"?: string;
    /**
     * 导入镜像所在的企业资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 创建的自定义镜像信息列表。
     */
    "DiskDeviceMapping"?: {
        /**
         * 自定义镜像大小。单位：GiB。
         * 该空间由系统盘和数据盘组成，您必须保证系统盘的空间大小大于等于导入的镜像文件大小。取值范围：
         * - N=1时，表示系统盘，取值范围：5 GiB~500 GiB。
         * - N=2~17时，表示数据盘。取值范围：5 GiB~2000 GiB。
         * 当您将源镜像文件上传至OSS后，可以在OSS Bucket中查看镜像文件的大小。
         * >该参数即将被弃用，为提高兼容性，请尽量使用`DiskDeviceMapping.N.DiskImageSize`参数。
         * @example `80`
         */
        DiskImSize: number;
        /**
         * 指定DiskDeviceMapping.N.Device在自定义镜像中的设备名。
         * > 该参数即将停止使用，为提高代码兼容性，建议您尽量不要使用该参数。
         * @example `null`
         */
        Device: string;
        /**
         * 镜像文件所在的OSS Bucket。
         * @example `ecsimageos`
         */
        OSSBucket: string;
        /**
         * 镜像格式。取值范围：
         * - RAW。
         * - VHD。
         * - QCOW2。
         * 默认值：无，表示阿里云自动检测镜像格式，以检测格式为准。
         * @example `QCOW2`
         */
        Format: string;
        /**
         * 镜像上传至OSS Bucket后，保存在Bucket中的镜像文件的文件名（key）。
         * @example `CentOS_5.4_32.raw`
         */
        OSSObject: string;
        /**
         * 导入镜像后，自定义镜像的空间大小。
         * 该空间由系统盘和数据盘组成，您必须保证系统盘的空间大小大于等于导入的镜像文件大小。取值范围：
         * - N=1时，表示系统盘，取值范围：5 GiB~500 GiB。
         * - N=2~17时，表示数据盘。取值范围：5 GiB~2000 GiB。
         * 当您将源镜像文件上传至OSS后，可以在OSS Bucket中查看镜像文件的大小。
         * @example `80`
         */
        DiskImageSize: number;
    }[];
    /**
     * 镜像的标签列表。
     */
    "Tag"?: {
        /**
         * 镜像的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 镜像的标签值。N的取值范围：1~20。一旦传入该值，允许为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 镜像检测策略，不配置此参数时不触发检测。仅支持标准（Standard）检测模式。
     * >目前已支持大部分的Linux/Windows版本，关于镜像检测项与操作系统限制说明，请参见[镜像检测概述](~~439819~~)和[镜像检测操作系统限制](~~475800~~)。
     * @example `Standard`
     */
    "DetectionStrategy"?: string;
    /**
     * 指定云盒的资源名称（ARN），用于唯一标识云端存储位置。
     * >仅当您需要从OSS ON云盒中导入镜像文件时，才需提供此参数的值。如果您使用的存储服务不是OSS ON云盒，则无需设置此参数。更多信息，请参见[什么是OSS ON云盒](~~430190~~)。
     * 正确的ARN格式应遵循：`arn:acs:cloudbox:{RegionId}:{AliUid}:cloudbox/{CloudBoxId}`的模式，其中`{RegionId}`应替换为云盒实际所在的地域ID，`{AliUid}`是阿里云账号（主账号）ID，而`{CloudBoxId}`是云盒ID。
     * @example `arn:acs:cloudbox:cn-hangzhou:123456:cloudbox/cb-xx***123`
     */
    "StorageLocationArn"?: string;
}
