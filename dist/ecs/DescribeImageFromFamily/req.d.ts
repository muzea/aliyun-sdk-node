export interface DescribeImageFromFamilyRequest {
    /**
     * 镜像所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 镜像族系名称。
     * 自定义镜像、公共镜像、社区镜像、共享镜像均已支持镜像族系，使用方法及介绍请参见[镜像族系概述](~~174241~~)。
     * @example `hangzhou-daily-update`
     */
    "ImageFamily": string;
}
