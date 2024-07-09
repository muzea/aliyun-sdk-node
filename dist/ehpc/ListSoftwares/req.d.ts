export interface ListSoftwaresRequest {
    /**
     * E-HPC产品版本号。
     * 您可以调用[ListCurrentClientVersion](~~87223~~)接口查询产品版本号。
     * @example `1.0.0`
     */
    "EhpcVersion"?: string;
    /**
     * 镜像标签。
     * 您可以通过[ListImages](~~87213~~)查询镜像标签。
     * @example `CentOS_7.2_64`
     */
    "OsTag"?: string;
}
