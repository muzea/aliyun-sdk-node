export interface CreateImageRequest {
    /**
     * 镜像所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 用于创建自定义镜像的快照ID。
     * @example `s-bp17441ohwkdca0****`
     */
    "SnapshotId"?: string;
    /**
     * 实例ID。
     * @example `i-bp1g6zv0ce8oghu7****`
     */
    "InstanceId"?: string;
    /**
     * 镜像名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `TestCentOS`
     */
    "ImageName"?: string;
    /**
     * 镜像族系名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以aliyun和acs:开头，不能包含http://或者https://。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `hangzhou-daily-update`
     */
    "ImageFamily"?: string;
    /**
     * 镜像版本。
     * > 当您指定了实例ID（`InstanceId`），并且该实例的镜像是云市场镜像或者来自云市场镜像创建的自定义镜像时。该参数必须和当前实例的镜像的ImageVersion相同或置为空。
     * @example `2017011017`
     */
    "ImageVersion"?: string;
    /**
     * 镜像的描述信息。长度为2~256个英文或中文字符，不能以http://或https://开头。
     * @example `ImageTestDescription`
     */
    "Description"?: string;
    /**
     * 指定数据盘快照做镜像的系统盘后，需要通过Platform确定系统盘的操作系统发行版。取值范围：
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
     * @example `CentOS`
     */
    "Platform"?: string;
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
     * 指定数据盘快照做镜像的系统盘后，需要通过Architecture确定系统盘的系统架构。取值范围：
     * - i386。
     * - x86_64。
     * - arm64。
     * 默认值为x86_64。
     * @example `x86_64`
     */
    "Architecture"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 自定义镜像所在的资源组ID。如果不设置该参数值，创建的镜像属于默认资源组。
     * > 如果您当前使用的是RAM用户调用该接口，且`ResourceGroupId`取值为空，您需要注意，当RAM用户没有默认资源组权限时，调用接口会返回报错信息`Forbidden: User not authorized to operate on the specified resource`。请您设置RAM用户支持的资源组ID或者通过相应阿里云账号为该RAM用户授予默认资源组权限后，再次调用该接口。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 创建的自定义镜像信息列表。
     */
    "DiskDeviceMapping"?: {
        /**
         * 根据指定的快照创建自定义镜像。
         * @example `s-bp17441ohwkdca0****`
         */
        SnapshotId: string;
        /**
         * 云盘的大小，单位为GiB。DiskDeviceMapping.N.Size的取值和默认值和DiskDeviceMapping.N.SnapshotId有关：
         * - 如果没有指定SnapshotId，Size取值以及默认值为：
         *     - 普通云盘：5~2000GiB，默认为5。
         *     - 其他云盘：20~32768GiB，默认为20。
         * - 如果指定了SnapshotId，Size取值必须大于等于SnapshotId的大小，默认为SnapshotId的大小。
         * @example `2000`
         */
        Size: number;
        /**
         * 指定在自定义镜像中的设备名称。取值范围：
         * - 其他云盘（例如SSD云盘、高效云盘和ESSD云盘）：/dev/vda~/dev/vdz。
         * - 普通云盘：/dev/xvda~/dev/xvdz。
         * @example `/dev/vdb`
         */
        Device: string;
        /**
         * 指定在新镜像中的云盘类型。您可以通过该参数使用数据盘快照做为镜像的系统盘，如果不指定，默认为快照对应的云盘类型。取值范围：
         * - system：系统盘。只能指定 1 块系统盘快照。
         * - data：数据盘。最多可以指定 16 块数据盘快照。
         * @example `system`
         */
        DiskType: string;
    }[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 镜像的标签键。
         * >为提高兼容性，建议您尽量使用Tag.N.Key参数。
         * @example `null`
         */
        key: string;
        /**
         * 镜像的标签键。N的取值范围为1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或者`https://`。
         * @example `KeyTest`
         */
        Key: string;
        /**
         * 镜像的标签值。N的取值范围为1~20。一旦传入该值，允许为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
         * @example `ValueTest`
         */
        Value: string;
        /**
         * 镜像的标签值。
         * >为提高兼容性，建议您尽量使用Tag.N.Value参数。
         * @example `null`
         */
        value: string;
    }[];
    /**
     * 镜像检测策略，不配置此参数时不触发检测。仅支持标准（Standard）检测模式。
     * > 目前已支持大部分的Linux/Windows版本，关于镜像检测项与操作系统限制说明，请参见[镜像检测概述](~~439819~~)和[镜像检测操作系统限制](~~475800~~)。
     * @example `Standard`
     */
    "DetectionStrategy"?: string;
}
