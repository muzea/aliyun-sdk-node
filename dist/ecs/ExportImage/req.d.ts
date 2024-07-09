export interface ExportImageRequest {
    /**
     * 自定义镜像的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 自定义镜像ID。
     * @example `m-bp67acfmxazb4p****`
     */
    "ImageId": string;
    /**
     * 保存导出镜像的OSS bucket。
     * @example `testexportImage`
     */
    "OSSBucket": string;
    /**
     * 您的OSS  Object的前缀。可以由数字或者字母组成，字符长度为1~30。
     * @example `EcsExport`
     */
    "OSSPrefix"?: string;
    /**
     * 镜像文件的导出格式。取值范围：
     * - raw。
     * - vhd。
     * - qcow2。
     * - vmdk。
     * - vdi。
     * 默认值：raw。
     * @example `raw`
     */
    "ImageFormat"?: string;
    /**
     * 导出镜像时使用的RAM角色名称。
     * @example `AliyunECSImageExportDefaultRole`
     */
    "RoleName"?: string;
}
